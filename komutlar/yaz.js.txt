const Discord = require('discord.js');

exports.run = (client, message, args) => {
var idler = [
"393016615312031754",
"557447678959812618",
]
if (!idler.includes(message.author.id)) return message.channel.send('Bu komutu sadece **SAHİBİM KULLANABİLİR!**')

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};