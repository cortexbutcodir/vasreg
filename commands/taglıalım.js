const Discord = require("discord.js");
const config  = require("../config.json");
module.exports.run = (client, message, args) => {
  let embed = new Discord.MessageEmbed().setColor("#313136").setFooter().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
  let botcommands = "837761220416110652"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
let erkekrol = config.boyRoles
let kadınrol = config.girlRoles
let kayıtsızrol = config.unregisterRoles
let Tag = config.tag
let kullanıcılar = message.guild.members.cache
let etagsız = kullanıcılar.filter(a => !a.user.bot).filter(s => s.roles.cache.has(erkekrol)).filter(s => !s.user.username.includes(Tag)).size && (s => !s.user.username.includes("vâs")) && (s => !s.user.discriminator == '1843')
let ktagsız = kullanıcılar.filter(a => !a.user.bot).filter(s => s.roles.cache.has(kadınrol)).filter(s => !s.user.username.includes(Tag)).size && (s => !s.user.username.includes("vâs")) && (s => !s.user.discriminator == '1843')
message.channel.send(embed.setDescription(`
**${message.guild.name}** Tagsız Kayıtlılar

Erkek Rol : <@&${erkekrol}>
Kadın Rol :  <@&${kadınrol}>
Tagsız Erkek : ${etagsız}
Tagsız Kadın : ${ktagsız}

Toplam ${(etagsız + ktagsız) || "0"} Kişiye <@&${kayıtsızrol}> Veriliyor. :))`))
 kullanıcılar.filter(a => !a.user.bot)
.filter(s => s.roles.cache.has(erkekrol) || s.roles.cache.has(kadınrol))
.filter(a => !a.user.username.includes(Tag)).array().forEach(async element  => {
  element.roles.set([kayıtsızrol])
})

 message.reply("Bizi Seçtiğiniz İçin Teşekkür Ederiz Dağıtım Üye Süresine Göre Değişebilir. Seviliyosunuz Vâs Ailesi :))")

};

module.exports.config = {
  name: "taglıalım",
  description: "Belirtilen üyeyi kız olarak kaydeder.",
  usage: "taglıalım<@üye> [isim yaş]",
  aliases: ["taglıalım"],
};
