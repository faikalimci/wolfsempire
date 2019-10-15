const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

  try{
  let user = message.mentions.users.first();
  let member = msg.guild.member(user);
  let yetkilirol = '630735155937673226';
  let mute = '613814145938227201';
  if (!message.member.roles.has(yetkilirol)) return msg.reply('Bu komutu kullanabilmek için **Sunucu Yetkilisi+** rolüne sahip olmasın!')
 let uyarı = 'Bu Kişi Zaten **MUTE** Almış!'
 let uyarı1 = 'ne blm'
  
if (!user) return msg.reply('Kime MUTE atılcak!')

  if (member.roles.has(mute)) return msg.reply(uyarı)
  
  member.addRole(mute)
  msg.channel.send(`${user} Adlı Kullanıcıya Başarıyla **Mutelendi**!`)
} catch(neblm){
}
 
 
 
 
 
 
 
  /*613814144314900480 | ⊱ | Kayıtlı Üye (144 Üye)
613814145225064516 | ⊱ | Kayıtsız Üye (33 Üye)
615964079315615774 Sunucu Yetkilisi*/
  
  
  
  
  
  ///
  //
  //Kod Hikârú#1559 tarafından kodlanmıştır.
  //
  ///
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['register'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'mute  :3',
  usage: 'mute'
};

