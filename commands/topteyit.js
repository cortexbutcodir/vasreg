const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");
const config = require('../config.json') 
module.exports.run = async (client, message, args) => {
  let botcommands = config.staffRoles
  if(message.member.roles.cache.get(botcommands))
  return message.react('<a:vas_yess:839083988530102272>')
  let botcommands1 = "837761220383342672"
  if(message.member.roles.cache.get(botcommands1))
  return message.react('<a:vas_yess:839083988530102272>')
  let embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor(client.config.embedColor);
  let data = await teyitci.find().sort({ teyitler: "descending" });
  message.channel.send(embed.setDescription(`Top 20 Teyit Listesi;\n\n${data.length ? data.map((d, index) => `\`${index+1}.\` <@${d._id}> | ${d.teyitler}`).join("\n") : "Bulunamadı!"}`));
};

module.exports.config = {
  name: "topteyit",
  description: "Top 20 teyitçi listesi.",
  usage: "topteyit",
  aliases: ["top-teyit"],
};