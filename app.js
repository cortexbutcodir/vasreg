const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });
const fs = require("fs");
const config = client.config = require("./config.json");
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
moment.locale("tr");
const mongoose = require("mongoose");
mongoose.connect(config.mongooseConnectURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(x => console.log("MongoDB bağlantısı kuruldu!")).catch(err => console.error(err));
mongoose.connection.on('error', (err) => {
  console.log(`[Mongoose Error]: ${err}`);
});



Array.prototype.clear = function() {
  let newArray = [];
  for (let i of this) {
   if (!newArray.includes(i) && i !== "" && i !== " ") newArray.push(i);
  };
  return newArray;
};

Date.prototype.toTurkishFormat = function() {
  return moment.tz(this, "Europe/Istanbul").format('LLL');
};

const events = fs.readdirSync("./events");
for (let event of events) {
  if (!event.endsWith(".js")) continue;
  let prop = require(`./events/${event}`);
  if (!prop.config) continue;
  if (prop.config.name !== "ready") {
    client.on(prop.config.name, prop);
  } else {
    client.on(prop.config.name, () => prop(client));
  };
  console.log(`[KOMUT]: ${event} yüklendi!`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commands = fs.readdirSync("./commands");
for (let command of commands) {
  if (!command.endsWith(".js")) continue;
  let prop = require(`./commands/${command}`);
  client.commands.set(prop.config.name, prop);
  if (prop.config.aliases) {
    prop.config.aliases.clear().forEach(aliase => {
      client.aliases.set(aliase, prop.config.name);
    });
  };
  console.log(`[KOMUT]: ${prop.config.name} yüklendi!`);
};


client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(15, 'days').fromNow()
   let kanls = client.channels.cache.get(config.giriskanal)
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
  const kytsz = member.guild.roles.cache.find(r => r.id === "838342630253395978") 
   var rol = member.guild.roles.cache.get("838342604705628160") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.roles.add(rol)
   member.roles.remove(kytsz)
kanls.send(new Discord.MessageEmbed().setDescription(`${member} adlı kullanıcı sunuucmuza giriş yaptı hesabı ${moment(member.user.createdAt).format("``DD [Gün] HH [Saat] mm [Dakika]``")} önce oluşturulduğu için şüpheli hesap <a:vas_spheli:839198075129298954>`).setColor('#ff0000').setTimestamp().setFooter('Developed Cortex'))
member.user.send(`Selam Dostum hesabın ${moment(member.user.createdAt).format("`DD MMMM YYYY hh:mm:ss``")} gibi kısa sürede oluşturulduğu için ne yazıki şüpheli hesap kategorisne giriyorsun`)
setTimeout(() => {

}, 1000)


   }
        else {

        }
    });

client.on('guildMemberAdd', async (member) => {
  member.roles.add(config.unregisterRoles)
  member.setNickname('İsim')
})
client.on("ready", () => {
  client.channels.cache.get(config.botses).join();
})
client.on("message", message => {
  if (message.content === '.tag')
  message.channel.send('**Vâs & #1843**')
})
client.on("message", message => {
    if (message.content === 'tag')
    message.channel.send('**Vâs & #1843**')
  })
  client.on("message", message => {
    if (message.content === '!tag')
    message.channel.send('**Vâs & #1843**')
  })
  client.on("message", message => {
    if (message.content === '/tag')
    message.channel.send('**Vâs & #1843**')
  })




 client.on('guildMemberAdd', async (member) => {

      let cortexkanal = client.channels.cache.get(config.giriskanal)
    let cortexuser = client.users.cache.get(member.id);
    let cortexkullanıcı = client.users.cache.get(member.id)
    const cortexhesapkurulus = new Date().getTime()- cortexkullanıcı.createdAt.getTime();
    let cortej;
    moment.locale("tr");
    if (cortexhesapkurulus < 1296000000) cortej = '<a:vas_spheli:839198075129298954>' 
    if (cortexhesapkurulus > 1296000000) cortej = '<a:vas_yess:839083988530102272>'
    
    cortexkanal.send(`
    :tada: Vâs'a Hoşgeldin ${member} (\`${member.id}\`), <#838342664201437245> burada sunucu kurallarımız yazıyor okumayı unutma!\n\n Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("``DD MMMM YYYY hh:mm:ss``")} ${cortej}.\n\n İsmine \`Vâs?\` veya etiketine \`#1843\` alarak ekibimize katılabilirsiniz ve sunucuya erişebilirsiniz.\n\n<@&${config.staffRoles}> Yetkililerimiz seninle ilgilenecek, Seninle Birlikte \`${member.guild.memberCount}\` Kişiyiz!  
      `)
    })

     //
     
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = config.tag
  const sunucu = config.guildid
  const kanal = config.taglog
  const Cort = config.taglırol 
  const Corte = config.boyRoles
  const kız = config.girlRoles  
  const Cortes = config.unregisterRoles 
  const tags = client.guild.members.cache.filter(s => !s.bot).filter(member =>member.user.username.includes("Vâs") ||  member.user.username.includes("vâs") ||member.user.discriminator == "1843").size;
  

  try {

  if (newUser.username.toLowerCase().includes(tags) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(Cort)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tags} Tagımızı Aldığı için <@&${Cort}> Rolünü kazandı! `));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(Cort);
  }
  if (!newUser.username.toLowerCase().includes(tags) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(Cort)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tags} Tagımızı Çıkardığı için <@&${Cort}> Rolünü kaybetti!`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(Cort);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(kız);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(Corte);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(Cortes);
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});


    client.login(config.botToken);








