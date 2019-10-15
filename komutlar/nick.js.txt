const Discord = require("discord.js");



exports.run = async (client, message, args) => {
  if (!message.member.roles.has('615964079315615774')) return message.reply('Bu komutu sadece Sunucu yetkilileri kullanabilir!!')
try{
    let user = message.mentions.users.first();
    let member = message.guild.member(user)
    var argumentler = message.content.split(" ");
var isim = argumentler[2] ;
var yas = argumentler[3];
  var tag = `⊱ | `;
  if (!user) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)
if (!isim) return message.channel.send(`Bir takma ad yazmalısın.`)
 if (!yas) return message.channel.send(`Yaş belirtnediniz.`) 
  if (tag.length + isim.length + yas.length + 3 > 32) return message.channel.send(`Takma Ad 32 karakteri geçmez!`)


await member.setNickname(`${tag}${isim} [${yas}]`)
  message.channel.send(`İşlem başarılı!`)
}catch(e){
   return message.channel.send(`Bir hata oluştu!`)
  }
  
}
           
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  kategori: 'moderasyon',
  description: 'Belirtilen kullanıcının nickini düzenler.',
  usage: 'nick @etiket <nİck>'
};