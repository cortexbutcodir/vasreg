const Discord = require('discord.js')
const ms = require('ms')
const config = require('../config.json')
const moment = require("moment");
const { parseZone } = require("moment");
module.exports.run = async (client, message, args) => {



  
  if(!["838342570441572367"].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
  return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const vip = message.guild.roles.cache.find(r => r.id === '838342601148334081') 


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!args[0]) return message.channel.send('Bir kullanıcı belirt')  
let timereplace = args[0];
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat') 
 var tarih = new Date(Date.now())
 var tarih2 = ms(timereplace)
 var tarih3 = Date.now() + tarih2 + 1296000000
 let ay = moment(Date.now()+1296000000).format("MM")
 let gün = moment(Date.now()+1296000000).format("DD")
 let saat = moment(Date.now()+1296000000).format("HH:mm:ss")
 let yıl = moment(Date.now()+1296000000).format("YYYY")
 let kayıtsaat = `\`${gün} ${ay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${saat} (${yıl})\``


if (args[0] === 'erkek') {
    let name = args[2]
    if(!member) return message.channel.send(`Lütfen bir kişi belirt`)
    if(!name) return message.channel.send('Lütfen Geçerli bir isim gir')
    await member.roles.add(vip)
    await member.setNickname(`★ ${name}`)
    await member.roles.add(config.boyRoles)
    await member.roles.remove(config.unregisterRoles)
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setDescription(`
    \`•\` ${member}, ${message.author} Tarafından,
    \`•\` ${vip}, <@&${config.boyRoles}> Rolü Verildi.`)
    .setFooter(`Developer Cortex`)
    .setColor("0x2f3136")
    message.channel.send(embed) 

} else if(args[0] === 'kız') {
    let name = args[2]
    if(!member) return message.channel.send(`Lütfen bir kişi belirt`)
    if(!name) return message.channel.send('Lütfen Geçerli bir isim gir')
    await member.roles.add(vip)
    await member.setNickname(`★ ${name}`)
    await member.roles.add(config.girlRoles)
    await member.roles.remove(config.unregisterRoles)
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setDescription(`
    \`•\` ${member}, ${message.author} Tarafından,
    \`•\` ${vip}, <@&${config.girlRoles}> Rolü Verildi.`)
    .setFooter(`Developer Cortex`)
    .setColor("0x2f3136")
    message.channel.send(embed) 

}


  


}


module.exports.config = {
  name: "vip",
  description: "Belirtilen üyeyi erkek olarak kaydeder.",
  usage: "vip <@üye> [isim yaş]",
  aliases: ["vip", "özel"],
};