const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bu komutu kullanabilmen için **Mesajları Yönet** yetkisine sahip olman lazım canım ^')
let x = args[0]
if (!x) return message.reply('Miktar?')
if (x > 100) return console.log('WTH')

await message.channel.bulkDelete(x).catch(console.log('WTH'))
message.channel.send(""+x+" **adet mesaj sildim**").then(msg => {
    msg.delete(5000)
});


};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sil', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'sil <miktar>'
};