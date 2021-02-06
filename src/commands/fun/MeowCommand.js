const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

catURL = 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697';

module.exports = class MeowCommand extends BaseCommand {
  constructor() {
    super('meow', 'fun', []);
  }

  async run(client, message, args) {

    var timer = message.createdTimestamp;
    var timerPerc = timer%5;

    if(timerPerc == 0){
      catURL = 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697';
    }

    if(timerPerc == 1){
      catURL = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';
    }

    if(timerPerc == 2){
      catURL = 'https://i.ytimg.com/vi/uHKfrz65KSU/maxresdefault.jpg';
    }

    if(timerPerc == 3){
      catURL = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg';
    }

    if(timerPerc == 4){
      catURL = 'https://media.wired.com/photos/5cdefb92b86e041493d389df/master/pass/Culture-Grumpy-Cat-487386121.jpg';
    }


    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`~meow~ @WombaWomba`)
      .setImage(catURL)
      .setFooter("Cat #" + timerPerc + " From: " + message.author.tag, message.author.displayAvatarURL())
      .setColor(" #00CCFF")
      .setTimestamp();

    message.channel.send(sayEmbed);
    //message.channel.send(message.author.tag);
  }
}