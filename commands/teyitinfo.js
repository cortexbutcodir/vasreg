const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");

module.exports.run = async (client, message, args) => {
  let botcommands = "837132304287531028"
  if(message.member.roles.cache.get(botcommands))
  return message.react('<a:vas_yess:839083988530102272>')
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  let memberData = await teyitci.findById(member.id);
  if (!memberData) return message.channel.send(embed.setDescription(`${member} üyesinin teyit verisi bulunamadı!`));
  message.channel.send(embed.setDescription(`${member} üyesinin toplam **${memberData.teyitler}** teyiti bulunuyor!`));
};

module.exports.config = {
  name: "teyitbilgi",
  description: "Belirtilen yetkilinin teyit bilgisi.",
  usage: "teyitbilgi <@üye>",
  aliases: ["teyit-bilgi"],
};
