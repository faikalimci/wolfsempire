const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const moment = require('moment');
const db = require('quick.db');
require('moment-duration-format');
let express = require('express');
let app = express()
app.listen(process.env.PORT)

var prefix = "*"; 

client.on("ready", () => {
    client.user.setActivity('⊱ | Wolfs Empire™', { type: 3})
client.user.setStatus('dnd');
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an  ${client.channels.size} adet kanala, ${client.guilds.size} adet sunucuya ve ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet veriliyor!`);
    console.log("Bağlandım!")
});

client.on('message', async message => {
if (message.content ==  '*gel') {
  message.react('618843744049037314');
  if (message.author.id !== '393016615312031754') return message.reply('Bu komutu sadece **Faik Bey** kullanabilir :)')
  
  try {
if (!message.member.voiceChannel) return message.reply('Sesli bir kanala giriş yapmalısın.');
message.member.voiceChannel.join().catch(console.error);
return message.reply('Seninle Ölüme Bile Gelirim ')
  }catch(e){
    console.log(e.message)
  }
}
});


              

//edited By FaikBey//



client.on("message", async message => {
    if (message.content == prefix+'test'){
      client.emit('guildMemberAdd',message.member)
      message.reply('Başarılı!').then(m => m.delete(1500));
    }
   if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`İŞTE GELİYOR!`).then(m => {
    m.edit(`:ping_pong: Wow, Bu çok hızlı oldu dostum. **Pong!**\nMesaj Editleme zamanım ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API pingim ` + Math.round(client.ping) + `ms.`);
    });
}
    if (message.author.bot) return;
  if(!message.guild) return;
  if (message.content.toLowerCase() ===  'sa') {
    message.reply('Aleyküm selam!');
    message.react('613810373102927885');
  }
if (message.content ===  '*kurallar') {
  if (message.author.id !== '393016615312031754') return message.reply('Bu komutu sadece **Kurucular** kullanabilir :)')
    message.reply('\n🔴 Küfür Ve Argo Kullanımı Yasaktır \n🔴 Birilerine Sataşmak, Rahatsız Etmek, Trollemek Yasaktır \n🔴 Sunucuda Dini, Irki Ve Siyasi Görüşleri Tartışmak Yasaktır \n🔴 Spam Ve Flood Yapmak Yasaktır \n🔴 Karşı Cinsi Sunucu İçi Veya DM-den Rahatsız Etmek Yasaktır \n🔴 Müzik Botunu Boş Yere Meşgul Etmek Yasaktır \n🔴 Yetkililere Ve Sunucuya Saygısızlık Yapmak Yasaktır \n🔴 Youtube, Instagram Ve Twitch Linki Paylaşımı Yasaktır  \n🔴 Discord Sunucu Reklamı Yapmak Yasaktır '); 
   message.react('618843744049037314');
  } 
  if (message.content ===  '*renk listesi') {
    message.reply('https://media.discordapp.net/attachments/615092492626296832/627879002039910401/renk.gif '); 
   message.react('618843744049037314');
  } 
  if (message.content ===  'Selam') {
    message.reply('Aleyküm selam!');
    message.react('613810373102927885');
  }  
  if (message.content ===  'sahibin kim') {
    message.reply('Sahibim <@393016615312031754> dır')
  } 
  if (message.content ===  'İyi Geceler') {
    message.reply('İyi Geceler Sütünü İçmeyi UNUTMA!^^ :)');
    message.react('618843744049037314');
  }  
  if (message.content.toLowerCase() ===  'slm') {
    message.reply('Selam Güzellik Çay İçeli mi?');
    message.react('613810373102927885');
  }  
  if (message.content ===  'selamın aleyküm') {
    message.reply('Aleyküm selam!');
    message.react('613810373102927885');
  }   
 if (message.content ===  'günaydın') {
    message.reply('Günaydın Hoşgeldin^^ :)');
   message.react('618845170921635860');
  } 
  if (message.content ===  'Günaydın') {
    message.reply('Günaydın Hoşgeldin^^ :)');
    message.react('618845170921635860');
  } 
  if (message.content.toLowerCase() ===  '*insta') {
    message.reply('İnstagram: https://www.instagram.com/wolfistown/ ');
    message.react('618843744049037314');
  }
 if (message.content.toLowerCase() ===  '*sunucu') {
    message.reply('\n Sunucumuz 21 Ağustos 2019 tarihinde açılmıştır.Kurucusu Faik Alımcı dır.\n Bu sunucuda kendinize ait klan açabilirsiniz.\n Klan bilgisi için *klan yazmanız yeterlidir. :)');
    message.react('618843744049037314'); 
 }
  if (message.content.toLowerCase() ===  '*klan') {
    message.reply('Klanmı açmak istiyorsun dostum. Şartlar şunlar en az 7 kişi olman lazım. \n Ve klanını en az günde 1 defa kullanman lazım eğer aktif kulanmasan kapatılabilir.\n Detaylı bilgi için yetkililere ulaşın. ');
    message.react('618843744049037314');  
  }
  if (message.content.toLowerCase() ===  '*tag') {
    message.reply(' \n  ▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ \n Yazılı Tagımız : ! աรε™ \n Emoji Tagımız : ⊱ | \n ▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬ ');
    message.react('618843744049037314');  
  }
  if (message.content.toLowerCase() ===  'iyi geceler') {
    message.reply('İyi Geceler Sütünü İçmeyi UNUTMA!^^ :)'); 
    message.react('618843730681528330');
  }
   if (message.content.toLowerCase() ===  'ig') {
    message.reply('İyi Geceler Sütünü İçmeyi UNUTMA!^^ :)');
    message.react('618843730681528330');
   }
  if (message.content.toLowerCase().includes('csgo') || message.content.toLowerCase().includes('cs')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' CS:GO oynamak için arkadaş arıyor 🎮 \n           👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620604069861654528> Hey! CS:GO oynamak isteyen birisi var. 🕹 ')
    message.react('622739603954335759');
  } 
   if (message.content.toLowerCase().includes('pubg') || message.content.toLowerCase().includes('PlayerUnknowns Battlegrounds')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' PUBG oynamak için arkadaş arıyor 🎮 \n               👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620603984419487744> Hey! PUBG oynamak isteyen birisi var. 🕹 ')
    message.react('622737288182628362');  
  } 
  if (message.content.toLowerCase().includes('gta') || message.content.toLowerCase().includes('gta 5')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' GTA V oynamak için arkadaş arıyor 🎮 \n           👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620603993965461534> Hey! GTA V oynamak isteyen birisi var. 🕹 ')
    message.react('622741369387221005');
  } 
  if (message.content.toLowerCase().includes('mta') || message.content.toLowerCase().includes('Multi Thef Auto')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' MTA oynamak için arkadaş arıyor 🎮 \n              👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620604033459290150> Hey! MTA oynamak isteyen birisi var. 🕹 ')
    message.react('622742008267669507');
  } 
  if (message.content.toLowerCase().includes('sanalika')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' Sanalika oynamak için arkadaş arıyor 🎮 \n         👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620604042284105728> Hey! Sanalika oynamak isteyen birisi var. 🕹 ')
    message.react('622744883895205899')
  } 
  if (message.content.toLowerCase().includes('dst') || message.content.toLowerCase().includes('Dont Starve Together')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' Dont Starve Together oynamak için arkadaş arıyor 🎮 \n           👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620604060906684426> Hey! DST oynamak isteyen birisi var. 🕹 ')
    message.react('622742734838431744');
  } 
  if (message.content.toLowerCase().includes('zula') || message.content.toLowerCase().includes('zula online')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
   await message.reply(' Zula oynamak için arkadaş arıyor 🎮 \n            👍🏽 Lütfen oyun odalarına geçin ve bekleyin! \n 🕹 <@&620606587794489375> Hey! Zula oynamak isteyen birisi var. 🕹 ')
    message.react('622743939958702088');
  } 
  if (message.content.toLowerCase().includes('lol') || message.content.toLowerCase().includes('league of legends')) {//büyük küçük farketmez şimdi toLowerCase() ekledm xd
        message.react('622740593398906895');
    message.reply(' LoL oynamak için arkadaş arıyor 🎮 \n            👍🏽 Lütfen bir sesli odaya geçin ve bekleyin! \n 🕹 <@&620604003041935370> Hey! LoL oynamak isteyen birisi var. 🕹 ').then(m=>{
     let db = require('quick.db')
     let bekle = 600000;
     let lastDaily = db.fetch(`kullandinaq.${message.author.id}`)
     if (lastDaily !== null && bekle - (Date.now() - lastDaily) > 0) {
       const ms = require('parse-ms')
    let timeObj = ms(bekle - (Date.now() - lastDaily));
return message.reply(`Calmdown!`).then(m => m.delete(5000));
     }
     
      db.set(`kullandinaq.${message.author.id}`, Date.now())    
   })
  } 

});
//const sexxx = require('common-tags');
client.on("guildMemberAdd", async member => {
if (member.guild.id !== "613804729457311745" ) return;
let xd;
let kanal = client.channels.get("615497664578060298")

let emoji1 = client.emojis.get('627125294431731737') 
let emoji2 = client.emojis.get('627124671007031297')
let emoji3 = client.emojis.get('615572134546374679')
kanal.send(`
------${emoji1} ${member} **Dostum Hoşgeldin! Kuralları Okumayı Unutma!**  ${emoji1}------
${emoji2} **KAYIT İÇİN İSİM YAŞ YAZINIZ VE BEKLEYİNİZ YETKİLİLER İLGİLENCEKTİR!**${emoji2}
            ${emoji3} <@&615964079315615774> **Dostum Bakarmısın Kayıt İçin Biri Bekliyor!** ${emoji3}`).catch(sex=>{return});
if (member.user.id === '393016615312031754'){
xd = '<@393016615312031754> Aaa sahibim gelmiş :D'
return client.channels.get("615497664578060298").send(xd)
}

});
let botisim = 'neblm'
let log = message => {
  console.log(message)
}
let fs = require('fs');
/*
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
 */ 
  /*client.on('message',async message => {
const Discord = require('discord.js');
  let msg = message;
if (msg.content.startsWith(`*kayıt`)){
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
 
 
 
 
 
 
 
  613814144314900480 | ⊱ | Kayıtlı Üye (144 Üye)
613814145225064516 | ⊱ | Kayıtsız Üye (33 Üye)
615964079315615774 Sunucu Yetkilisi
  
  
  
  
  
  ///
  //
  //Kod Hikârú#1559 tarafından kodlanmıştır.
  //
  ///
}
});

  */
   
client.on('message',async msg =>{
  if (msg.author.id !== '393016615312031754') return
  if (msg.content.toLowerCase() === 'sa'){
return msg.channel.send('Hizzaya geçin, sahibim geldi :heart:')

  }
}); 
  
///// client.on('message', async message => {
/*	(async function() {
	const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
 let prefix = '*'
 
const commandFiles = await readdir('./komutlar/');
 commandFiles.forEach(f => {
        try {
            let commandFile = require(`./commands/${f}`);
            console.log(`Loading the ${commandFile.help.name} command!`);
            client.commands.set(commandFile.help.name, commandFile);
            commandFile.conf.aliases.forEach(alias => {
                client.aliases.set(alias, commandFile.help.name);
            });    
        } catch (e) {
            console.log(`Unable to load command ${f}: ${e}`);
        }
    });  

}());
});*/
  
 /*client.on('message', async message => { 
   const { Collection } = require('discord.js');
   const cooldowns = new Collection();

   let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
   let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!commandFile) return;
    if (!cooldowns.has(commandFile.help.name)) {
        cooldowns.set(commandFile.help.name, new Collection());
    }
    const member = message.member;
    const now = Date.now();
    const timestamps = cooldowns.get(commandFile.help.name);
    const cooldownAmount = (commandFile.conf.cooldown || 5) * 1000;

    if (!timestamps.has(member.id)) {
        timestamps.set(member.id, now);
    } else {
        const expirationTime = timestamps.get(member.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.channel.send(`**${member.user.username}**, please wait **${timeLeft.toFixed(1)}** cooldown time.`).then(msg=>msg.delete(3000));
        }

        timestamps.set(member.id, now);
        setTimeout(() => timestamps.delete(member.id), cooldownAmount);
    }

  try {
  let commands = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  commands.run(client, message,);
  if (!commands) return;
  } catch (e) {
      console.error(e)
  } finally {
  console.info(`${message.author.tag}[${message.author.id}] is using ${message.content.split(" ")[0].replace(prefix, '')} command on ${message.guild.name}[${message.guild.id}]`);
  }
 });*/
bot.commands = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let commandFile = files.filter(file => file.split(".").pop() === "js");

  if(commandFile.length <= 0) return console.log("Couldn't find commands.");

  commandFile.forEach((file, i) => {

    let props = require(`./komutlar/${file}`);

    console.log(`${file} has been loaded.`);

    bot.commands.set(props.help.name, props);

  });

});

client.on("ready", async () => {
  console.log(`${client.user.username} is now online on ${client.guilds.size} server(s)!`);
 // bot.user.setActivity("with Countdowns!");
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type === "dm") return;

  let prefix = '*'
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;

  let commandRaw = command.split(prefix)[1];
  let commandFile = bot.commands.get(commandRaw);

  if(commandFile) commandFile.run(bot, message, args);

});



client.login('NjMwODI0ODEyMjcyNTQ5OTA5.XZt7cg.h9H2h1FnJSk2HxYwnVMZbow01KM').catch(err => {
console.error('Giriş Yapamadım')
console.error(err.message)
});