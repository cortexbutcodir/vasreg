const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");
const kayitlar = require("../models/kayitlar.js");
const config = require('../config.json');
module.exports.run = async (client, message, args) => {
  let botcommands = "837761220383342672"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);  
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({ timeout: 5000 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`${member} senden üstün veya aynı rolde!`)).then(x => x.delete({ timeout: 5000 }));
  let name = args[1]
  if (args[1]) {
    var newName;
    args = args.filter(a => a.trim().length).slice(1);
    if (client.config.name_age) {
      let name = args.filter(a => isNaN(a)).map(a => a.charAt(0).replace("i", "İ").toUpperCase() + a.slice(1)).join(" ");
      if (!name) return message.channel.send(embed.setDescription(`Geçerli bir isim ve yaş belirtmelisin!`)).then(x => x.delete({ timeout: 5000 }));
      newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${name}`;
    } else {
      newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${args.join(" ")}`;
    };
    await member.setNickname(newName).catch(err => { return undefined; });
 message.guild.channels.cache.get("837761221846630430").send(`**${member}, Aramıza Hoşgeldin :tada:`)

  };
  if (client.config.unregisterRoles.some(r => member.roles.cache.has(r))) {
    await teyitci.findByIdAndUpdate(message.author.id, { $inc: { teyitler: 1 } }, { upsert: true });
    await kayitlar.findByIdAndUpdate(member.id, { $push: { kayitlar: [{ isim: member.displayName, roller: client.config.girlRoles, tarih: Date.now() }] } }, { upsert: true });
  };
  await member.roles.set(member.roles.cache.map(r => r.id).filter(r => !client.config.unregisterRoles.includes(r) && !client.config.boyRoles.includes(r)).concat(client.config.girlRoles)).catch(err => { return undefined; });
  message.channel.send(embed.setDescription(`${member} adlı kullanıcı \`${name}\` isminde kayıt edildi! (<@&${config.girlRoles}>)`).setColor("#d8afde").setFooter(`Cortex Developed`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setTimestamp());
  if(member.user.username.includes("Vâs") || user.user.username.includes("vâs") ||  member.user.discriminator == "1843") return member.roles.add(client.config.taglırol)
};

module.exports.config = {
  name: "kız",
  description: "Belirtilen üyeyi kız olarak kaydeder.",
  usage: "kız <@üye> [isim yaş]",
  aliases: ["k", "kiz", "girl", "woman"],
};
 