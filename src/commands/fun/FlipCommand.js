const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class FlipCommand extends BaseCommand {
  constructor() {
    super('flip', 'fun', []);
  }

  run(client, message, args) {
    var x = Math.round(Math.random());
    var winner = "Heads!";
    var coinimg = 'https://i.imgur.com/jk0VS19.png';

    if(x == 0){
      winner = "Tails!"
      coinimg = 'https://i.imgur.com/IwXOEed.png'
    }

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(winner)
      .setFooter(message.author.tag , message.author.displayAvatarURL())
      .setImage(coinimg)
      .setColor(" #ECAD2A")
      .setTimestamp();
    message.channel.send(sayEmbed);

  }
}