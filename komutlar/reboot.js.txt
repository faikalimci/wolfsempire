const Discord = require('discord.js');


exports.run = async (client, message, args) => {
if (message.author.id !== '393016615312031754' && message.author.id !== '410865885117415424') return message.channel.send('Bu komutu sadece **SAHİBİM** kullanabilir!**')

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reset', 
  description: 'Botu yeniden başlatır',
  usage: 'reset'
};