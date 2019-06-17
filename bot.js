const Discord = require('discord.js');
const Attachment = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';
const usedCommandRecently = new Set();

bot.on('ready', () => {
console.log('this bot is online');
bot.user.setActivity('Kings Raid');
})

bot.on('guildMemberAdd', member => {
const channel = member.guild.channels.find(channel => channel.name === "general");
if (!channel) return;
channel.send(`Welcome to the server, ${member}, please read the rules in the #readme-rules channel`)
})

bot.on('message', msg => {
let args = msg.content.substring(PREFIX.length).split(" ");
switch (args[0]) {
case 'info':

if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send('created by Your Majesty 【﻿Ｒｅｉｎｆｌｙ】')
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;

//heroes emoji

case 'aisha':
const attachment = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/aisha.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'annette':
const attachment2 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/annette.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment2);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'chrisha':
const attachment3 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/chrisha.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment3);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'cleo':
const attachment4 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/cleo.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment4);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'crow':
const attachment5 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crow.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment5);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'crowmit':
const attachment6 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crowmit.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment6);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'dimael':
const attachment7 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/dimael.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment7);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'erze':
const attachment8 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/erze.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment8);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'ezekiel':
const attachment9 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ezekiel.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment9);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'eztheo':
const attachment10 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/eztheo.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment10);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'frey':
const attachment11 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/frey.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment11);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'gladi':
const attachment12 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/gladi.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment12);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'jane':
const attachment13 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/jane.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment13);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'juno':
const attachment14 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/juno.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment14);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'kara':
const attachment15 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kara.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment15);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'kasel':
const attachment16 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kasel.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment16);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'laias':
const attachment17 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/laias.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment17);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'leonub':
const attachment18 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/leo.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment18);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'lilia':
const attachment19 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lilia.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment19);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'lucias':
const attachment20 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lucias.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment20);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'luna':
const attachment21 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/luna.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment21);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'may':
const attachment22 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/may.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment22);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'medi':
const attachment23 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/medi.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment23);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'miri':
const attachment24 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/miri.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment24);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'mirufall':
const attachment25 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirufall.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment25);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'mirusad':
const attachment26 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirusad.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment26);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'mitrash':
const attachment27 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mitrash.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment27);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'naila':
const attachment28 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/naila.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment28);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'nera':
const attachment29 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/nera.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment29);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'numbchase':
const attachment30 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/numbchase.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment30);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'oddy':
const attachment31 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/oddy.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment31);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'ophel':
const attachment32 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ophel.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment32);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'pavel':
const attachment33 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pavel.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment33);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'pris':
const attachment34 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pris.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment34);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'reina':
const attachment35 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/reina.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment35);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'rephy':
const attachment36 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rephy.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment36);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'rodi':
const attachment37 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rodi.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment37);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'scarchase':
const attachment38 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarchase.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment38);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'scarno':
const attachment39 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarno.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment39);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'scaryes':
const attachment40 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scaryes.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment40);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'seria':
const attachment41 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/seria.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment41);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'sham':
const attachment42 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sham.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment42);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'shea':
const attachment43 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/shea.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment43);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'sonia':
const attachment44 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sonia.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment44);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'theo':
const attachment45 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/theo.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment45);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'boys':
const attachment46 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/boys.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment46);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'girls':
const attachment47 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/girls.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment47);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'vero':
const attachment48 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/vero.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment48);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'viska':
const attachment49 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/viska.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment49);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'yanne':
const attachment50 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/yanne.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment50);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'zafir':
const attachment51 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/zafir.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment51);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'rein':
const attachment52 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rein.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment52);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'orty':
const attachment53 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/orty.png')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment53);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
case 'heroes':
const attachment54 = new Attachment('https://media.giphy.com/media/ii2tzta1FtNH9ISJ7Z/giphy.gif')
if (usedCommandRecently.has(msg.author.id)) {
msg.reply("wait 10s");
} else {
msg.channel.send(attachment54);
usedCommandRecently.add(msg.author.id);
setTimeout(() => {
usedCommandRecently.delete(msg.author.id);
}, 10000);
}
break;
}
})
