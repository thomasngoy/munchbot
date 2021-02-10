const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super('roll', 'fun', []);
  }


  run(client, message, args) {
    var x = Math.floor(Math.random()*6) + 1;
    var y = Math.floor(Math.random()*6) + 1;
    var z = x + y;

    var dice1 = "https://i.imgur.com/ZQzlpw6.gif";
    
    if(x == 2){
      dice1 = "https://i.imgur.com/QsmwQui.gif";
    } else if (x == 3){
      dice1 = "https://i.imgur.com/e6KGcxJ.gif";
    } else if (x == 4){
      dice1 = "https://i.imgur.com/tngZupv.gif";
    } else if (x == 5){
      dice1 = "https://i.imgur.com/kl3N8qh.gif";
    } else if (x == 6){
      dice1 = "https://i.imgur.com/KPQ7JYy.gif";
    }

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(message.author.username + " has rolled a " + x + "!")
      .setFooter(message.author.tag , message.author.displayAvatarURL())
      .setImage(dice1)
      .setColor(" #ECAD2A")
      .setTimestamp();

      try {
        message.channel.send(sayEmbed);
      } catch(err){
        console.log(err);
        message.channel.send('Something went wrong');
      }
  }
}