const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

  try{
  let user = message.mentions.users.first();
  let member = msg.guild.member(user);
  let yetkilirol = '615964079315615774';
  let kayıtsız = '613814145225064516';
  let kayıtlı = '613814144314900480';
  if (!message.member.roles.has(yetkilirol)) return msg.reply('Bu komutu sadece Sunucu yetkilileri kullanabilir!')
 let uyarı = 'Bu Kişi Zaten Kayıt Olmuş!'
 let uyarı1 = 'ne blm'
  
if (!user) return msg.reply('Kimi kayıt edeceğim ?')

  if (member.roles.has(kayıtlı)) return msg.reply(uyarı)
  
  member.removeRole(kayıtsız)
  member.addRole(kayıtlı)
  msg.channel.send(`${user} Adlı Kullanıcı Başarıyla Kayıt Oldu!`)
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
  name: 'kayıt',
  description: 'Kayıt  :3',
  usage: 'kayıt'
};

