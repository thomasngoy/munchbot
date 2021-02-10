const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super('roll', 'fun', []);
  }


  run(client, message, args) {
    var x = Math.floor(Math.random()*6) + 1;

    var diceimg = "https://i.imgur.com/s39XF8h.jpg"

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(message.author.username + " has rolled a " + x)
      .setFooter(message.author.tag , message.author.displayAvatarURL())
      .setImage(diceimg)
      .setColor(" #ECAD2A")
      .setTimestamp();

    message.channel.send(sayEmbed);
  }
}