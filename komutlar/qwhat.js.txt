const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let msg = message;

 msg.channel.send('Natali diyor; peşin alim').then(m => { 
   
   setTimeout(()=>{
   m.edit('Dedim, tamam hadi canim')
   }, 2500)
   setTimeout(()=>{
     m.edit('Biz de küvet yok duşakabin!')
   }, 3400)
   setTimeout (()=>{
     m.edit('Keltoş babana koş!!')
   }, 2300)
   setTimeout(()=>{
     m.edit('HIDIDI AL, BİTCH!')
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
  name: 'what',
  description: 'Kayıt  :3',
  usage: 'kayıt'
};

