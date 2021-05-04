const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");
const kayitlar = require("../models/kayitlar.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let botcommands = "837761220383342672"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
  let embed = new MessageEmbed()
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({ timeout: 5000 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`${member} senden üstün veya aynı rolde!`)).then(x => x.delete({ timeout: 5000 }));
  let name = args[1]
  if(!member.user.username.includes("Vâs") || user.user.username.includes("vâs") ||  member.user.discriminator == "1843") return message.channel.send(embed.setDescription(`${member} Kullanıcının kayıt olabilmesi için boost basmalı veya tag almalı!`).setColor("#ff0000").setFooter(` Vip almak için : .vip @KİŞİ/İD`).setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))).then(x => x.delete({timeout: 15000  }));
    if(!name) return message.channel.send(embed.setDescription(`Lütfen geçerli bir isim belirtiniz.`).setAuthor(message.author.tag, message.avatarURL({dynamic:true})).setColor('#ff0000').setFooter('Developed Cortexd').setTimestamp())
  if (client.config.unregisterRoles.some(r => member.roles.cache.has(r))) {
    await teyitci.findByIdAndUpdate(message.author.id, { $inc: { teyitler: 1 } }, { upsert: true });
    await kayitlar.findByIdAndUpdate(member.id, { $push: { kayitlar: [{ isim: member.displayName, roller: client.config.boyRoles, tarih: Date.now() }] } }, { upsert: true });
  };
  await member.ronles.set(member.roles.cache.map(r => r.id).filter(r => !client.config.unregisterRoles.includes(r) && !client.config.girlRoles.includes(r)).concat(client.config.boyRoles)).catch(err => { return undefined; });
  await member.setNickname(`★ ${name}`).catch(err => { return undefined; });
  message.channel.send(embed.setDescription(`${member} adlı kullanıcı \`${name}\` isminde kayıt edildi! (<@&${config.boyRoles}>)`).setFooter(`Cortex Developed`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setTimestamp());
  if(member.user.username.includes("Vâs") || user.user.username.includes("vâs") ||  member.user.discriminator == "1843") return member.roles.add(client.config.taglırol)
  };


  module.exports.config = {
    name: "erkek",
    description: "Belirtilen üyeyi erkek olarak kaydeder.",
    usage: "erkek <@üye> [isim yaş]",
    aliases: ["e", "boy", "man"],
  };