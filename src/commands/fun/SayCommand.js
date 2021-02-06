const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSend = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} says: ${messageToSend}`)
      .setFooter(message.author.tag , message.author.displayAvatarURL())
      .setImage(message.author.displayAvatarURL())
      .setColor(" #ECAD2A")
      .setTimestamp();
    try {
      message.channel.send(sayEmbed);
      message.delete();
    } catch(err){
      console.log(err);
      message.channel.send('I am not able to say that message');
    }
  }
}