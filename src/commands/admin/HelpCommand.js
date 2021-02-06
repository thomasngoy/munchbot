const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('~help: Gives you this list.\n~meow: Gives you a meow\n~flip: Flips a coin.\n~say <arg>: says something');
  }
}