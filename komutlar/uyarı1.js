const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

  try{
  let user = message.mentions.users.first();
  let member = msg.guild.member(user);
  let yetkilirol = '630735155937673226';
  let lady = '630737714622496798';
  if (!message.member.roles.has(yetkilirol)) return msg.reply('Bu komutu kullanabilmek için **Sunucu Yetkilisi+** rolüne sahip olmasın!')
 let uyarı = 'Bu Kişi Zaten Uyarı Seviyesi 1 Almış!'
 let uyarı1 = 'ne blm'
  
if (!user) return msg.reply('Kime Ceza rolü vercem!')

  if (member.roles.has(lady)) return msg.reply(uyarı)
  
  member.addRole(lady)
  msg.channel.send(`${user} Adlı Kullanıcıya Başarıyla Rolü Verildi!`)
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
  name: 'u1',
  description: 'u1  :3',
  usage: 'u1'
};

