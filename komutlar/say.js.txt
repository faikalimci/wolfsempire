const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

 msg.channel.send('Sayıyorum %31').then(m => { m.edit(message.guild.memberCount)}); 
  
  
  
  
  ///
  //
  //Kod Hikârú#1559 tarafından kodlanmıştır.
  //
  ///
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Kayıt  :3',
  usage: 'kayıt'
};

