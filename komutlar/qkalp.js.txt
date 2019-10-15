const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

 msg.channel.send('Bir bahçemiz var bir taraf çiçekli bir tarafsa çöl').then(m => { 
   
   setTimeout(()=>{
   m.edit('Bir tarafta gök kuşağı öbür tarafsa kör')
   }, 2500)
   setTimeout(()=>{
     m.edit('NEYİM VARKİ RAPTEN GARİ')
   }, 3400)
   setTimeout (()=>{
     m.edit('Yıllarım bi yetki verdi etki tepki oldum')
   }, 2300)
   setTimeout(()=>{
     m.edit('Aleminde Sagopa ve Ceza Rap için bir pranga')
   }, 2600)
 }); 
  
  
  
 // message.reply('...').then(m=>m.delete(3100));
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
  name: 'kalp',
  description: 'Kayıt  :3',
  usage: 'kayıt'
};

