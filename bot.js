const Discord = require('discord.js');
const { Attachment } = require('discord.js');
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
case 'nubleo':
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

//heroes knight info

case 'hero':
if (args[1] === 'aselica') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.169e4cba.png")
.setTitle("Aselica\nGuardian of the Sun")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Solar Halo, Ignisius", "When a normal attack hits the enemy 5 times, the target takes 20% more M.DMG for 10 seconds and is stunned for 0.5 seconds.", true)
.addBlankField(true)
.addField("S1: Sword of the Sun\nCost: 2\nCD: 9s", "Deals ??? M.DMG to enemy and surrounding enemies within range, and inflicts Stun for 3 sec.", true)
.addField("S2: Blessing of the Sun\nCost: 2\nCD: 20s", "Imbues the Blessing of the Sun to the ally with the highest ATK, reducing cooldown of all skills by 20% and increasing ATK by ??? for 15 sec.", true)
.addField("S3: Judgment of the Sun\nCost: 4\nCD: 20s", "Takes position, focuses to heal HP of nearby allies, excluding self, 8 times for a total of ??? , and increases their P.DEF by ??? for 5 sec. Deals a total of ??? M.DMG on enemies within range over 8 times, and decreases their M.DEF by ??? for 5 sec. After the end of the casting, heals HP of allies within range, excluding self, by ??? , and deals ??? M.DMG on enemies, and knocks them down for 3 sec.", true)
.addField("S4: Curse of the Sun", "Upon attack, inflicts Curse of the Sun on the target for 10 sec. Enemies with 10 stacks of Curses of the Sun will consume the stack to receive ??? M.DMG, and become inflicted with Blind for 2 sec, having their ATK reduced by 20% for 10 sec.", true)
.addBlankField(true)
.addField("UT1: Light of the Dawn", "[Sword of the Sun] Dispels all positive effects from enemies within range, and recovers own Mana by 200 upon hit.", true)
.addField("UT2: Bracelet of the Sun", "[Blessing of the Sun] Reduces Mana Cost by 1 and target takes 10% decreased P.DMG for 10 sec.", true)
.addField("UT3: Guardian's Trumpet", "[Judgment of the Sun] Gains Immunity to CC while in use, and increases P.DEF Boost and M.DEF Reduction by 20%.", true)
.addField("UT4: Will of Light", "[Curse of the Sun] Increases the duration of Blind by 1 sec. Upon activation, targets take 10% increased M.DMG for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'clause') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.aa6d7a8d.png")
.setTitle("Clause\nKnight of Iron Defense")
.addField("Class", "Knight", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: The Guardian, Exian", "Upon casting an active skill 3 times, increases P.DEF and ATK for all allies by 10% for 10 sec. ATK boost is doubled for the ally with the highest ATK.", true)
.addBlankField(true)
.addField("S1: Cut Ground\nCost: 2\nCD: 9s", "Leaps into the air and deals ??? P.DMG to enemies in range, stunning them for 3 sec.", true)
.addField("S2: Shield Strike\nCost: 1\nCD: 8s", "Deals ??? P.DMG proportional to DEF to enemies in range and knocks them back. Hit enemies' DEF is reduced by 30%. Upon blocking an attack, skill cooldown is reduced by 0.5 sec.", true)
.addField("S3: Guardian Shield\nCost: 2\nCD: 12s", "All allies' P.DEF is increased by ??? for 20 sec and P.Crit Resistance is increased by 30%.", true)
.addField("S4: Vow of Knights", "Upon blocking, deals ??? P.DMG to frontal enemies and decreases ATK of affected targets by 20% for 8 sec. Recovers 300 MP after hitting the target.", true)
.addBlankField(true)
.addField("UT1: Cape of Justice", "[Cut Ground] Increases P.DMG target receives by 10% for 10 sec, and recovers own Mana by 400 per every hit enemy.", true)
.addField("UT2: Firm Determination", "[Shield Strike] Reduces P.Crit Resistance of the affected enemy by 500 and Crit Chance by 100 for 10 sec.", true)
.addField("UT3: Guardian Knight Insignia", "[Guardian Shield] Upon activation, removes negative effects on self, and DEF boost is increased by 20%.", true)
.addField("UT4: Mittens", "[Vow of Knights] Upon activation, heals HP by 2% of Max HP, and increases own P.DEF by 20% for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'demia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.36934293.png")
.setTitle("Demia\nFortress of Steel")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: The Blue Light, Arpheus", "Increases P.DEF of all allies by 4%. Blocking an enemy attack has a 10% chance to recover 3% Mana and reduce Cooldown of all skills by 1 sec.", true)
.addBlankField(true)
.addField("S1: Penetration\nCost: 3\nCD: 11s", "Throws a spear at the furthest enemy, dealing ??? P.DMG and drawing the enemy in front of the hero. Then deals ??? P.DMG to enemies in range, stunning them for 3 sec.", true)
.addField("S2: Will to Win\nCost: 2\nCD: 15s", "Upon blocking enemy attack for 15 sec, triggers a shockwave that deals ??? P.DMG to enemies in range, reducing their ATK by 20%.", true)
.addField("S3: Steel Fortress\nCost: 4\nCD: 22s", "Upon DMG block during casting, jump attack DMG is increased by 7%. Also, deals ??? P.DMG to enemy and inflicts stun. After casting, jumps and attacks the enemy, dealing ??? P.DMG and stunning them for 4 sec. Gains immunity to CC while the skill is in use.", true)
.addField("S4: Spearhead", "All allies' P.DEF is increased by ??? and P.Block chance is increased by 250.", true)
.addBlankField(true)
.addField("UT1: Chest of Ziltrion", "[Penetration] Increases ACC by 750, and CC ACC by 300 for the duration of skill.", true)
.addField("UT2: Shield of Resolution", "[Will to Win] Increases DMG by 50% and P.Weakness of the target by 10% for 10 sec.", true)
.addField("UT3: Aura of Protection", "[Steel Fortress] Mana cost is reduced by 1 and jump attack's Stun duration is increased by 1 sec.", true)
.addField("UT4: Ring of Ziltrion", "[Spearhed] Increases DEF boost by 50%. All allies have their P.Crit Resistance increased by 100.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'dosarta') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.724e2922.png")
.setTitle("Dosarta\nWind of Purity")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Ancient Valor, Seliere", "At the beginning of each battle, increases ATK of all allies by 10%, all DEF by 20%, and reduces the Mana Cost of the next Skill used by self by 1 for 10 sec. This effect cannot be dispelled.", true)
.addBlankField(true)
.addField("S1: This Will Hurt!\nCost: 3\nCD: 14s", "After increasing CC Resist of allies within self's range by 200 for 10 sec, attacks enemies to deal ??? M.DMG and causes them to take 30% increased M.DMG for 10 sec. Hit enemies become unable to recover Mana for 3 sec.", true)
.addField("S2: On Guard!\nCost: 2\nCD: 16s", "Dispels negative effects from all allies and increases P.DEF by ??? + 4% of Dosarta's ATK for 10 sec.", true)
.addField("S3: Hya! Kya! Take this!\nCost: 4\nCD: 20s", "Attacks a target 4 times, dealing a total of ??? M.DMG and stunning it for 4 sec. Afterward, launches a final attack on frontal enemies within range, dealing ??? M.DMG and pulling them to the center. Against Non-Hero enemies, each attack deals additional ??? M.DMG that ignores DEF.", true)
.addField("S4: Let Us Challenge Together!", "Upon blocking, reduces Cooldown of self's active Skills by 1 sec and increases P.DEF of self by ??? + 1% of Dosarta's ATK for 4 sec. A 6 -sec Cooldown will be applied.", true)
.addBlankField(true)
.addField("UT1: Bracelet of Elidora", "[This Will Hurt!] Increases Heal Rate of allies within range by 20% for 4 sec and reduces Heal Rate of hit enemies by 50% for 4 sec.", true)
.addField("UT2: Crystal of the Forest", "[On Guard!] Increases DEF Boost by 50%, and increases Crit Chance by 200 for 5 sec.", true)
.addField("UT3: Wind Elemental's Nest", "[Hya! Kya! Take this!] Increases ACC by 750 and CC ACC by 300 for the duration of skill.", true)
.addField("UT4: Feather of Wind", "[Let Us Challenge Together!] P.DEF Boost is applied to all allies and adds 6% P.DMG Reduction Effect for the duration of Skill.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'glenwys') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.46187a1a.png")
.setTitle("Glenwys\nShield of Empire")
.addField("Class", "Knight", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: The Counterattack, Maxithea", "Whenever a Skill is cast, increases ATK of all allies by 1% and Crit DMG by 2%. This effect stacks up to 4 times, and all effects are doubled at max stack. This effect cannot be dispelled.", true)
.addBlankField(true)
.addField("S1: That Is It\nCost: 2\nCD: 9s", "Deals a total of ??? P.DMG over 7 attacks to frontal enemies. Each attack increases P.DMG the enemies take by 4% for 10 sec. This effect stacks up to max 7 times. Deals additional ??? P.DMG to Non-Hero target.", true)
.addField("S2: I Will Not Stay My Hand\nCost: 3\nCD: 15s", "Deals ??? P.DMG over 10 attacks to nearby enemies in a circular range of self and stuns them for 1 sec. The final attack deals ??? P.DMG to frontal enemies and stuns them for 3 sec.", true)
.addField("S3: Time For Counterattack\nCost: 4\nCD: 17s", "Calling upon the strength of the Imperial Shield, deals ??? P.DMG to nearby enemies in a large circular range of self and knocks them down for 3 sec. Dispels negative effects from all allies, increases ATK by ??? for 20 sec, and increases DEF by ???.", true)
.addField("S4: Pride of Imperial Knights", "Increases ATK of all allies by ???. At the beginning of each battle, increases DMG to Non-Hero enemies by 10% for 20 sec, reducing DMG received by 10%.", true)
.addBlankField(true)
.addField("UT1: Alpha Leader Badge", "[That Is It] Increases DMG by 50% and reduces Cooldown by 1% on upon a Critical Hit.", true)
.addField("UT2: Praise of Dandelion", "[I Will Not Stay My Hand] Reduces Cooldown by 4.5 sec and enemy Heal Rate by 20%.", true)
.addField("UT3: Ballas Ruby", "[Time For Counterattack] Increases the amount of ATK and DEF Boost by 50% and causes the hit target to take 10% increased P.DMG for 10 sec.", true)
.addField("UT4: Golden Glory", "[Price of Imperial Knights] Increases ATK Boost by 50%. At the beginning of each battle, increases Crit DMG of self and an ally with the highest ATK besides self by 30% for 20 sec, and increases DMG to Non-Hero enemies by 10%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'jane') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.0a9f6466.png")
.setTitle("Jane\nAlabaster Corpse")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Unchanging Mind, Erekura", "Per every sec, deals 10% of ATK as M.DMG to nearby enemies, and reduces their ATK by 14%. When the passive skill is activated, recovers 30% of mana.", true)
.addBlankField(true)
.addField("S1: Funeral Rites\nCost: 2\nCD: 8s", "Deals ??? M.DMG to enemies in range, stunning them for 3 sec.", true)
.addField("S2: Mark of Death\nCost: 1\nCD: 6s", "Engraves a Mark on all enemies for 30 sec and deals ??? M.DMG over time. Enemies engraved with Mark takes 25% more M.DMG.", true)
.addField("S3: Day of Ruin\nCost: 3\nCD: 12s", "For 15 sec, deals a total of ??? M.DMG to all enemies and recovers 100% of DMG as own HP. Gains immunity to CC. Marked enemies take increased DMG.", true)
.addField("S4: Rest in Peace", "Upon taking a deathblow, enters a coffin for 5 sec and heals ??? + 6% of Max HP. Gains immunity to all DMG while inside the coffin.", true)
.addBlankField(true)
.addField("UT1: Funeral Doll", "[Funeral Rites] For 10 sec, reduces the target's CC Resist by 250 and M.Block by 200.", true)
.addField("UT2: Death-imbued Cushion", "[Mark of Death]Increases ATK by 5% and Crit DMG by 10% for 20 sec when the marked enemy dies. This effect stacks up to 8 times.", true)
.addField("UT3: Flowers of a Forgotten Dukedom", "[Day of Ruin]DMG is increased by 20% and with every DMG dealt, target's M.DEF is reduced by 5% for 5 sec. This effect can be stacked max 10 times.", true)
.addField("UT4: First Friend Doll", "[Rest in Peace] Upon activation, dispels all negative effects from all allies and reduces All DMG dealt on self by 10% for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'loman') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.544a5613.png")
.setTitle("Loman\nThe Gatekeeper of Trust")
.addField("Class", "Knight", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Wave of Protection, Gaiamenes", "Pride of Orvelia' is stacked on every use of skills. 'Pride of Orvelia' cannot be dispelled, and when stacked 3 times, 'Blessing of Orvelia' is activated, dealing 200% of ATK as P.DMG to enemies within a wide range and increasing P.Weakness of the targets by 25% for 20 seconds. 'Blessing of Orvelia' also increases M.DEF by 10% for 10 seconds.", true)
.addBlankField(true)
.addField("S1: Cut Ground\nCost: 2\nCD: 8s", "Deals ??? P.DMG to frontal enemies within range and knocks them down for 4 sec, increasing P.Weakness of the affected targets by 25% for 10 sec.", true)
.addField("S2: Shrouding Creed\nCost: 3\nCD: 23s", "Removes negative effects from all allies. Casts a shield upon all allies that absorbs ??? DMG for 5 second(s) and reduces all DMG to allies by 20% for 10 second(s). The shield grants immunity to CC while it lasts.", true)
.addField("S3: Knight's Creed\nCost: 3\nCD: 24s", "Hits frontal enemies within range 3 times. First 2 hits deal ??? P.DMG and stun enemies for 1.5 second(s) while the last hit attacks enemies in wider range 2 times, dealing ??? P.DMG in total. The last hit stuns enemies for 5 seconds and leaves [Mark of Creed] on the enemies, damaging them for 15 second(s). Targets with [Mark of Creed] take additional ??? P.DMG from allies excluding caster. Additional DMG effect is activated only once every 0.5 second(s).", true)
.addField("S4: The Last Gatekeeper", "Stacks [Endurance] every second. [Endurance] cannot be dispelled, and when stacked 20 times, deals ??? P.DMG, ignoring DEF on nearby enemies and reduces ATK of affected enemies by 20% for 10 second(s). A successful block grants 1 additional [Endurance] stack. This effect is activated only once every 0.2 second(s).", true)
.addBlankField(true)
.addField("UT1: Basic Combat Techniques of Orvelian Knights", "[Cut Ground] For 10 sec, reduces the target's P.Block by 500 and CC Resist by 100.", true)
.addField("UT2: Wooden Doll Miniature", "[Shrouding Creed] Reduces Mana Cost by 1 and recovers target's Mana by 400.", true)
.addField("UT3: Sea of Invocation", "[Knight's Creed] Reduces Cooldown by 30%, and increases P.Weakness of the target by 10% for 10 seconds.", true)
.addField("UT4: Father's Shield", "[The Last Gatekeeper] Increases own M.Block by 200. Upon block, the number of Endurance Stacks increases by 1.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'morrah') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.55d70d87.png")
.setTitle("Morrah\nDevil's Flame")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Flame of Victory, Carprain", "Normal attacks have a 20% chance to reduce ATK of the target by 10% and cause the target to take 10% increased M.DMG for 10 sec. If the target has more than 100 stacks of Flame, M.DMG boost is doubled.", true)
.addBlankField(true)
.addField("S1: Burning Power\nCost: 2\nCD: 6s", "Deals ??? M.DMG to enemies in range and knocks them down, inflicting 3 stacks of Flame. Then for 15 sec, each auto attack deals ??? M.DMG and inflicts 1 stack of Flame on enemy. Per each stacked Flame, DMG is increased by 2%. Each Flame stack deals separate M.DMG and reduces Heal rate by 1%.", true)
.addField("S2: Hellfire\nCost: 3\nCD: 12s", "For 20 sec, all allies' M.DEF is increased by ??? and M.Block Chance is increased by 250. Additionally, every 1 sec, inflicts 1 stack of Flame on nearby enemies.", true)
.addField("S3: Lava Eruption\nCost: 3\nCD: 20s", "Deals ??? M.DMG to enemies in range and inflict knock down. Per every stacked Flame, DMG is increased by 2%.", true)
.addField("S4: Fire Smash", "Upon Block, deals ??? M.DMG to enemies in range, and inflicts 3 stack of Flame.", true)
.addBlankField(true)
.addField("UT1: Hell's Eye", "[Burning Power] Increases DMG by 20%, and Flame stacked upon enemies become irremovable.", true)
.addField("UT2: Hatchling Leather Gloves", "[Hellfire] Upon blocking target's M.ATK during the skill's duration, DMG reduction is increased by 100 and M.Crit resistance is increased by 250.", true)
.addField("UT3: Hellish Sealing Stone", "[Lava Eruption] DMG is increased by 20% and target's M.DEF is decreased by 25% for 7 sec.", true)
.addField("UT4: Jewel of Inferno", "[Fire Smash] Increases the number of Flame stacks by 3. Hit targets have their ATK Spd reduced by 140 for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'neraxis') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.11b7a369.png")
.setTitle("Neraxis\nObsidian Arrogance")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Roaring Dragonmaw, Acravita", "After landing 20 normal attacks, deals M.DMG equal to 100% of ATK to 2 random enemies, stuns them for 0.5 sec, and becomes Storm of Neraxis for 10 sec. For the duration of Storm of Neraxis, increases P.DEF of all allies by 4% of caster's P.DEF and M.DEF by 4% of the caster's M.DEF.", true)
.addBlankField(true)
.addField("S1: Black Lightning Claw\nCost: 2\nCD: 8s", "Draws enemies towards the target and deals ??? M.DMG. Deals ??? M.DMG around the target after 1 sec and stuns them for 3 sec. Reduces ATK Spd of hit enemies by 300 for 10 sec.", true)
.addField("S2: Obsidian Roar\nCost: 3\nCD: 15s", "Increases ATK, P.DEF, and M.DEF of all allies by ??? for 15 sec. Deals ??? M.DMG to all enemies and reduces their ATK by 30% for 15 sec.", true)
.addField("S3: Breath of Destruction\nCost: 4\nCD: 20s", "Deals a total of ??? M.DMG to enemies within a large area around the target over 6 times and reduces their M.DEF by 20% for 15 sec. Each hit stuns the enemy for 1 sec.", true)
.addField("S4: Black Dragon Hide", "Increases P.DEF and M.DEF by ??? and takes reduced P.DMG and M.DMG by 15%.", true)
.addBlankField(true)
.addField("UT1: Cartridge of Black Lightning", "[Black Lightning Claw] Recovers Mana by 100 upon each hit, and increases own P.DEF and M.DEF by 10% for 10 sec.", true)
.addField("UT2: Memories of the Blue God Dragon", "[Obsidian Roar] Increases DEF Boost of allies by 20% and dispels positive effects from all enemies upon using Obsidian Roar.", true)
.addField("UT3: Rage Vortex", "[Breath of Destruction] Increases Stun duration by 1 sec and reduces Cooldown of Breath of Destruction by 3 sec.", true)
.addField("UT4: Ashen Nova", "[Black Dragon Hide] Every 10 sec, recovers 1 orb of Mana and increases All Block of all allies by 200 for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'phillop') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.80fa6889.png")
.setTitle("Phillop\nKing of Dwarves")
.addField("Class", "Knight", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Dragon's Ruins, Atein", "Upon receiving DMG, stacks Dragon Rage for 10 sec. Per each stacked Dragon Rage, ATK and DEF are increased by 0.8%. Can be stacked up to 100 times max.", true)
.addBlankField(true)
.addField("S1: Collision\nCost: 3\nCD: 12s", "Deals ??? P.DMG and knocks down the enemy for 3 sec.", true)
.addField("S2: Headbutt\nCost: 2\nCD: 8s", "Dashes toward the enemy and deals ??? P.DMG, knocking them back. Hit enemy's Attack Spd is reduced by 20% for 10 sec.", true)
.addField("S3: Earth Incarnate\nCost: 3\nCD: 22s", "Increases P.DEF and M.DEF by ??? for 15 sec and heals 15% of HP. Gains CC immunity.", true)
.addField("S4: Destroy Armor", "Upon attacking, weakens enemy P.DEF by ??? for 15 sec. Can be stacked up to 5 times max.", true)
.addBlankField(true)
.addField("UT1: Mad Dragon Shield Decoration", "[Collision] Reduces the target's CC Resist by 250 and P.Block chance by 200 for 10 sec.", true)
.addField("UT2: Dwarfish Capricorn Helmet", "[Headbutt] Reduces Mana Cost by 1 and reduces P.Crit Resistance of the affected enemy by 200 for 10 sec.", true)
.addField("UT3: Dwarven Ceremonial Hammer", "[Earth Incarnate] For the duration of skill, ATK Spd and Crit chance is increased by 250, and DEF boost is increased by 20%.", true)
.addField("UT4: Hammer of Titan", "[Destroy Armor] Upon attack, reduces the target's ATK by 20% and each stack reduces its Heal Rate by 4%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'ricardo') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.66ebb41b.png")
.setTitle("Ricardo\nLua's Judgment")
.addField("Class", "Knight", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Light of Judgment, Theoria", "When an ally other than the caster takes DMG, there is a 10% chance that a shield is cast upon them to absorb DMG equal to 320% of ATK for 5 sec while granting immunity to CC. This effect does not trigger more than once in 5 sec.", true)
.addBlankField(true)
.addField("S1: Destruction\nCost: 2\nCD: 8s", "Deals ??? P.DMG to frontal enemies in range and knocks them down for 3 sec.", true)
.addField("S2: Divine Protection\nCost: 1\nCD: 30s", "Deals ??? P.DMG to enemies in range and inflicts Stun for 1 sec. Additionally, own M.DEF is increased by ??? for 10 sec, and takes 80% of M.DMG instead of allies.", true)
.addField("S3: Divine Judgement\nCost: 4\nCD: 23s", "Attacks frontal enemies in a straight line 3 times. The first 2 attacks deal ??? P.DMG to enemies and stun them for 4 sec, and the last attack deals ??? P.DMG to enemies in a 20% wider range, while stunning them for 4 sec. Each attack has a 50% chance of dispelling positive effects from the enemy.", true)
.addField("S4: Divine Blessing", "When allies excluding self take M.DMG, increases their M.DEF by ??? for 5 sec. Can be stacked up to 5 times max.", true)
.addBlankField(true)
.addField("UT1: Stole of Templar", "[Destruction] For 10 sec, reduces the target's ATK by 20% and increases P.DMG and M.DMG target receives by 5%.", true)
.addField("UT2: Pride of Holy Warrior", "[Divine Protection] Gains Immunity to CC and increases M.Resistance by 10% for the skill's duration.", true)
.addField("UT3: Templar Vow", "[Divine Judgement] Dispels enemies' positive effects with 75% chance, and reduces target's ATK Spd by 100 for 10 sec.", true)
.addField("UT4: Pendant of Benevolence", "[Divine Blessing] Increases duration by 5 sec. Reduces M.DMG dealt to self by 1% per stack.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'sonia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.41385893.png")
.setTitle("Sonia\nThe Blue Hurricane")
.addField("Class", "Knight", true)
.addField("Type", "Magic", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Eye of the Storm, Yanadis", "[Shock] duration is increased by 2 sec. When auto attacking an enemy inflicted by Shock, all cooldowns are reduced by 1.6%.", true)
.addBlankField(true)
.addField("S1: Lightning Strike!\nCost: 2\nCD: 8s", "Causes an electric explosion ahead, dealing ??? M.DMG to enemies in range and placing an electric field for 3 sec. The electric field deals a total of ??? M.DMG over 10 attacks and with 25% chance, stuns the enemy for 0.5 sec.", true)
.addField("S2: Power of Lightning!\nCost: 2\nCD: 20s", "For 10 sec, ATK is increased by ??? and all DEF is increased by ???. While the skill is in use, each auto attack has a 30% chance of dealing extra ??? M.DMG to 2 random enemies and stunning them for 0.5 sec.", true)
.addField("S3: Electric Explosion!\nCost: 4\nCD: 23s", "Deals a total of ??? M.DMG over 3 attacks to nearby enemies in a circular range. Then causes an Electric Explosion, dealing a total of ??? M.DMG over 3 attacks and stunning them for 5 sec.", true)
.addField("S4: Shock", "With every attack, injects Electricity to targets not inflicted by Shock and increases M.DMG taken by 1% for 10 sec. Electricity can be stacked up to 30 times, and the 30th stack will consume all Electricity to deal ??? M.DMG and Shock the target for 7 sec. Enemies inflicted by Shock take 70% increased M.DMG, and when they are inflicted by Stun, the duration is increased by 0.7 sec.", true)
.addBlankField(true)
.addField("UT1: Jewel of Amplification", "[Lightning Strike!] Extends the duration of electric field by 1 sec, and upon each hit, increases own ATK Spd by 10 for 5 sec. This effect can be stacked up to max 30 times.", true)
.addField("UT2: Lightning Tent", "[Power of Lightning!] Changes the effect irremovable and increases the chance to trigger an additional damage by 10% additionally.", true)
.addField("UT3: Heart of Baikal", "[Electric Explosion!] When attacking enemy inflicted by Shock, enemy takes 100% of ATK as extra M.DMG and target's M.DEF and P.DEF is reduced by 10% for 5 sec.", true)
.addField("UT4: Lightning Gloves", "[Shock] Enemies under [Shock] take 100% increased M.DMG, and normal attacks have 10% chance to inflict 1 stack of Electricity to the enemy. This effect also applies to enemies under [Shock].", true)
msg.channel.send({ embed });
break;

//hero warrior info

} else {
if (args[1] === 'Bernheim') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.a7cad35a.png")
.setTitle("Bernheim\nSword of Destruction")
.addField("Class", "Warrior", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Kiln of Futility, Targarios", "Every 10 sec, increases own ATK by 10%, all DEF by 10%, and reduces Cooldown of all Skills by 1 sec. While in [Battle Initiation], Cooldown Reduction will be doubled. The ATK and DEF boost can be stacked up to max 4 times and is irremovable.", true)
.addBlankField(true)
.addField("S1: Circle of Futility\nCost: \nCD: 15s", "Attacks the target and nearby enemies within range, dealing ??? M.DMG and placing the Circle of Futility. Circle of Futility deals ??? M.DMG, reduces ATK Spd by 300 , and prevents enemies from receiving positive effects over 4 sec. A 4 -sec Cooldown will be applied at the beginning of the first battle.    ", true)
.addField("S2: Battle Initiation\nCost: \nCD: 22s", "Attacks enemies within frontal range, dealing ??? M.DMG and knocking them back. Then, increases own All Block by ??? and DEF by ??? , and gains immunity to CC for 8 sec. A 8 -sec Cooldown will be applied at the beginning of the first battle.    ", true)
.addField("S3: Destroyer\nCost: \nCD: 22s", "Deals ??? M.DMG over 10 attacks to nearby enemies in a circular range around self. Then, attacks enemies in a wide surrounding area, dealing ??? M.DMG and stunning them for 5 sec. If the target is not a Hero, each attack will deal additional ??? M.DMG. A 15 -sec Cooldown will be applied at the beginning of the first battle.    ", true)
.addField("S4: Breakdown", "Bernheim cannot recover Mana, and all his Skills do not consume any Mana. Normal and Skill attacks inflict Breakdown to enemies for 10 sec, reducing their Heal Rate by 1%, and increasing own ATK and Heal Rate by ??? and 0.5% respectively. All effects stack up to 50 times.    ", true)
.addBlankField(true)
.addField("UT1: Faded Sword", "[Circle of Futility] Reduces the hit targets' Mana by 100 and increases M.DMG they take by 25% for 5 sec.    ", true)
.addField("UT2: Medal of Light", "[Battle Initiation] Consumes 50% of current HP upon use, but the effect will become irremovable.    ", true)
.addField("UT3: Mercenary's Goblet", "[Destroyer] Increases DMG by 20% and each hit has a 20% chance to stun the enemy for 0.5 sec.    ", true)
.addField("UT4: Unsent Letter", "[Breakdown] Normal and Skill attacks now inflict 2 stacks on the enemy and self. The max number of stacks increases by 20.    ", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'chase') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.b113e0a5.png")
.setTitle("Chase\nType. 0")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Blood Lancer Monolith", "Increases own Crit DMG by 20%. Upon auto attack, deals P.DMG equal to 30% of ATK with [Flame of Monolith] and recovers HP equal to 20% of DMG dealt. When [Remove Limit] is active, the effect of [Flame of Monolith] is doubled.", true)
.addBlankField(true)
.addField("S1: I'll Break You!\nCost: 2\nCD: 12s", "Prevents the target from receiving positive effects for 4 seconds, and attacks to inflict ??? P.DMG and knocks the target back. Inflicts ??? P.DMG after 1 second to enemies around the target and stuns them for 4 seconds.", true)
.addField("S2: Remove Limit\nCost: 3\nCD: 10s", "Upon activation, [Remove Limit] takes effects. When activated, consumes 10% of current HP to remove all negative effects on self and deals ??? P.DMG to nearby enemies in range. While [Remove Limit] is activated, consumes 2.5% of current HP every 1 second, gains Immunity to CC, and increases Crit DMG by 50% and ATK Spd by 350. HP consumption and the increase in Crit DMG and ATK Spd grow larger as time passes. This effect cannot be dispelled, and is automatically deactivated when HP is under 25%.", true)
.addField("S3: Burn, Spear of Fury\nCost: 3\nCD: 20s", "Charges at an enemy, inflicting ??? P.DMG and knocking it down, and explodes the ground around self to attack 4 times, dealing a total of ??? P.DMG and inflicting Stun for 4 seconds. Recovers HP equal to 25% of DMG.", true)
.addField("S4: Remember This in Hell", "Not affected by Lifesteal stats. Instead, increases Max HP by ??? , Crit by 250 , CC ACC by 100 , and ACC by 100. If receiving damage that leads to death, resurrects for 5 seconds, with increased Crit DMG by 40%, and increased ATK Spd by 400. The resurrection effect is only activated once per battle, and the resurrected Chase cannot use skills.", true)
.addBlankField(true)
.addField("UT1: Guide of Sin", "[I'll Break You!] Gains immunity to CC for the skill's duration, and recovers Mana by 200 upon hit.", true)
.addField("UT2: Handkerchief of Loyalty", "[Remove Limit] For the skill's duration, deals P.DMG by 40% ATK every second to nearby enemies and increases Recovery by 30%.", true)
.addField("UT3: Unrelenting Pauldron", "[Burn, Spear of Fury] Reduces Mana Cost by 1 and increases DMG by 20%.", true)
.addField("UT4: Biometric Sensor - Type. 0", "[Remember This in Hell] Increases the duration of resurrection by 1 sec, and gains immunity to CC for 1 sec upon resurrection.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'gau') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.61e0eeae.png")
.setTitle("Gau\nBarbarian of Frozen Lands")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "Tank", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Holy Bird, Nunimu", "Per every 1% of HP lost, ATK is increased by 0.8% and ATK Spd is increased by 8.", true)
.addBlankField(true)
.addField("S1: Smash\nCost: 2\nCD: 8s", "Deals ??? P.DMG to enemies within range, and the first attack knocks them down for 3 sec and reduces their ATK Spd by 250 for 10 sec.", true)
.addField("S2: Battle Roar\nCost: 2\nCD: 15s", "All allies' ATK is increased by ??? for 15 sec. Upon activation, dispels all negative effects from allies.", true)
.addField("S3: Vortex\nCost: 4\nCD: 20s", "Deals ??? P.DMG to nearby enemies with additional ??? P.DMG to Non-Hero enemies. The last attack freezes nearby enemies for 4 sec. Gains CC immunity while casting.", true)
.addField("S4: Enrage", "Upon attacking, increases ATK by ??? for 5 sec, and DMG to Non-Hero enemies by 3%. This effect can be stacked up to max 10 times.", true)
.addBlankField(true)
.addField("UT1: King of Frost Helmet", "[Smash] Reduces the target's ATK by 20% and increases P.DMG target receives by 10% for 10 sec.", true)
.addField("UT2: Fighter's Horn", "[Battle Roar] Reduces Mana Cost by 1 and increases ATK Boost by 20%.", true)
.addField("UT3: Barbarian Mug", "[Vortex] DMG is increased by 50%, and enemies hit by the last attack takes 5% more DMG for 10 sec.", true)
.addField("UT4: Snowdrop Bracelet", "[Enrage] Increases the max number of stacks by 1. Each stack increases DEF Penetration by 10.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'kasel') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.ee6ef94e.png")
.setTitle("Kasel\nWarrior of the Holy Sword")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: The Holy Sword, Aea", "Each attack has a 35% chance of dealing 160% of ATK as P.DMG.", true)
.addBlankField(true)
.addField("S1: Judgement Blade\nCost: 3\nCD: 12s", "Deals ??? P.DMG 2 times to frontal enemies in a circle and knocks them down for 2.5 sec.", true)
.addField("S2: Valiant Dash\nCost: 2\nCD: 8s", "Attacks the target 3 times, and then charges behind them to deal ??? P.DMG.", true)
.addField("S3: Proxy of God\nCost: 4\nCD: 20s", "Deals ??? P.DMG to nearby enemies and inflicts Stun for 3 sec. Additionally, for 20 sec, ATK is increased by ??? and Dodge Rate is increased by 250 , while gaining immunity to CC. This status cannot be dispelled.", true)
.addField("S4: Goddess Strike", "Upon dodging, deals ??? P.DMG to frontal enemies in range, and reduces their ACC by 150 for 5 sec. After hitting the target, recovers 300 mana.", true)
.addBlankField(true)
.addField("UT1: Crown of Light", "[Judgement Blade] Reduces Cooldown by 30% and increases DMG by 4% upon every use. This effect can be stacked up to max 10 times.", true)
.addField("UT2: Emperor's Gauntlet", "[Valiant Dash] Increases DMG by 20% and reduces Cooldown by 10% upon a Crit Hit.", true)
.addField("UT3: Proxy's Insignia", "[Proxy of God] Additionally, Dodge Rate is increased by 250, and ATK Spd is increased by 100 for the duration of skill.", true)
.addField("UT4: Lua's Tear", "[Goddess Strike] Increases DMG by 50% and reduces ATK Spd of the target by 100 for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'naila') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.4bbf5b60.png")
.setTitle("Naila\nWind's Fighter")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Cursed Claws, Baroro", "Upon a Crit Hit, deals 150% of ATK as P.DMG over time for 10sec. Target takes 20% increased P.DMG for the duration of skill.", true)
.addBlankField(true)
.addField("S1: Fierce Winds\nCost: 2\nCD: 8s", "Dashes toward the enemy 2 times, dealing ??? P.DMG to enemies in range, knocking them down for 3 sec. If the target is not a Hero, deals ??? additional P.DMG.", true)
.addField("S2: Wind Reading\nCost: 3\nCD: 15s", "All allies' P.Dodge Chance is increased by 250 for 15 sec, and ATK is increased by ???.", true)
.addField("S3: Dive Bomb\nCost: 3\nCD: 12s", "Flies up and strikes ??? P.DMG to enemies in range. Knocked down enemies take 50% increased DMG. If the target is not a Hero, deals ??? additional P.DMG.", true)
.addField("S4: Tornado Strike", "Every 5th normal attack has a 40% chance to deal ??? additional P.DMG to the target. The target takes 30% increased P.DMG for 10 sec and is knocked down for 3 sec.", true)
.addBlankField(true)
.addField("UT1: Soul of Gust", "[Fierce Winds] Increases DMG by 50%, and reduces the target's P.Dodge chance by 200 for 10 sec.", true)
.addField("UT2: Himmullis' Scarf", "[Wind Reading] Increases ATK Boost by 50% and M.Dodge by 100.", true)
.addField("UT3: Tempest Pride", "[Dive Bomb] Skill cooldown is reduced by 30% and target takes 10% more P.DMG for 10 sec.", true)
.addField("UT4: Green Ribbon", "[Tornado Strike] Reduces the target's P.Block by 500 and P.Dodge by 200 for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'nicky') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.b945f434.png")
.setTitle("Nicky\nChief Guard of Cruelty")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "Unknown", true)
.addField("Need UW?", "??", true)
.addBlankField(true)
.addField("UW: Mace of Rehabilitation, Hartnon", "Skill hits increase P.DMG the target takes by 20% for 5 sec and reduce Mana by 80 every sec.", true)
.addBlankField(true)
.addField("S1: Mace of Rehabilitation\nCost: 2\nCD: 10", "Deals P.DMG of ??? to enemy target and nearby enemies within narrow range, and stuns them for 1 sec. Hit enemies are inflicted with Disarmament for 5 sec. Enemies in Disarmament will have their P.Block changed to 0. This effect cannot be removed.", true)
.addField("S2: Merciless Gale\nCost: 3\nCD: 17", "Swings the weapon to attack enemies in a circular range of self 7 times. Each hit deals ??? P.DMG and stuns for 1.5 sec. If the target is a Hero, reduces P.DEF by 30%, and if the target is not a Hero, causes it to take 30% increased P.DMG for 5 sec.", true)
.addField("S3: Last Execution\nCost: 4\nCD: 20s", "Sets in position, focuses, then attacks enemies in a wide frontal range to deal ??? P.DMG, dispel positive effects, and knock them down for 6 sec. Deals ??? additional P.DMG to Non-Hero enemies. For this Skill, ACC and CC Accuracy will be increased by 500.", true)
.addField("S4: Massacre Instinct", "Increases ATK by ??? and Crit Chance by 300. When HP falls below 35%, Cruel Madness effect will be activated. For 5 sec, Cruel Madness effect removes all negative effects from self, increases ATK by ??? and ATK Spd by 500, reduces DMG received by 50%, and grants immunity to CC. This effect only activates once during the battle.", true)
.addBlankField(true)
.addField("UT1: Special Boots of Stockade", "[Mace of Rehabilitation] Reduces P.DEF of hit enemy by 25% for 10 sec, and adds Reduction Effect on Heal Rate by 30% in Disarmament state.", true)
.addField("UT2: Pendant of War God", "[Merciless Gale] Increases DMG by 50% and reduces Cooldown by 1.6% for each enemy hit.", true)
.addField("UT3: Merciless Skull Knuckle", "[Last Execution] Reduces Cooldown by 30% and increases own DMG to Boss by 4% per use. This effect can be stacked up to max 10 times.", true)
.addField("UT4: Omnious Manicure", "[Massacre Instinct] Cruel Madness becomes irremovable. Upon activation, reduces Cooldown of all skills by 20% immediately.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'priscilla') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.9af8d5f4.png")
.setTitle("Priscilla\nMaid of Steel")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Tumultuous Dance, Excilius", "When attacking the enemy with 'Vital Strike' or 'Turbulent Dance', per every hit enemy, corresponding skill's cooldown is reduced by 1 sec and ATK Spd is increased by 50 for 5 sec. ATK Spd boost can be stacked up to 10 times max.", true)
.addBlankField(true)
.addField("S1: Vital Strike\nCost: 2\nCD: 8s", "Deals ??? P.DMG to frontal enemies in range and stuns them for 1 sec. This attack always inflicts a Crit Hit.", true)
.addField("S2: Coordination\nCost: 3\nCD: 15s", "For 20 sec, places Priscilla and an ally with the highest ATK in 'Coordination' state, and dispels Negative Effects. Priscilla and the ally in Coordination State get an ATK boost equal to 15% of Priscilla's ATK + ???.", true)
.addField("S3: Turbulent Dance\nCost: 3\nCD: 22s", "Deals ??? P.DMG to nearby enemies in a circular range and draws them towards herself. If activated while in the 'Coordination' state, hit enemies take 30% extra P.DMG and M. DMG for 10 sec.", true)
.addField("S4: Weapon Mastery", "Own ATK is increased by ??? , and Penetration is increased by 100.", true)
.addBlankField(true)
.addField("UT1: Weight of Fierce Attack", "[Vital Strike] Increases DMG by 50%, and for 10 sec, reduces the target's P.Block chance by 200.", true)
.addField("UT2: Fancy Tea Set", "[Coordination] Increases ATK Boost by 20% and reduces Cooldown of the Hero with the highest ATK by 30%.", true)
.addField("UT3: Magical Stone of Gravity", "[Turbulent Dance] DMG is increased by 20% and target is inflicted by Stun for 3 sec.", true)
.addField("UT4: Beginning of Turbulence", "[Weapon Mastery] Increases ATK boost by 50% and All DEF for self by 10%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'scarlet') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.ee825e57.png")
.setTitle("Scarlet\nFaith of Silver")
.addField("Class", "Warrior", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: Blade of Conviction, White Belona", "Per every skill in cooldown, DMG is increased by 8%", true)
.addBlankField(true)
.addField("S1: Halt!\nCost: 3\nCD: 8s", "Attacks all frontal enemies, dealing ??? P.DMG and knocking them down for 3 sec. If the target is not a Hero, deals ??? additional P.DMG. Heals HP equal to 30% of DMG dealt.", true)
.addField("S2: Justice Served!\nCost: 2\nCD: 18s", "Dispels negative effects of all allies and dispels positive effects of all enemies, while dealing ??? P.DMG.", true)
.addField("S3: Sword of Honor!!\nCost: 4\nCD: 22s", "Attacks an enemy 3 times, dealing a total of ??? P.DMG. Fires an energy blast from the sword, dealing ??? P.DMG to enemies in a straight line, blinding them for 5 sec.", true)
.addField("S4: Goddess of War", "All Crit Resistance increases by 150. With 10% chance, deals additional ??? P.DMG during auto attack and stuns target enemy for 1 sec.", true)
.addBlankField(true)
.addField("UT1: Gauntlent of Wave", "[Halt!] Increases DMG by 20% and for 10 sec, target receives 25% increased P.DMG.", true)
.addField("UT2: Wings of Justice", "[Justice Served!] Increases DMG by 20% and reduces Cooldown of all allies by 10%.", true)
.addField("UT3: Pride of Orvelia", "[Sword of Honor!!] DMG is increased by 20% and each ATK inflicts Stun on enemy for 3 sec.", true)
.addField("UT4: Heart of Silver", "[Goddess of War] Activation chance changes to 20%. Upon activation, increases own ATK Spd by 200 for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'seria') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.a916f527.png")
.setTitle("Seria\nShadow of the Abyss")
.addField("Class", "Warrior", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Executioner of Domains, Elsion", "Reduces own Heal Rate by 20%. Upon a critical skill hit, deals additional M.DMG of 30% ATK. Reduces Heal Rate of the target by 24% for 5 sec, and increases own Heal Rate by 4% for 20 sec. The Heal Rate increasing effect can be stacked up to max 5 times, and cannot be dispelled.", true)
.addBlankField(true)
.addField("S1: Mysterious Sword - Falling Petals\nCost: 1\nCD: 7s", "Performs a horizontal slash to the front and deals ??? M.DMG to the target and enemies in a narrow range. Can activate [Mysterious Sword - Blossom] once within 5 sec after use.", true)
.addField("S1-1: Mysterious Sword - Blossom", "Performs a vertical slash to the front and deals ??? M.DMG to the target and enemies in a narrow range.")
.addField("S2: Blood Scattering Blade\nCost: 3\nCD: 13s", "Rapidly charges forward to deal ??? M.DMG and inflicts irremovable Original Sin of Blood on enemies for 3 sec. Enemies under Original Sin of Blood have their ATK Spd reduced by 300. Shortly afterward, attacks enemies under Original Sin of Blood 2 times, and deals additional ??? M.DMG, and if the target is not a hero, deals additional ??? DEF Ignoring M.DMG.", true)
.addField("S3: Red Moon Blade\nCost: 4\nCD: 24s", "Brandishes a moon-bloodying sword, dealing ??? M.DMG to enemies in a wide range, and additional ??? M.DMG on non-Hero enemies. When the moon is ripe, gains Moonlight for 1 sec, and when cast at this state, deals ??? M.DMG to enemies and reduces their Heal Rate by 100%. If the target is not a hero, deals additional ??? M.DMG.The caster is not affected by ATK Spd related effects while casting.", true)
.addField("S4: Cold-Blooded Witch", "ATK is increased by ???. Upon a critical skill hit, own Crit DMG is increased by 5%. This effect can be stacked up to 30 times.", true)
.addBlankField(true)
.addField("UT1: Whetstone of Demon", "[Mysterious Sword - Falling Petals] Increases DMG by 50%, and upon Critical Hit, recovers Mana by 200. [Mysterious Sword - Blossom] Increases DMG by 50%, and upon Critical Hit, reduces Cooldown of [Mysterious Sword - Falling Petals] by 0.8 sec.", true)
.addField("UT2: Ring of Abyss", "[Blood Scattering Blade] Increases DMG by 50% and reduces M.Block of affected enemies by 200.", true)
.addField("UT3: Enlightening Candlelight", "[Red Moon Blade] Gains immunity to CC for the duration of the skill. When the battle starts, increases DMG by 70% for 4 time.", true)
.addField("UT4: Demonic Eight Trigrams", "[Cold-Blooded Witch] Increases ATK boost by 50% and the max number of stacks for Crit DMG boost by 2.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'theo') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.8d6a6bbc.png")
.setTitle("Theo\nKnight of Loyalty")
.addField("Class", "Warrior", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Lightning Bolt, Legios", "Each auto attack and skill attack stacks 'Lightning' on self. Upon the 50th stack, 'Lightning Bolt, Legios' activates, and for 10 sec, ATK Spd is increased by 300, Crit DMG is increased by 100%, and Penetration is increased by 300. While 'Lightning Bolt, Legios' is activated, Lightning will not stack. This effect cannot be dispelled.", true)
.addBlankField(true)
.addField("S1: Final Crash\nCost: 2\nCD: 12s", "Attacks 16 times, dealing a total of ??? M.DMG to enemies in range. Upon each Crit Hit, Crit DMG is increased by 3% for 10 sec, and there is a 30% chance to deal ??? extra M.DMG, inflicting stun for 0.3 sec. Crit DMG boost can be stacked up to 30 times max.", true)
.addField("S2: God of Lightning\nCost: 2\nCD: 20s", "Upon casting, activates 'God of Lightning' and throws a spear of lightning at the enemy, dealing ??? M.DMG. Hit enemy takes 50% increased M.DMG for 10 sec. While in 'God of Lightning' state, cannot recover mana for 10 sec, but activation chance of 'For Jane' is increased by 40% and ATK is increased by ???.", true)
.addField("S3: Lightning Explosion\nCost: 3\nCD: 22s", "Jumps and strikes, thrusting the spear to the ground and hitting target enemy and enemies in range 5 times, dealing a total of ??? M.DMG and inflicting Stun for 3 sec.", true)
.addField("S4: For Jane", "Each auto attack has a 20% chance of dealing ??? M.DMG and inflicting Stun for 0.7 sec.", true)
.addBlankField(true)
.addField("UT1: Fur Decoration of Sable", "[Final Crash] Dispels all negative effects from self, and upon each hit, has an 8% chance to remove all positive effects from the target.", true)
.addField("UT2: God of Lightning's Necklace", "[God of Lightning] ATK Spd is increased by 250 for the duration of skill, and the activation chance of 'For Jane' is increased by an additional 8%.", true)
.addField("UT3: Essence of Red Lightning", "[Lightning Explosion] Skill cooldown is reduced by 30% and upon attack, deals 40% of ATK as extra M.DMG.", true)
.addField("UT4: Another Funerall Doll", "[For Jane] Increases activation chance by 20% and own ATK Spd by 350 for 30 sec at the beginning of every battle.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'viska') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.cc4cd020.png")
.setTitle("Viska\nDemon Eater")
.addField("Class", "Warrior", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Nightmare Fang, Kitrax", "Enemies that had their Souls stolen take 25% increased M.DMG. Lasts for 10 sec.", true)
.addBlankField(true)
.addField("S1: Meal Time!!\nCost: 2\nCD: 8s", "Deals ??? M.DMG to frontal enemies in range. For 10 sec, Hit enemies' ATK is reduced by 25% for and own ATK is increased by ???. If used while holding 3 or more stacks of Soul, shackles the enemy for 3 sec.", true)
.addField("S2: I'll Slice You Up!!\nCost: 2\nCD: 10s", "Moves behind the target, dispelling positive effects and dealing ??? M.DMG while inflicting knock down. If used while holding 3 or more stacks of Soul, reduces enemy M.DEF by 30% for 15 sec.", true)
.addField("S3: I'll Rip You to Pieces!!\nCost: 4\nCD: 25s", "Deals ??? M.DMG to enemies in a wide surrounding area, and inflicts Stun for 3 sec. If used while holding 5 stacks of Soul, consumes all stacks to reset the cooldown of this skill.", true)
.addField("S4: Yummy Souls!", "Enemies attacked with Viska's skills lose Souls. Upon losing their Soul, targets take ??? extra M.DMG, and per each soul stacked, Viska's HP is healed by ??? and Mana is healed by 300. Souls last until they are used, can't be dispelled and can be stacked up to 5 times max.", true)
.addBlankField(true)
.addField("UT1: Soul of a Giant Demon", "[I'll Rip You to Pieces!!] Increases DMG by 50%, and makes the target unable to recover Mana for 1 sec.", true)
.addField("UT2: Rampaging Beast's Claw", "[I'll Slice You Up!!] Reduces Cooldown by 30% and adds 8% M.DEF reduction.", true)
.addField("UT3: Yummy Memory", "[Meal Time!!] Gain immunity to CC during skill activation and upon every use, DMG is increased by 4%. This effect is stacked max 10 times.", true)
.addField("UT4: Symbol of Gluttony", "[Yummy Souls!!] Upon gaining a Soul, increases Mana Recovery by 100. Each soul stacks grant 70 CC ACC.", true)
msg.channel.send({ embed });
break;

//hero assassin info

} else {
if (args[1] === 'epis') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.bfb04712.png")
.setTitle("Epis\nCaptivating Demon")
.addField("Class", "Assassin", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Seductress, Guillotine", "Upon attacking, there is a 25% chance of dealing 80% of ATK as extra M.DMG, and ATK being increased by 2%. ATK boost can be stacked up to 10 times max.", true)
.addBlankField(true)
.addField("S1: Absorbing Blow\nCost: 2\nCD: 12s", "Deals ??? M.DMG that ignores enemy DEF, and heals 25% of DMG as HP.", true)
.addField("S2: Nightmare\nCost: 2\nCD: 8s", "Moves behind the furthest enemy and deals ??? M.DMG. Hit enemies take 30% increased M.DMG for 10 sec.", true)
.addField("S3: Devil's Prom\nCost: 4\nCD: 20s", "Deals ??? M.DMG to all enemies in range. Gains CC immunity while using this skill.", true)
.addField("S4: Harvest", "When an enemy is killed by this hero, ATK is increased by ??? for 12 sec, and all skill cooldown is reduced by 30%.", true)
.addBlankField(true)
.addField("UT1: Green Fairy", "[Absorbing Blow] Increases DMG by 20%, and upon killing an enemy, ATK is increased by 20% for 10 sec. ATK increase effect can be stacked up to max 3 times.", true)
.addField("UT2: Succubus's Box", "[Nightmare] Increases DMG by 50% and stuns the affected enemy for 2 sec.", true)
.addField("UT3: Seductress Shoes", "[Devil's Prom] Mana cost is reduced by 1, and DMG is increased by 20%.", true)
.addField("UT4: Memory of Dream", "[Harvest] Increases ATK boost by 50%. Killing an enemy increases ATK Spd by 20. This effect can be stacked up to max 10 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'erze') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.a224db13.png")
.setTitle("Erze\nEndless thirst")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Essence of Greed, Perion", "Each skill hit increases ATK and ATK Spd by 0.5% for 15 sec. This effect stacks up to 80 times.", true)
.addBlankField(true)
.addField("S1: Sweet Blood\nCost: 2\nCD: 5s", "Deals ??? P.DMG to all enemies and steals HP equal to 10% of DMG dealt. Reduces Cooldown of [Sweet Blood] by ??? sec on each hit, and gains 1 stack of [Sweet Blood]. [Sweet Blood] can be stacked up to 5 times, and using the skill with 5 stacks of [Sweet Blood] grants 1 additional hits and removes [Sweet Blood] stacks.", true)
.addField("S2: Soaking Blood\nCost: 2\nCD: 40s", "Dispels all negative effects and gains immunity to all CCs, P.DMG, and M.DMG for 5 sec. Inflicts 1 stack of [Soaking Blood] on all enemies, and additional 1 stack upon attacking a target with [Soaking Blood]. [Soaking Blood] can be stacked up to 6 times. Deals ??? P.DMG to enemies with [Soaking Blood] stacks after 5 sec, and steals HP equal to 25% of the DMG dealt. For every 3 stack(s) of [Soaking Blood], hit count increases by 1 and removes [Soaking Blood] stacks upon attacking.", true)
.addField("S3: Blood Liberation\nCost: 4\nCD: 20s", "Deals ??? P.DMG to all enemies every 1 sec for 10 sec. Each hit of [Blood Liberation] causes an additional hit on 1 random enemy.", true)
.addField("S4: Life Drinker", "Increases ATK by ??? and Max HP by ??? upon killing an enemy. Stacks up to max 50. Upon taking fatal DMG, casts [Soaking Blood], and decreases Max HP by 40%. This effect is not applied when [Soaking Blood] is in cooldown. This skill consumes all Mana upon activation.", true)
.addBlankField(true)
.addField("UT1: Lipstick of Shame", "[Blood Liberation] Reduces Mana Cost by 1 and increases P.DMG the hit enemy takes by 1%. This effect can be stacked up to max 10 times.", true)
.addField("UT2: Wine of Shivers", "[Soaking Blood] Increases DMG of [Soaking Blood] by 50% and reduces Cooldown of [Soaking Blood] by 5 sec.", true)
.addField("UT3: Fang of Thirst", "[Sweet Blood] Increases DMG of [Blood Liberation] by 20% and gains immunity to CC for the duration of [Blood Liberation].", true)
.addField("UT4: Moonlight Piano", "[Life Drinker] Increases ATK boost and Max HP boost by 20%. Life Drinker becomes irremovable.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'ezekiel') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.c7de27e1.png")
.setTitle("Ezekiel\nThe Cursed Blood")
.addField("Class", "Assassin", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Jailer of Despair Barbatos", "Fury duration is increased by 2 sec and when in Fury state, Crit DMG is increased by 80%.", true)
.addBlankField(true)
.addField("S1: Destructive Instinct\nCost: 2\nCD: 8s", "Swipes nearby enemies in a circular range and deals ??? M.DMG. Then strikes the ground, dealing ??? M.DMG and knocking down enemies for 3 sec. [Fury] - Consumes 15% of current HP to activate. Effect range increases and swipe attack draws in enemies.", true)
.addField("S2: Dawning Despair\nCost: 2\nCD: 10s", "Dashes to an enemy with the highest ATK and deals ??? M.DMG to enemies in range, reducing their ATK Spd by 300. [Fury] - Consumes 10% of current HP to activate. Effect range increases, Stuns target for 3 sec, and increases own ATK Spd by 300 for 10 sec.", true)
.addField("S3: Strike of Doom\nCost: 2\nCD: 7s", "Charges energy and attacks target enemy, dealing ??? M.DMG and inflicting Stun for 3 sec. [Fury] - Consumes 20% of current HP to activate. Attacks enemies in range of target and DMG is tripled.", true)
.addField("S4: Cursed Blood", "Ezekiel gains 1 stack of 'Cursed Blood' at the end of skill. Upon the 4th stack, consumes Cursed Blood to reset all skill cooldown, dealing ??? M.DMG to nearby enemies and knocking them down for 3 sec, while activating Fury for 10 sec, that cannot be dispelled. While in Fury state, goes into an auto-battle mode that cannot be controlled, and ATK is increased by ??? , auto attack DMG is doubled, and all Skill effect are reinforced. Cannot gain Cursed Blood during Fury state, except for when killing an enemy.", true)
.addBlankField(true)
.addField("UT1: Wild Beast's Leather Belt", "[Destructive Instinct] Upon use, heals own HP by 15%, and for 10 sec, increases M.DMG target receives by 10%.", true)
.addField("UT2: Wild Beast's Choker", "[Dawning Despair] Gains Immunity to CC for the skill's duration and increases ATK Spd by 100 for 10 sec.", true)
.addField("UT3: Sealing Binds", "[Strike of Doom] DMG is increased by 20% and gains 1 additional stack of Cursed Blood after using the skill.", true)
.addField("UT4: Sculpture of Blood", "[Cursed Blood] Increases ATK boost by 20%. Gains 2 stacks of Cursed Blood at the beginning of the first battle.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'fluss') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.6dc22c00.png")
.setTitle("Fluss\nFluttering Blade")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Twinswords of Fury, Veralta", "Increases ATK by 12% and ATK Spd by 120 for 30 sec every 7 sec. This effect can stack up to 3 times and cannot be removed.", true)
.addBlankField(true)
.addField("S1: Tempest Blade\nCost: 2\nCD: 6s", "Attacks the target and the enemies near it 3 times, dealing a total of ??? P.DMG. If the target is not a Hero, inflicts a total of ??? additional P.DMG over 5 sec.", true)
.addField("S2: Flashstep\nCost: 1\nCD: 10s", "Moves to the enemy with the highest ATK and inflicts silence for 2 sec. Own M.DMG reduction is increased by 300 for 5 sec. Engraves the enemy with a Mark for 10 sec, and own attack prioritizes the Marked target. When attacking enemies inflicted with Mark, deals ??? additional P.DMG.", true)
.addField("S3: Bloody Petals\nCost: 2\nCD: 25s", "Deals a total of ??? P.DMG to an enemy over 16 hits, and suppresses the target while casting. This DMG ignores the target's Block effects.", true)
.addField("S4: Spell Cutter", "Every 10 sec, upon taking M.DMG, deals ??? P.DMG to the attacker, and dodges all M.ATK for 3 sec.", true)
.addBlankField(true)
.addField("UT1: Eye of the Storm Belt", "[Tempest Blade] Reduces Mana Cost by 1 and upon every use, increases DMG by 4%. This effect can be stacked up to max 10 times.", true)
.addField("UT2: Tempting Perfume", "[Flashstep] Changes the Mark irremovable and increases ATK by 20% for 10 sec once the enemy with the mark is killed.", true)
.addField("UT3: Immortal Rose", "[Bloody Petals] DMG is increased by 20% and dodges all M.ATK during the duration of skill.", true)
.addField("UT4: Sealed Confidential Letter", "[Spell Cutter] Upon activation, increases own ATK Spd by 200 for 4 sec. The duration of the dodge effect increases by 1 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'gladi') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.7d1a131a.png")
.setTitle("Gladi\nBeast of the Arena")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Beast Fist, Mastra", "Upon a Crit Hit, Crit. DMG is increased by 20% for 5 sec. This effect can be stacked up to 7 times max.", true)
.addBlankField(true)
.addField("S1: Quick Strikes\nCost: 2\nCD: 9s", "Strikes the target 7 times, dealing a total of ??? P.DMG. The last hit increases the target's P.DMG taken by 25% for 10 sec.", true)
.addField("S2: Advent of the War God\nCost: 1\nCD: 15s", "Dispel all negative effects on self and deal ??? P.DMG to nearby enemies within a small radius, gaining the Status 'War God' for 10 sec. While in War God mode, ATK is boosted by ??? and all auto attacks have a 30% chance to consume 5% mana to deal an extra attack of ??? extra P.DMG. Upon taking M.DMG, dodge all M.DMG for 1 sec. Dodge effect only activates 1 time in every 2 sec.", true)
.addField("S3: Ultimate Punch!\nCost: 4\nCD: 20s", "Charges energy and sprints toward frontal enemies, dealing ??? P.DMG to enemies in range and inflicting stun for 3 sec. If the target is a boss, attack ignores target DEF.", true)
.addField("S4: This Will Hurt!", "Upon hitting a single target with 5 auto attacks, deals ??? extra DMG that ignores DEF.", true)
.addBlankField(true)
.addField("UT1: Intolerable Feather", "[Quick Strikes] Increases DMG by 50%, and makes the target unable to recover Mana for 2 sec.", true)
.addField("UT2: Silvervine Box", "[Advent of the War God] For the skill's duration, recovers 100 MP every second and stacks 1 [This will hurt!] upon inflicting additional P.DMG.", true)
.addField("UT3: Champion's Laurel Wreath", "[Ultimate Punch!] Skill cooldown is reduced by 30% and per each activation DMG is increased by 4%. This effect can be stacked max 10 times.", true)
.addField("UT4: Elastic Bandage of Fighting Spirit", "[This Will Hurt!] Increases DMG by 50%. Upon activation, a target takes 2% increased P.DMG for 10 sec. This effect can be stacked up to max 6 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'laudia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.64faeb8e.png")
.setTitle("Laudia\nDancer of the Oasis")
.addField("Class", "Assassin", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Whispering Sands, Arlaq", "[Blessing of Oasis] can be stacked up to max 14 times, and upon auto attack, all skill cooldown is decreased by 4% with 10% chance.", true)
.addBlankField(true)
.addField("S1: Whisper of Sand\nCost: 2\nCD: 11s", "Attacks target enemy and deals ??? M.DMG to enemies in close range, decreasing enemy block chance by ??? and Crit resistance by 500 for 8 sec. Additionally, attacks and deals ??? M.DMG and stuns them for 3 sec.", true)
.addField("S2: Enchanting Flow\nCost: 2\nCD: 20s", "Increases own ATK by ??? and Crit DMG by 70% for 10 sec. Then moves a short distance forward, dealing ??? M.DMG to enemies in movement range and Charms them for 5 sec if the skill was used in the Arena. Can activate [Alluring Ambush] once within 5 sec after use.", true)
.addField("S2-1: Alluring Ambush", "Attacks target enemy 3 times, dealing a total of ??? M.DMG. Deals extra ??? M.DMG ignoring the target's DEF to Boss enemies and enemies inflicted by Charm.", true)
.addField("S3: Dance of the Desert\nCost: 2\nCD: 20s", "Attacks enemies in range 30 times, dealing a total of ??? M.DMG. Additionally throws the 'Blades of Arlaq' at random enemies 30 times, dealing a total of ??? M.DMG. Extra ??? DMG is stacked every time the blade hits the same enemy. [Blinding Acceleration] can be used once during skill activation, and the 'Blades of Arlaq' prioritize targets inflicted by Charm.", true)
.addField("S3-1: Blinding Acceleration", "Gains immunity to CC for 3 sec and ATK Spd is increased by 800.", true)
.addField("S4: Blessing of Oasis", "Decreases CC duration inflicted on self by ???%. Upon using a skill, gains [Blessing of Oasis] for 20 sec, increasing own Penetration by 30 and DEF by ???. [Blessing of Oasis] can be stacked up to max 10 times and cannot be dispelled.", true)
.addBlankField(true)
.addField("UT1: Anklet of Oasis", "[Whisper of Sand] Makes the effect irremovable, and recovers Mana by 140 upon Critical Hit.", true)
.addField("UT2: Halidom of Trovatia", "[Enchanting Flow] After movement, absorbs DMG equal to 160% of ATK for 3 sec, then creates a shield that is immune to CC, and mana cost of [Alluring Ambush] is decreased by 1.", true)
.addField("UT3: Veil of Charm", "[Dance of the Desert] Skill cooldown is decreased by 30% and Penetration is increased by 100 during skill activation.", true)
.addField("UT4: Earrings of God Dragon", "[Blessing of Oasis] Increases DEF boost by 50%. Upon gaining Blessing of Oasis, increases ATK Spd by 100 for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'mirianne') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.0e412f4a.png")
.setTitle("Mirianne\nServant of Blue")
.addField("Class", "Assassin", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Endless Acceleration, Riventina", "Increases ATK Spd by 200, and attacks on Locked On enemies, dealing 200% of ATK as extra M.DMG. Extra damage effect occurs once in 2 sec.", true)
.addBlankField(true)
.addField("S1: Target Lock On\nCost: 1\nCD: 6s", "Attacks the enemy with the lowest M.DEF 3 times, dealing a total of ??? M.DMG and inflicting stun for 1 sec, and if the target is under 'Target Lock On', target takes additional ??? M.DMG. The last attack inflicts 'Target Lock On' on the enemy for 10 sec. Lock On cannot be dispelled, and the target's M.Block rate has decreased by 500.", true)
.addField("S2: Restrain and Protect\nCost: 3\nCD: 12s", "Deals ??? M.DMG to target enemy and other enemies in range, and Stuns them for 2 sec. Then moves to an ally with the lowest P.DEF, excluding self, and creates Shield for two that can block ??? DMG for 10 sec. Shield will be ineffective when there is no ally. Gains immunity to CC while the Shield lasts.", true)
.addField("S3: Assassination\nCost: 2\nCD: 14s", "Moves to an enemy with the lowest HP, deals ??? M.DMG then returns to the furthest ally. If the enemy is not a hero, deals ??? additional M.DMG that ignores DEF. Defeating a target with this skill instantly triggers 'Restrain and Protect'.", true)
.addField("S4: Target Eliminated", "If an enemy is inflicted by 'Target Lock On', ATK increases by ??? and all attacks skills prioritize Locked On enemies. When the Locked On enemies dies, 'Target Lock On' is inflicted on another enemy for 10 sec.", true)
.addBlankField(true)
.addField("UT1: Proof of Endeavor", "[Target Lock On] Increases DMG by 20%, and reduces the target's M.Crit Resistance by 500 for 10 sec.", true)
.addField("UT2: Gemini Ring of Instant Teleportation", "[Restrain and Protect] Reduces Mana Cost by 1 and upon Crit hit recovers 160 Mana.", true)
.addField("UT3: Magic Powder of Lightning", "[Assassination] DMG is increased by 50% and upon Crit Hit increases own ATK by 10% for 10 sec.", true)
.addField("UT4: Birth of Miracle", "[Target Eliminated] Increases ATK boost by 50%. Every 5 sec, stuns enemies under Target Lock On for 1 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'nia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.b4ae19c3.png")
.setTitle("Nia\nDarkness-swallowing Eyes")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "YES", true)
.addBlankField(true)
.addField("UW: Rending Chaos, Zakadras", "Crit Chance is increased by 200 and Crit DMG is increased by 40%.", true)
.addBlankField(true)
.addField("S1: Scar of Barbarism\nCost: 3\nCD: 15s", "Deals ??? P.DMG to 1 enemy. Then, moves forward while continuously attacking the nearby area and knocking back hit enemies to deal a total of ??? P.DMG. The last strike deals ??? P.DMG to frontal enemies and knocks them down for 2 sec.", true)
.addField("S1-1: Enhanced Scar of Barbarism", "Deals ??? P.DMG to 1 enemy. Then, moves to random enemies while continuously attacking the nearby area and knocking back hit enemies to deal a total of ??? P.DMG. The last strike deals ??? P.DMG to frontal enemies and knocks them down for 4 sec.", true)
.addField("S2: On the Hunt\nCost: 3\nCD: 15s", "Moves behind the farthest enemy to deal ??? P.DMG, and inflicts [Hunt Mark] to all enemies for 12 sec. Enemies under [Hunt Mark] take 20% increased P.DMG and have their Heal Rate reduced by 25%. Dispels all positive effects from enemies with [Enhanced Hunt Mark].", true)
.addField("S2-1: Enhanced On the Hunt", "Moves behind the farthest enemy to deal ??? P.DMG that ignores DEF, and inflicts [Enhanced Hunt Mark] to all enemies for 12 sec. Enemies under [Enhanced Hunt Mark] take 40% increased P.DMG, have their Heal Rate reduced by 50%, and their ATK Spd by 25%. Dispels all positive effects from enemies with [Hunt Mark].", true)
.addField("S3: Demonic Eyes of Petrification\nCost: 4\nCD: 30s", "Deals ??? P.DMG to frontal enemies ??? times, and petrifies them for 3 sec.", true)
.addField("S3-1: Enhanced Demonic Eyes of Petrification", "Deals ??? P.DMG that ignores DEF to frontal enemies in a wider range ??? times, and petrifies them for 5 sec.", true)
.addField("S4: Demonic Blood", "Gains 1 stack of [Demonic Blood] upon casting a skill. It can be stacked up to max 4 times, and upon gaining 4 stacks, Cooldown of all skills is reset and [Enhanced Skill] becomes available. Removes [Demonic Blood] stacks when [Enhanced Skill] is used. Upon gaining each stack of [Demonic Blood], increases own ATK by ??? and All Dodge Chance by 20 for 20 sec. This effect can be stacked up to max 10 times.", true)
.addBlankField(true)
.addField("UT1: Flower of Jungle", "[Scar of Barbarism] Reduces Mana Cost by 1 and reduces P.Crit Resistance of the affected enemy by 200 for 10 sec.", true)
.addField("UT2: Gift of Hunter", "[On the Hunt] Increases DMG by 50% and P.DMG increase inflicted by [Hunt Mark] and [Enhanced Hunt Mark] by an additional 8%.", true)
.addField("UT3: Bone Mask of Spell", "[Demonic Eyes of Petrification] Pulls enemies to the front upon casting, and reduces Mana of enemies by 200 upon hit.", true)
.addField("UT4: Blood Stabilizer", "[Demonic Blood] At the beginning of every battle, gains 1 stack of [Demonic Blood]. 4 stacks of [Demonic Blood] will grant immunity to CC for 2 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'reina') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.7957505e.png")
.setTitle("Reina\nLightning Flash")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Lightning Flash, Livatis", "Upon a Crit Hit, ATK Spd is increased by 80 and Crit DMG is increased by 20% for 15 sec. Can be stacked up to 5 times max.", true)
.addBlankField(true)
.addField("S1: Float Like a Butterfly\nCost: 1\nCD: 10s", "Rapidly stabs the enemy, dealing ??? P.DMG. Upon a Crit Hit, stacks 1 Wound and resets cooldown. Per every stacked Wound, DMG dealt by Float Like a Butterfly is increased by 20%. Gains immunity to all DMG while the skill is in use.", true)
.addField("S2: Sharp End\nCost: 2\nCD: 10s", "Increases ATK by ??? for 20 sec and increases Crit Chance by 500. This effect cannot be dispelled.", true)
.addField("S3: Shooting Star\nCost: 3\nCD: 25s", "Inflicts ??? P.DMG upon enemy with a continuous attack. The last hit blows the enemy away.", true)
.addField("S4: Lucky Child", "Upon a Crit Hit, ATK is increased by ??? for 10 sec. Can be stacked up to 8 times max.", true)
.addBlankField(true)
.addField("UT1: Wing of Lightning Flash", "[Float Like a Butterfly] Increases DMG by 20%, and reduces the target's P.Block chance by 500 for 10 sec.", true)
.addField("UT2: Master's Ring", "[Sharp End] Increases ATK Boost by 50% and recovers additional 40 MP upon a Crit Hit for the skill's duration.", true)
.addField("UT3: Medal of Swiftness", "[Shooting Star] DMG is increased by 20% and upon Crit Hit, mana is recovered by 200.", true)
.addField("UT4: Amethyst Pin", "[Lucky Child] Increases the max number of stacks by 2, each stack increasing Crit DMG by 2%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'roi') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.fe369871.png")
.setTitle("Roi\nSwift Assassin")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Specter's Breath, Redeal", "Each auto attack has a 25% chance of inflicting 1 stack of Bleed, and dealing 50% of ATK as extra DMG.", true)
.addBlankField(true)
.addField("S1: Merciless\nCost: 2\nCD: 8s", "Attacks a random enemy 3 times, dealing a total of ??? P.DMG and inflicting 1 stack of Bleed on them that deals ??? P.DMG over 16 sec. Bleed can be stacked up to max 3 times.", true)
.addField("S2: Curtain of Darkness\nCost: 2\nCD: 15s", "For 10 sec, ATK is increased by ??? and Dodges all P.DMG attacks.", true)
.addField("S3: Blade Claw\nCost: 3\nCD: 20s", "Moves behind the enemy with the lowest HP and deals ??? P.DMG. Per every stacked Bleed, DMG is increased by 50% and all stacks of Bleed are removed after the attack. Upon Crit Hit, recovers 2 MP and skill cooldown is reset.", true)
.addField("S4: Hack", "If a normal attack is landed as a Critical Hit, attacks the target 6 times to deal a total of ??? additional P.DMG.", true)
.addBlankField(true)
.addField("UT1: Shadow Blade", "[Merciless] Dispels all negative effects from self, and recovers Mana by 200 upon Critical Hit.", true)
.addField("UT2: Soma's Hood", "[Shadow Blade] Increases ATK Boost by 20% and gains CC resist by 400 for the skill's duration.", true)
.addField("UT3: Cracked Mask", "[Blade Claw] DMG is increased by 20%, and Upon Crit Hit, mana is recovered by 300.", true)
.addField("UT4: Specter's Ring", "[Hack] Increases DMG by 50%. Upon a Critical Hit, increases own ATK Spd by 200 for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'tanya') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.aa6e3a92.png")
.setTitle("Tanya\nThe Silencing Blade")
.addField("Class", "Assassin", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Demon of the Calm, Caethasis", "Turns into Stealth mode for 10 sec at the beginning of each battle. While in Stealth mode, own Crit DMG will be increased by 30% for 10 sec.", true)
.addBlankField(true)
.addField("S1: Target Sighted\nCost: 2\nCD: 8s", "Moves behind the enemy with the lowest P.DEF and increase their P.DMG taken by 30%, while knocking them down and inflicting ??? P.DMG. If in a Stealth state, stun said enemy for 6 sec. If not, gain Stealth for 10 sec. While in a Stealth State, Crit Rate and Dodge Rate rises by 50.", true)
.addField("S2: Blade Tornado\nCost: 2\nCD: 14s", "Attacks nearby enemies 3 times and deals a total of ??? P.DMG, inflicting 1 stack of Bleed per each hit. If used in a Stealth state, target's heal rate is reduced by 70%, and Stealth is dispelled. If not, turns into Stealth mode for 10 sec. [Stealth] Crit Rate and Dodge Rate are increased by 50.", true)
.addField("S3: Whisper of Death\nCost: 3\nCD: 25", "Attacks random enemies 6 times and deals a total of ??? P.DMG, then deals one additional attack of ??? extra P.DMG. If used in Stealth state, dispels all enemies' buffs. If not, turns into Stealth mode for 10 sec. [Stealth] Crit Rate and Dodge Rate are increased by 50.", true)
.addField("S4: Silent Ambush", "Deals ??? additional P.DMG to the enemy and silences them for 1 sec upon a Critical Hit with the skill. If the target is not a Hero, deals ??? additional P.DMG that ignores DEF and reduces the target's ATK Spd by 200 for 10 sec.", true)
.addBlankField(true)
.addField("UT1: Copied Codex of Stealth", "[Target Sighted] Increases DMG by 50%, and after use, recovers Mana by 400.", true)
.addField("UT2: Laughing Mask All-round Belt", "[Blade Tornado] Increases DMG by 20% and reduces Cooldown by 8% upon a Crit Hit.", true)
.addField("UT3: Dagger of Silence", "[Whisper of Death] DMG is increased by 20% and upon use, immediately gains Stealth. If used in Stealth mode, ATK is increased by 20% for 10 sec.", true)
.addField("UT4: Needle of Silence", "[Silent Ambush] Upon activation, recovers own Mana by 100 while reducing the target's Mana by 200.", true)
msg.channel.send({ embed });
break;

//hero archer info

} else {
if (args[1] === 'arch') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.e2e40ce1.png")
.setTitle("Arch\nArror of Purity")
.addField("Class", "Archer", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Clear Blue Sky, Sherrkyle", "Every 10 sec, marks Judgment Sigil on 1 random enemy for 15 sec, then deals M.DMG equal to 200% of ATK. Ignores DEF if the target is not a Hero.", true)
.addBlankField(true)
.addField("S1: Celestial Arrow\nCost: \nCD:", "Deals ??? M.DMG to 3 enemies and push them back, leaving a Judgment Sigil on them for 15 sec. Deals additional ??? M.DMG to Non-Hero enemies and causes them to take 25% increased M.DMG for 10 sec.", true)
.addField("S2: Purifying Blaze\nCost: \nCD:", "Deals ??? M.DMG to frontal enemies in a straight line. Deals additional ??? M.DMG that ignores DEF to targets with Judgment Sigil, and reduces their Heal Rate by 50% for 10 sec.", true)
.addField("S3: Arbiter\nCost: \nCD:", "Deals ??? M.DMG to the target and enemies in a nearby range. Enemies with Judgment Sigil take 50% increased M.DMG and become silenced for 5 sec. Afterward, grants immunity to M.DMG to all allies for 5 sec.", true)
.addField("S4: The Last Judgement", "Every 15 sec, deals ??? M.DMG ignoring DEF to enemies inflicted by Judgement Sigil. Once during every battle, upon reaching near death HP, deals ??? M.DMG to enemies inflicted by Judgement Sigils and stuns them for 3 sec, while casting a shield that blocks ??? DMG to all allies for 5 sec. Gains immunity to CC while the shield is in effect. When the shield effect takes place, consumes all mana, and all skill cooldown is increased by 50%.", true)
.addBlankField(true)
.addField("UT1: Holy Golden Arrow", "[Celestial Arrow]Increases DMG by 20% and the number of targets by 1.", true)
.addField("UT2: Magic Square of Pursuit", "[Purifying] Reduces Mana Cost by 1 and increases DMG by 20%.", true)
.addField("UT3: Eye of Heaven", "[Arbiter] DMG is increased by 20% and all allies' ATK is increased by 30% for the duration of M.Shield.", true)
.addField("UT4: Bell of Punishment", "[The Last Judgement] Upon receiving fatal DMG, heals HP of all allies by 15% of Max HP, and silences entire enemies for 1 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'dimael') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.f591d4f5.png")
.setTitle("Dimael\nShadow Hunter")
.addField("Class", "Archer", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Tears of the Moon, Nerius", "Each attack has a 10% chance of dealing 100% of ATK as M.DMG, and all skill cooldown is reduced by 10%.", true)
.addBlankField(true)
.addField("S1: Dark Rampage\nCost: \nCD:", "Deals ??? M.DMG to an enemy.", true)
.addField("S2: Black Shackle\nCost: \nCD:", "Deals ??? M.DMG to enemies in range and shackles them for 6 sec.", true)
.addField("S3: Shadow Wave\nCost: \nCD:", "Deals ??? M.DMG to enemies in a straight line and inflicts Blind for 6 sec.", true)
.addField("S4: Black Stain", "Each auto attack deals extra ??? M.DMG that ignores target's M.DEF.", true)
.addBlankField(true)
.addField("UT1: Vow of Black Moon", "[Dark Rampage] Dispels all negative effects from self and reduces Cooldown by 1 sec.", true)
.addField("UT2: Unbreakable Bracelet", "[Black Shackle] Increases DMG by 50% and increases M.Weakness of the target by 10% for 10 sec.", true)
.addField("UT3: Eye of Shadows", "[Shadow Wave] DMG is increased by 50% and Blind duration is increased by 2 sec.", true)
.addField("UT4: Black Crown", "[Black Stain] Increases the Range of normal attacks by 20%, each hit increasing DMG by 2%. This effect can be stacked up to max 10 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'luna') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.9ff2491e.png")
.setTitle("Luna\nChild of Moonlight")
.addField("Class", "Archer", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Flower of Eternity, Hyacinth", "Increases DMG of normal attacks by 20% and the Range by 6%.", true)
.addBlankField(true)
.addField("S1: Pew!\nCost: \nCD:", "Deals ??? M.DMG by shooting a bouncing projectile which bounces 3 times starting from the nearest enemy. The further the enemy, the more DMG inflicted.", true)
.addField("S2: Look Out Above!\nCost: \nCD:", "Deals ??? M.DMG to enemies furthest away in a small range, and stuns them for 1 sec. The further the enemy, the more DMG they will take.", true)
.addField("S3: Twinkle Twinkle\nCost: \nCD:", "Deals ??? M.DMG to target enemies in range, and reduces target's Crit Chance by 100% for 7 sec.", true)
.addField("S4: Gotcha!", "Every 6 sec, deals a total of ??? M.DMG to the furthest enemy for 5 sec. The further the enemy, the more DMG they will take.", true)
.addBlankField(true)
.addField("UT1: Golden Bell of Luck", "[Pew!] Increases DMG by 20%, and upon Critical Hit, recovers Mana by 200.", true)
.addField("UT2: Moonlight Carrot", "[Look Out Above!] Increases DMG by 20% and reduces Cooldown by 10% upon a Crit Hit.", true)
.addField("UT3: Never-Melting Snow Flower", "[Twinkle Twinkle] DMG is increased by 20% and target inflicted with Crit Chance reduction cannot dispel the effect.", true)
.addField("UT4: Carrot Cake", "[Gotcha!] Increases DMG by 50%. Hit enemies take 10% increased M.DMG for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'requina') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.397132d3.png")
.setTitle("Requina\nMerchant of Poison")
.addField("Class", "Archer", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: The Flute of Silent Winds Rakshathar", "Max stack of Tickle Tickle Potion is increased to 55. Each auto attack has a 10% chance of attacking a random enemy, dealing 20% of ATK as DMG and inflicting Silence for 1 sec.", true)
.addBlankField(true)
.addField("S1: Tears of Mr. Python!\nCost: \nCD: ", "Attacks 2 enemies and deals ??? P.DMG, while poisoning them with Tears of Mr. Python that cannot be dispelled for 4.5 sec. Enemies inflicted with Tears of Mr. Python cannot recover mana, takes 30% increased DMG, and their Block chance is reduced by 500.", true)
.addField("S2: Screechy Grass Extract!\nCost: \nCD: ", "Attacks a random enemy 3 times and deals a total of ??? DMG, while poisoning them with Screechy Grass Extract for 6 sec. Enemies inflicted with Screechy Grass Extract have their ATK reduced by 30%, and Crit Chance by 500.", true)
.addField("S3: More! Stronger!\nCost: \nCD: ", "Own ATK is increased by ??? for 20 sec and the effect of [Tears of Mr. Python], [Screechy Grass Extract], [Tickle Tickle Potion] is doubled. Also, target of [Tears of Mr. Python], [Screechy Grass Extract!], [Tickle Tickle Potion] is increased by 1.", true)
.addField("S4: Tickle Tickle Potion!", "Upon attack, poisons target enemy with Tickle Tickle Potion for 10 sec which deals a total of ??? P.DMG over time, and cannot be dispelled. Tickle Tickle Potion can be stacked max 50 times.", true)
.addBlankField(true)
.addField("UT1: Tear of Venom", "[Tears of Mr. Python!] Gains Immunity to CC for the skill's duration, and increases the skill duration by 0.8 sec.", true)
.addField("UT2: Basilisk's Poisonous Fang", "[Screechy Grass Extract!] Skill cooldown is decreased by 30% and deals 3% of ATK as additional P.DMG per each stacked Tickle Tickle Potion! of target.", true)
.addField("UT3: Sparkling Potion", "[More! Stronger!] Attacks additional 1 target and ATK Spd is increased by 100 for the duration.", true)
.addField("UT4: Laughter of Death", "[Tickle Tickle Potion!] Increases DMG by 20%. Hit enemies have their P.Crit Resistance reduced by 250.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'selene') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.0f795546.png")
.setTitle("Selene\nWind-piercing Arrow")
.addField("Class", "Archer", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: ", "Upon a Crit Hit, ATK Spd is increased by 200 for 10 sec, and for the duration of skill, each auto attack fires an arrow that deals extra 100% P.DMG.")
.addBlankField(true)
.addField("S1: Arror Rain\nCost: 3\nCD: 8s", "Shoots 12 arrows to random enemies and deals a total of ??? P.DMG.", true)
.addField("S2: Rush\nCost: 1\nCD: 6s", "Upon attacking, summons 5 arrows that launch towards the enemy. Each arrow deals ??? P.DMG.", true)
.addField("S3: Moonlight Flash\nCost: 4\nCD: 20s", "Fires an arrow in a straight line, dealing P.DMG to all enemies in range proportional to their current HP. Deals a maximum of ??? P.DMG and inflicts knock down.", true)
.addField("S4: Moonlight Arrow", "Upon attacking, increases ATK by ??? and Crit Chance by 100 for 10 sec. This effect stacks up to 3 times.", true)
.addBlankField(true)
.addField("UT1: Sharpshooter's Gloves", "[Arrow Rain] Reduces Mana Cost by 1 and Cooldown by 1 sec.", true)
.addField("UT2: Wind Spirit Seal Stone", "[Rush] Increases DMG by 20% and has a 15% chance to summon 1 Rush Arrow upon a normal attack.", true)
.addField("UT3: Silver Arrow", "[Moonlight Flash] DMG is increased by 20% and target takes 20% additional P.DMG for 10 sec.", true)
.addField("UT4: Circlet of Wind", "[Moonlight Arrow] Increases ATK Spd by 100 and each stack increases DMG to Non-Hero enemies by 2%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'shamila') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.e33a6806.png")
.setTitle("Shamila\nThe Vessel of Curses")
.addField("Class", "Archer", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Wings of Corruption, Apoliox", "Every 20 seconds, obtains The Vessel of Curses and increases ATK by 20% for 10 seconds.", true)
.addBlankField(true)
.addField("S1: Curse of Petrification\nCost: \nCD: ", "Attacks an enemy dealing ??? M.DMG and inflicting Curse of Petrification for 3 seconds that can't be dispelled. The enemy under the Curse of Petrification will have ATK Spd reduced by 200 , and this effect gets stronger up to max 600% as time passes. When the curse ends, petrifies the target for 3 seconds.", true)
.addField("S2: Curse of Time\nCost: \nCD: ", "Attacks an enemy inflicting ??? M.DMG and also inflicts Curse of Time for 10 seconds, increasing all skill cooldown by 1.5 seconds. All skill cooldowns of the enemy under the Curse of Time increases by 1 seconds every 3 seconds.", true)
.addField("S3: Curse of Pain\nCost: \nCD: ", "Attacks en enemy dealing ??? M.DMG and inflicting knockback. Also inflicts Curse of Pain for 8 seconds, dealing a total of ??? M.DMG over time.", true)
.addField("S4: The Vessel of Curses", "At the beginning of every battle, for 7 seconds, obtains The Vessel of Curses, creates a shield that cannot be canceled, and absorbs ??? damage. For the duration of the shield, gains Immunity to CC. Upon the activation of the skill, consumes The Vessel of Curses to have 4 enemies as the target.", true)
.addBlankField(true)
.addField("UT1: Liberation of Curses", "[Curse of Petrification] Increases the number of targets by 1, and for 10 sec, reduces the target's M.Dodge by 120.", true)
.addField("UT2: Ancient Demon's Heart", "[Curse of Time] Additionally increases Cooldown by 0.7 sec and reduces M.DEF of the target by 10% for 10 sec.", true)
.addField("UT3: The Jar of Curses", "[Curse of Pain] DMG is increased by 20%, and gains a stack of 'The Vessel of Curses' upon killing an enemy.", true)
.addField("UT4: Primal Curse", "[The Vessel of Curses] Upon gaining the Vessel of Curses, self's Cooldown of all skills is reduced by 12% and All DEF is increased by 50% for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'yanne') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.3eda3ae0.png")
.setTitle("Yanne\nDragon Slayer")
.addField("Class", "Archer", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Dragonbane, Svelta", "Upon a Crit Hit, there is a 10% chance of dealing 200% of ATK as P.DMG, and recovering 5% of Mana. If the target is a Dragon, inflicts Stun for 1.5 sec.", true)
.addBlankField(true)
.addField("S1: Focus Shot!\nCost: \nCD: ", "Taking up a stance, focuses for a while and deals ??? P.DMG to enemies in a straight line. If the target is a dragon, inflicts Stun for 3 sec. The longer she focuses, DMG and Stun duration are increased by 100%.", true)
.addField("S2: Wipeout!\nCost: \nCD: ", "Deals ??? P.DMG to target enemy and other enemies in range. If the target is a Dragon, deals ??? extra DMG that ignores DEF.", true)
.addField("S3: No Holding Back!\nCost: \nCD: ", "Removes all negative effects on self. For 30 sec, ATK is increased by ??? and Penetration is increased by 500. For the duration of skill, auto attacks are changed to consuming 3% mana to deal DMG to all enemies in a straight line and deals ??? extra P.DMG to Dragons ignoring DEF.", true)
.addField("S4: Dragon Slayer\nCost: \nCD: ", "ATK is increased by ??? , and Max HP is increased by 30%. Also, DMG dealt to Dragons is increased by 50%.", true)
.addBlankField(true)
.addField("UT1: Talisman of Concentration", "[Focus Shot!] Increases ATK Spd by 800 for the skill's duration, and increases P.DMG target receives by 10% for 10 sec.", true)
.addField("UT2: Giant Arrow of Sudden Death", "[Wipeout!] Increases DMG by 20% and reduces Cooldown by 12% upon a Crit Hit.", true)
.addField("UT3: Dragon Steak", "[No Holding Back!] Reduces Mana Cost by 1 and increases DMG to Dragons by 10% for the skill's duration.", true)
.addField("UT4: Blazing Heart of Giant", "[Dragon Slayer] Increases ATK boost by 50%. All allies deal 4% increased DMG to Dragons.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'yuria ') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.d5f6fa8f.png")
.setTitle("Yuria\nMysterious Tailor")
.addField("Class", "Archer", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Starry Sky Weaver, Mellifluo", "Every normal attack increases ATK by 1% and Crit DMG by 1% for 10 sec. This effect can be stacked up to max 20 times and is irremovable. Recovers 200 Mana upon using the Skill.", true)
.addBlankField(true)
.addField("S1: Binding Karma\nCost: \nCD: ", "Deals ??? M.DMG that ignores M.Block to 2 enemies and reduces their Mana by 500. If the target is affected by 'Threading Destiny', deals DMG that ignores DEF, and 'Threading Destiny' will be removed.", true)
.addField("S2: Starlight Sewing\nCost: \nCD: ", "Dispels negative effects from self and casts a shield that absorbs ??? DMG for 10 sec. While the shield active, gains immunity to CC, increases Crit Chance by 300, and increases the number of targets that Yuria attacks by 1.", true)
.addField("S3: Circle of Fate\nCost: \nCD: ", "Deals ??? M.DMG to 2 enemies, increasing the M.DMG they take by 30% for 10 sec and inflicting 'Threading Destiny' for 5 sec. Enemies under 'Threading Destiny' have their ATK Spd reduced by 250.", true)
.addField("S4: Blessing of Truth", "Increases own All DEF by ??? and ATK Spd by 300. Normal attacks hit 2 enemies. Every normal attack inflicts a stack of 'Stigma of Stars' upon enemies. Targets take 1% increased M.DMG for every stack of 'Stigma of Stars'. This effect can be stacked up to max 15 times and is irremovable.", true)
.addBlankField(true)
.addField("UT1: Whisper of Night Sky", "[Binding Karma] Increases DMG by 20% and grants immunity to CC for the duration of Skill.", true)
.addField("UT2: Foreseeing Eyes", "[Starlight Sewing] Increases shield amount by 50%, and takes 10% reduced P.DMG while shield is active.", true)
.addField("UT3: Beyond the Mirror", "[Circle of Fate] Increases DMG by 50% and increases M.DMG the target takes by 10% for 10 sec.", true)
.addField("UT4: Drops of Heaven", "[Blessing of Truth] Increases the max number of 'Stigma of Stars' stacks by 10 and increases DMG of normal attacks by 20%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'zafir') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.f187ebef.png")
.setTitle("Zafir\nPrince of Sandstorm")
.addField("Class", "Archer", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Glory of the God King, Zaries", "Upon using a skill, gains a stack of 'Will of Desert.' 'Will of Desert' increases ATK and Crit DMG by 4% for 30 sec, and can be stacked up to max 8 times. This effect cannot be dispelled.", true)
.addBlankField(true)
.addField("S1: Judgment of the Desert\nCost: \nCD: ", "Deals ??? P.DMG enemies in a wide range, and per each hit enemy, skill cooldown is decreased by 1 sec. Deals ??? P.DMG to enemies inflicted by [Mark of Desert] and removes 1 stack of [Mark of Desert]. Upon each skill use, Crit DMG is increased by 5%. This effect can be stacked up to max 12 times and cannot be dispelled.", true)
.addField("S2: Blessing of the Sand Spirit\nCost: \nCD: ", "Creates a shield around the ally with the lowest HP that absorbs ??? DMG for 5 sec. Gains immunity to CC while the shield lasts. When the shield duration is over, 'Sand Storm' is activated and deals ??? P.DMG to enemies in a wide range, inflicting 2 stacks of [Mark of Desert]. If the shield is dispelled or destroyed, 'Sand Storm' does not activate.", true)
.addField("S3: Doom of the Desert\nCost: \nCD: ", "Deals ??? P.DMG to frontal enemies in a wide range and inflicts 1 stack of [Mark of Desert]. Then summons 'Pit of Sand' for 5 sec, dealing ??? P.DMG every 0.5 sec, and decreasing their P.DEF by 30% for 10 sec. 'Pit of Sand' has a 25% chance of inflicting 1 stack of [Mark of Desert] and draws in all enemies in range to the center.", true)
.addField("S4: Calling of the Guardian", "Each auto attack has a 15% chance of dealing ??? P.DMG that ignores DEF to all enemies, inflicting 1 stack of [Mark of Desert]. [Mark of Desert] can be stacked up to max 10 times.", true)
.addBlankField(true)
.addField("UT1: Sandstorm Arrow", "[Judgment of the Desert] Increases DMG by 2% upon every use. There is a 30% chance that the hit enemy is inflicted with the Mark of Desert. DMG increase effect can be stacked up to max 20 times.", true)
.addField("UT2: Sand of Mirage", "[Blessing of the Sand Spirit] Shield absorbs 20% more DMG and dispels CC inflicted on self.", true)
.addField("UT3: Soul of Oasis", "[Doom of the Desert] Skill cooldown is decreased by 30% and effect activation chance is increased by 8%.", true)
.addField("UT4: Black Cat, Hoabis", "[Calling of the Guardian] Upon a Critical Hit, stuns the target for 2 sec and increases P.DMG it takes by 10% for 10 sec.", true)
msg.channel.send({ embed });
break;

//hero mechanic info

} else {
if (args[1] === 'annette') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.bd009743.png")
.setTitle("Annette\nRoyal Technomagi")
.addField("Class", "Mechanic", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Crystallized Technomagic, Rascal", "Every 1.5 sec, gains 1 stack of Charge and recovers 1% mana.", true)
.addBlankField(true)
.addField("S1: Blasting Ray\nCost: \nCD: ", "Attacks enemies in a straight line, dealing ??? M.DMG, and hit enemies take 25% increased M.DMG. If the skill is used when in Overcharge state, deals ??? extra M.DMG, and hit enemies take 25% increased M.DMG.", true)
.addField("S2: Emergency Treatment\nCost: \nCD: ", "Dispels negative effects of all allies and heals a total of ??? HP for 10 sec while increasing CC Resistance by 250. While Overcharged, all allies' Crit Chance is increased by 250 and gains immunity to CC.", true)
.addField("S3: Process of Elimination\nCost: \nCD: ", "Fires an exploding energy ball to a random target and nearby enemies in range, dealing a total of ??? M.DMG. When in Overcharge state, deals a total of ??? M.DMG and inflicts Stun for 5 sec upon explosion.", true)
.addField("S4: Charge", "Gains 1 stack of Charge every 0.5 sec, and gains 10 stacks of Charge per every orb of mana used. Upon the 100th Charge stacked, enters Overcharge state. When in Overcharge, ATK is increased by ??? for 15 sec and each auto attack reduces skill cooldown by 10%. All effects cannot be dispelled, and Charge will not stack during Overcharge state.", true)
.addBlankField(true)
.addField("UT1: Triplex Condensing Lens", "[Ray of Annihilation] For 10 sec, reduces the target's Crit Chance by 250 and the target's Mana by 400.", true)
.addField("UT2: Script of Healing", "[Emergency Treatment] Reduces Mana Cost by 1 and increases Heal Rate by 20%.", true)
.addField("UT3: Code of Annihilation", "[Process of Elimination] DMG is increased by 20% and upon ATK, gains 2 stack of Charge. This stack can be gained while in Overcharge state.", true)
.addField("UT4: High Performance Battery", "[Charge] Gains 30 stacks of Charge at the beginning of every battle. While in Overcharge, Normal attacks increase Cooldown Reduction by 5%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'cecilia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.4b48588b.png")
.setTitle("Cecilia\nCrimson Wind of Justice")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Supersonic Tempest, Gigantix", "Increases ATK Spd by 100. Normal and Skill attacks grant a stack of Explosion on self and have a 3% chance of stunning the target for 4 sec. Upon gaining 100 Explosion stacks, Gigantix explodes, increasing ATK Spd and All Dodge Chance by 100. This effect is irremovable.", true)
.addBlankField(true)
.addField("S1: Outta the way!\nCost: \nCD: ", "Marks the farthest enemy as the [Villain], reducing its ATK Spd by 200 for 15 sec. Then, moves to the target to deal ??? P.DMG. After using this Skill, [Crushing Kick!] becomes available.", true)
.addField("S1-1: Crushing Kick!", "Attacks the target, dealing ??? P.DMG and knocking it away for 4 sec. Enemies marked as [Villain] are prioritized. After using this Skill, [Tempest Kick!] becomes available.", true)
.addField("S1-2: Tempest Kick!", "Moves to the farthest enemy, dealing ??? P.DMG and stunning it for 4 sec. Enemies marked as [Villain] are prioritized.", true)
.addField("S2: Infinite Potential\nCost: \nCD: ", "Deals ??? P.DMG to nearby enemies in a circular range of self, knocking them down for 3 sec. Afterward, Cecilia gains [Infinite Potential], which increases own ATK Spd by 300 for 15 sec. While under [Infinite Potential], Normal and Skill attacks deal ??? P.DMG to Heroes and ??? P.DMG to Non-Hero enemies. This effect is irremovable.", true)
.addField("S3: WA-TAAAAAH!!!\nCost: \nCD: ", "Deals ??? P.DMG over 6 attacks to nearby enemies in a circular range of self. Afterward, deals ??? P.DMG to the target and its nearby enemies, knocking them down for 4 sec. While under [Infinite Potential], [Special Move. Meteor Kick!!!] becomes available for 10 sec.", true)
.addField("S3-1: Special Move. Meteor Kick!!!", "Launches a full force attack that deals ??? P.DMG to the target and enemies nearby, stunning them for 5 sec. This Skill will always be a Critical Hit.", true)
.addField("S4: Inborn Talent", "Increases own DEF by ??? and Crit Chance by 200. Cecilia's Normal and Skill attacks will not miss.", true)
.addBlankField(true)
.addField("UT1: First Step of Hero", "[Outta the Way!] Reduces Mana Cost by 1 and increases P.DMG the target takes by 10% for 10 sec.", true)
.addField("UT2: Childhood Memory", "[Infinite Potential] Dispels negative effects from self and increases DMG by 20%.", true)
.addField("UT3: Moment of Respite", "[WA-TAAAAAH!!!] Increases own DMG to Boss by 4% per every Skill use. This effect can be stacked up to max 10 times. Reduces Mana Cost of [Special Move. Meteor Kick!!!] by 1.", true)
.addField("UT4: Heart of Justice", "[Inborn Talent] At the beginning of each battle, deals 10% increased DMG to Non-Hero enemies and takes 25% reduced DMG for 20 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'chrisha') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.61600f3d.png")
.setTitle("Chrisha\nInquisitor of Blood and Iron")
.addField("Class", "Mechanic", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Prism Nova, Arc Lumineir", "Upon gaining Lights, receives various effects. Red Light - Increases ATK of all allies by 10% for 10 sec. Blue Light - Increases DEF of all allies by 10% for 10 sec. Green Light - Recovers Mana of all alies by 300.", true)
.addBlankField(true)
.addField("S1: Light of Annihilation\nCost: \nCD: ", "Deals ??? M.DMG that ignores DEF to the target, and inflicts stun for 3 sec. Deals additional ??? M.DMG that ignores DEF to Non-Hero targets. After use, removes all stacked Lights and gains irremovable Red Light.", true)
.addField("S2: Enemy Blockade\nCost: \nCD: ", "Dispels all negative effects from self, deals ??? M.DMG to all enemies, and silences them for 1 sec. After use, removes all stacked Lights and gains irremovable Blue Light.", true)
.addField("S3: Green Zone\nCost: \nCD: ", "Deals ??? M.DMG to frontal enemies in a straight line and creates a Green Zone ahead. Enemies in the Green Zone cannot receive positive effects and takes a total of ??? M.DMG over 3 sec, having their Heal Rate reduced by 30%. After use, removes all stacked Lights and gains irremovable Green Light.", true)
.addField("S4: Technomagic of the Empire", "Increases ATK by ??? and ACC by 100 for all allies, and own normal attack effect changes according to the color of light owned. Red Light - Increases DMG of normal attack by 100%, and upon attack, reduces Cooldown of [Light of Annihilation] by 1 sec. Blue Light - Reduces DMG of normal attack by 50%, but deals DMG to the entire enemy. Targets take 30% increased M.DMG for 10 sec. Green Light - Reduces DMG of normal attack by 20%, but deals DMG to 2 enemies. Heal Rate of the target is reduced by 20% for 5 sec.", true)
.addBlankField(true)
.addField("UT1: Sword of Nosenhill", "[Light of Annihilation] Increases DMG by 20%, and resets Cooldown upon killing an enemy.", true)
.addField("UT2: Certificate of Inquisitor", "[Enemy Blockade] Reduces Cooldown by 5 sec, and for 10 sec, increases M.DMG target receives by 10%.", true)
.addField("UT3: Pride of Velchia", "[Green Zone]Reduces Cooldown by 30% and increases Heal Rate Reduction Effect of Green Zone by an additional 20%.", true)
.addField("UT4: Prism of Primary Colors", "[Technomagic of the Empire] Upon gaining the Light, increases own ATK by 3% and DMG to Non-Hero enemies by 1.2% for 20 sec. This effect can be stacked up to max 10 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'crow') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.be81df32.png")
.setTitle("Crow\nThe Punishing Bullet")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Hellhound, Akistra", "The normal attack shoots an additional bullet that deals 50% of ATK as P.DMG. When the skill ends, 'Hellhound, Akistra' is activated, increasing ATK by 30% and Crit DMG by 30% for 20 sec. 'Hellhound, Akistra' is only activated once at 20 sec.", true)
.addBlankField(true)
.addField("S1: Target will be Eliminated\nCost: \nCD: ", "Deals a total of ??? P.DMG to enemies in front over 15 times and leaves 2 'Hunting Dog's Fang Marks' for 40 sec. Hunting Dog's Fang Mark stacks up to max 100 times.", true)
.addField("S2: Struggle is Meaningless\nCost: \nCD: ", "Attacks a random enemy 10 times and deals a total of ??? P.DMG. Shoots a Frost Bullet that deals ??? P.DMG to target and surrounding enemies, freezing them for 4 sec. The special Frost Bullet creates a freezing area for 6 seconds that deals ??? P.DMG every 2 sec, with a 50% chance to freeze for 2 sec.", true)
.addField("S3: Even Gods shall Die\nCost: \nCD: ", "Takes position and focuses to shoot a laser, dealing ??? P.DMG to frontal enemies within range, and consumes target's stack of Hunting Dog's Fang Mark to deal ??? additional P.DMG per each stack. Depending on the focusing time, the effect's range increases, and DMG is increased up to max 100%. Once the focus is completed, knocks back the enemy far away.", true)
.addField("S4: Hunting Preparation", "Crow is not affected by changes in ATK Spd. ATK increases by ??? and Crit DMG by 80%. Recovers 300 Mana every second. It also leaves a 'Hunting Dog's Fang Mark' to target for 40 sec when dealing a normal attack.", true)
.addBlankField(true)
.addField("UT1: Teeth-mark Bullet", "[Target will be Eliminated.] Reduces Cooldown by 3 sec, and upon every hit, reduces the target's Mana by 20.", true)
.addField("UT2: Cold Barrage", "[Struggle is Meaningless] Reduces Mana Cost by 1 and has a 10% chance to freeze target for 3 sec upon every strike.", true)
.addField("UT3: Pendant of Memories", "[Even Gods shall Die] Gains immunity to CC during skill activation and DMG is increased by 20%.", true)
.addField("UT4: Carousel Music Box", "[Hunting Preparation] Increases ATK boost by 20%. Hunting Dog's Fang Mark becomes irremovable.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'kara') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.71c839b7.png")
.setTitle("Kara\nEpitome of Ancient Technomagic")
.addField("Class", "Mechanic", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: 0-Form Perpetual Motion Cannon, Heaven Shatterer", "Increases ATK by 1% every second. Can be stacked up to 30 times.", true)
.addBlankField(true)
.addField("S1: Anti-personnel Laser\nCost: \nCD: ", "Attacks the target 4 times, dealing a total of ??? M.DMG and inflicting knockback. Attacks all enemies with the last blow, dealing ??? M.DMG and blowing them away for 3 seconds.", true)
.addField("S1-1: Siege Laser", "Attacks the target inflicting ??? M.DMG. Crit DMG is applied 200% higher.", true)
.addField("S2: Wide-area Cannon\nCost: \nCD: ", "Attacks a random target and nearby enemies in range 4 times, inflicting a total of ??? M.DMG and stunning them for 4 seconds.", true)
.addField("S2-1: Focused Fire", "Attacks a random target 15 times, inflicting a total of ??? M.DMG, and inflicts Focused Fire for 20 seconds. Inflicts ??? extra M.DMG with each stack of Focused Fire on the enemy. Focused Fire can be stacked up to 30 times.", true)
.addField("S3: Release Siege Weapon\nCost: \nCD: ", "Kara turns into Siege Weapon mode and attacks the enemy, inflicting ??? M.DMG with each hit. When in Siege Weapon mode, changes Anti-personnel Laser and Wide-area Cannon skills to Siege Laser and Focused Fire skills. When the skill is used again, returns to Anti-personnel Weapon mode.", true)
.addField("S4: Essence of Technomagic", "When in Anti-personnel Weapon mode, increases all DEF by ??? , and when in Siege Weapon mode, increases ATK by ??? , takes 30% more DMG, and gains Immunity to CC. Recovers 40 MP each time DMG is dealt to an enemy.", true)
.addBlankField(true)
.addField("UT1: Optical Lens - MF002", "[Anti-personnel Laser] Increases DMG by 20% and for 10 sec, increases M.DMG target receives by 25%. [Siege Laser] Increases DMG by 20% and ignores target's P.Block and M.Block.", true)
.addField("UT2: Recording Device KARA-00XX", "[Wide-area Cannon] Increases DMG by 50% and reduces ATK Spd of the target by 100 for 10 sec. [Focused Fire] Reduces Cooldown by 2% upon a Crit Hit and recovers 150 Mana.", true)
.addField("UT3: Ancient Power Source", "[Release Siege Weapon] Increases DMG by 50% and decreases the target's M.DEF by 1% upon a Crit Hit. M.DEF Reduction Effect can be stacked up to 20 times.", true)
.addField("UT4: Drawing of Ancient Research", "[Essence of Technomagic] Increases ATK and DEF boost by 50%. Crit DMG of self is increased by 20%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lakrak') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.d7c7526e.png")
.setTitle("Lakrak\nHand Cannon's Hunter")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Lakrak MK-1", "Gains a 25% chance to obtain a stack of Gunpowder upon attacking. Each stack of Gunpowder increases ATK by 3%, ATK Spd by 30, and DMG to non-Hero enemies by 3%. Gunpowder stacks up to 7 times and cannot be removed.", true)
.addBlankField(true)
.addField("S1: Rapid Fire\nCost: \nCD: ", "Attacks all frontal enemies in a straight line, dealing ??? P.DMG and pushing them back. If the target is not a Hero, deals ??? additional P.DMG and stuns them for 5 sec.", true)
.addField("S2: Smoke Bomb\nCost: \nCD: ", "Increases DMG by 50%, and increases P.DMG target receives by 10% for 10 sec.", true)
.addField("S3: Glue Bomb\nCost: \nCD: ", "Attaches a Glue Bomb to a random enemy that explodes in 3 sec. The explosion deals max ??? P.DMG proportional to enemy's current HP to enemies in range, and inflicts Stun for 3 sec. Upon attaching the Glue Bomb, target is inflicted with Stun for 2 sec.", true)
.addField("S4: Load Cannon", "Each auto attack has a 15% chance of firing a bomb that deals ??? P.DMG to enemies in range and stuns them for 2 sec.", true)
.addBlankField(true)
.addField("UT1: Cudgel Bullet", "[Rapid Fire] Increases DMG by 50%, and increases P.DMG target receives by 10% for 10 sec.", true)
.addField("UT2: Special Gas Mask", "[Smoke Bomb] Reduces Cooldown by 30% and increases blind duration by 1 sec.", true)
.addField("UT3: Goblincraft Special High-Density Gunpowder", "[Glue Bomb] DMG is increased by 50%, and upon Crit Hit, recovers 200 mana.", true)
.addField("UT4: Bada Boom Cannonball", "Reduces Mana of hit enemies by 400. The first strike in a battle will activate [Load Cannon].", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'miruru') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.4b548192.png")
.setTitle("Miruru\nCursed Pirate Empress")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Ultimate Weapon, Leviathan", "Deals P.DMG equal to 100% of ATK to the enemies inflicted by the Boooooom! skill at a 50% chance, and the target takes 20% more P.DMG for 10 seconds.", true)
.addBlankField(true)
.addField("S1: Baaaam!\nCost: \nCD: ", "Deals ??? P.DMG to all enemies and pushes them back.", true)
.addField("S2: Roll Over\nCost: \nCD: ", "Deals ??? P.DMG 3 times to frontal enemies, and each attack has a 100% chance of knocking them down for 2 sec.", true)
.addField("S3: Miruru Pirates!\nCost: \nCD: ", "Attacks a random target and the enemies near it 5 times, dealing a total of ??? P.DMG and reducing their ATK Spd by 400. If the target is not a Hero, deals ??? additional P.DMG.", true)
.addField("S4: Boooooom!", "When dealing a normal attack, shoots additional bullet with a 60% chance of dealing ??? P.DMG to all enemies.", true)
.addBlankField(true)
.addField("UT1: Coin of the Deep", "[Baaam!] Gains Immunity to CC for the skill's duration, and reduces the target's P.Crit Resistance by 200 for 10 sec.", true)
.addField("UT2: Pirate King's Sextant", "[Roll Over] Increases DMG by 4% on every use and recovers 120 MP upon a Crit Hit. This effect stacks up to max 10 times.", true)
.addField("UT3: Miruru Cannonball", "[Miruru Pirates!] DMG is increased by 50%, and skill cooldown is reduced by 12%.", true)
.addField("UT4: Turtle Gunpowder Keg", "[Boooooom] Increases DMG by 50%. Upon activation, increases ATK Spd by 200 for 3 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'mitra') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.8a8de25a.png")
.setTitle("Mitra\nThe Silver Battle Wolf")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Roar of Madness, Velkinoth", "Upon a normal attack, increases own DEF Penetration and ATK Spd by 8. This effect cannot be dispelled, and can be stacked up to max 30 times.", true)
.addBlankField(true)
.addField("S1: Bang! Bang!!\nCost: \nCD: ", "Attacks an enemy 2 times, dealing ??? P.DMG each. Upon Crit Hit, an explosion occurs, dealing ??? extra P.DMG to enemies in range.", true)
.addField("S2: Time to Die!!\nCost: \nCD: ", "For 20 sec, ATK is increased by ??? , and ACC is increased by 300. Each auto attack has a 15% chance of activating 'Bang! Bang!!'.", true)
.addField("S3: Dance with me!!\nCost: \nCD: ", "Sprays gunshot at a random enemy 12 times, dealing a total of ??? P.DMG. Each damage inflicts 1 stack of Mark of Death that cannot be dispelled. Per every stacked Mark of Death, 'Dance with me!!' DMG is increased by 1%.", true)
.addField("S4: You're Next!!", "Each auto attack inflicts a Mark of Death to enemies that cannot be dispelled. When auto attack and 'Bang! Bang!!' hits the target, deals ??? extra P.DMG. Per every stack, skill DMG is increased by 2%. Can be stacked up to 100 times max.", true)
.addBlankField(true)
.addField("UT1: Potential Madness", "[Bang! Bang!!] Increases DMG by 50% and reduces Cooldown by 0.8 sec.", true)
.addField("UT2: Wolf's Barrage Box", "[Time to Die!] Increases Crit DMG by 20% for the skill's duration. HP cannot be reduced below 10% for 3 sec.", true)
.addField("UT3: Wolfhead Mercenary Insignia", "[Dance with me!!] DMG is increased by 20% and per every activation, skill cooldown is reduced by 5%. This effect can be stacked max 8 times.", true)
.addField("UT4: Song of Madness", "[You're Next!!] Increases DMG by 20%. Upon attacking enemies inflicted with 100 or more stacks of Mark of Death, increases own Crit DMG by 2% for 10 sec. Crit DMG boost can be stacked up to max 25 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'oddy') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.3e2158a2.png")
.setTitle("Oddy\nClocksmith of Eternal Life")
.addField("Class", "Mechanic", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Moonshade Countdown, Tempodiana", "Upon using Time Distortion, All allies' skill cooldown is reduced by extra 2 sec, and ATK is increased by 14% for 10 sec.", true)
.addBlankField(true)
.addField("S1: Time Fracture\nCost: \nCD: ", "Deals ??? M.DMG to enemies in a straight line, and inflicts Petrify for 3 sec.", true)
.addField("S2: Time Fragments\nCost: \nCD: ", "Attacks random enemies 6 times, dealing a total of ??? M.DMG. With 50% chance, 'Time Fragments' cooldown resets and consumes no mana for the next single activation.", true)
.addField("S3: Time Distortion\nCost: \nCD: ", "Deals ??? M.DMG to all enemies and increases all allies' ATK Spd by 250 for 15 sec. All allies' skill cooldown is reduced by 50%. 'Time Distortion' is not affected by skill cooldown reduction.", true)
.addField("S4: Clock Magic", "Upon using the skill, next 2 attacks deal ??? additional M.DMG with a 30% chance to petrify the target for 3 sec. This effect activates every 1 sec.", true)
.addBlankField(true)
.addField("UT1: Exquisite Orbment", "[Time Fracture] Gains immunity to CC for the skill's duration, and reduces the target's Mana by 400.", true)
.addField("UT2: Fragment Collection", "[Time Fragments] Has a 25% chance to reset Cooldown and increases DMG by 20%.", true)
.addField("UT3: Threads of Time", "[Time Distortion] DMG is increased by 20% and all allies' negative effects are dispelled.", true)
.addField("UT4: Time Manipulating Clockwork", "[Clock Magic] Increases DMG by 50%. Hit enemies take 10% increased M.DMG for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'rodina') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.c082e650.png")
.setTitle("Rodina\nBlizard's Sniper")
.addField("Class", "Mechanic", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Rodina Custom Rifle Mod.0", "Each attack has a 20% chance of dealing 200% of ATK as extra P.DMG and knocking back the enemy. Afterwards, ACC is increased by 100 for 10 sec. This effect can be stacked up to 3 times max.", true)
.addBlankField(true)
.addField("S1: Penetration Shot\nCost: \nCD: ", "Upon activation, takes up a stance and starts casting. After casting ends, deals ??? P.DMG upon enemies in a straight line. DMG is increased by 150% in proportion to the total casting time. If casting progresses beyond the 3rd stage, knock over enemies.", true)
.addField("S2: Target Aim\nCost: \nCD: ", "Target receives 50% increased damage from this hero. In addition, own ATK is increased by ???.", true)
.addField("S3: Focused Fire\nCost: \nCD: ", "Fires 10 shots at random. Deals ??? DMG upon attack, and per each attack, DMG is increased by 10%.", true)
.addField("S4: Rapid Shot", "Every 10 sec, attacks the target 2 times, dealing a total of ??? P.DMG.", true)
.addBlankField(true)
.addField("UT1: Shock-absorbing Special Guard", "[Penetration Shot] Takes 40% reduced P.DMG and M.DMG for the skill's duration, and upon Critical Hit, increases own ATK by 10% for 10 sec. ATK increase can be stacked up to max 4 times.", true)
.addField("UT2: Crystal Support", "[Target Aim] Changes the target to a random enemy when Rodina's target dies, increasing ATK by 20% for 10 sec.", true)
.addField("UT3: Custom Bullet VII", "[Focused Fire] Increases DMG by 20% and inflicts damage ignoring the target's DEF with the last 2 shots.", true)
.addField("UT4: Gun Encyclopedia", "[Consecutive Shot] Changes the number of targets to 2. Hit enemies have their P.Crit Resistance reduced by 200 for 10 sec.", true)
msg.channel.send({ embed });
break;

//hero wizard info

} else {
if (args[1] === 'aisha') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.5da95c68.png")
.setTitle("Aisha\nThe Violet Princess")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Noble Fate, Mahitra", "Each attack has a 35% chance of dealing 40% of ATK as extra M.DMG.", true)
.addBlankField(true)
.addField("S1: Mystic Barrage\nCost: \nCD: ", "Deals ??? M.DMG to enemies within a small range. Upon a Crit Hit, cooldown is reduced by 1 sec.", true)
.addField("S2: Destruction Ray\nCost: \nCD: ", "Every 0.5 sec, deals ??? M.DMG to enemies in a straight line. After 5 sec, consumes 3% of mana every 0.5 sec while DMG is increased by 100%. Max duration is 10 sec.", true)
.addField("S3: Torrential Rainfall\nCost: \nCD: ", "Deals ??? M.DMG to random enemies for 3 sec, and reduces target's M.DEF by 5%. Can be stacked up to max 5 times.", true)
.addField("S4: Mystic Boost", "Upon a Crit Hit, deals extra ??? M.DMG to the enemy.", true)
.addBlankField(true)
.addField("UT1: Flower of Purple", "[Mystic Barrage] Reduces Cooldown by 1 sec, and for 10 sec, increases M.DMG target receives by 25%.", true)
.addField("UT2: Noble Hand Mirror", "[Destruction Ray] Increases DMG by 50% and recovers 500 MP immediately upon use.", true)
.addField("UT3: Ring of Infinite Mana", "[Torrential Rainfall] DMG is increased by 50% and upon Crit Hit, recovers 30 mana.", true)
.addField("UT4: Eyes of Truth", "[Mystic Boost] Increases DMG by 50%. Upon activation, increases own Crit DMG by 1%. This effect can be stacked up to max 20 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'artemia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.0e2b43ad.png")
.setTitle("Artemia\nEmpress of Light")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Brilliant Praise, Brauxio", "Every 15 sec, creates a Shield for 10 sec that blocks DMG proportional to 200% of own ATK, and ATK is increased by 20%. While the Shield is in effect, gains immunity to CC.", true)
.addBlankField(true)
.addField("S1: Pillar of Light\nCost: \nCD: ", "Places a Pillar of Light on target enemy, dealing a total of ??? M.DMG for 3 sec and reducing enemy ATK by 20% for 10 sec.", true)
.addField("S2: Critical Intensity\nCost: \nCD: ", "Deals ??? M.DMG to frontal enemies in a straight line. This attack's Crit DMG is increased by 100%.", true)
.addField("S3: Light's Judgment\nCost: \nCD: ", "Attacks all enemies 3 times, dealing a total of ??? M.DMG and stunning them for 5 sec. Per each killed enemy with this skill, cooldown is reduced by 30%.", true)
.addField("S4: Blessing of Light", "Each attack has a 50% chance of dealing ??? M.DMG to target and nearby enemies, while Artemia gains 1 stack of Blessing of Light. Blessing of Light can be stacked up to 10 times max. Per every stack, ATK is increased by ??? , DMG dealt to enemies other than heroes is increased by 7% and DMG received from enemies other than heroes is reduced by 3%.", true)
.addBlankField(true)
.addField("UT1: Dignity of Queen", "[Pillar of Light] Reduces Mana Cost by 1 and increases M.DMG target receives by 10% for 10 sec.", true)
.addField("UT2: Queen's Pride", "[Critical Intensity] Gains Immunity to CC and increases DMG by 20%.", true)
.addField("UT3: Crown of Brilliance", "[Light's Judgment] DMG is increased by 20% and upon killing an enemy, recovers 700 mana.", true)
.addField("UT4: Mirror of Blessings", "[Blessings of Light] Increases DMG by 50%, and changes DMG boost to Non-Hero enemies to 8%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'cleo') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.f842664f.png")
.setTitle("Cleo\nSorceress of Purgatory")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: ", "Skill hits deal additional M.DMG equal to 3% of ATK per stack of Ember inflicted on enemies.", true)
.addBlankField(true)
.addField("S1: \nCost: \nCD: ", "Attacks a random enemy 5 times to deal a total of ??? M.DMG. Recovers own Mana by 100 upon a Critical Hit.", true)
.addField("S2: \nCost: \nCD: ", "Attacks the target and the enemies in nearby range, dealing ??? M.DMG and stunning them for 2 sec. Deals ??? additional M.DMG to Bosses.", true)
.addField("S3: \nCost: \nCD: ", "Attacks all enemies 5 times, dealing a total of ??? M.DMG. This attack deals 150% increased Crit DMG.", true)
.addField("S4: ", "Inflicts a stack of Ember upon hitting an enemy. Enemies affected by Ember take ??? M.DMG over 20 seconds. Ember can be stacked up to max 10 times.", true)
.addBlankField(true)
.addField("UT1: ", "Changes target to the enemy with the highest ATK and reduces the target's Mana by 100.", true)
.addField("UT2: ", "Reduces Mana Cost by 1 and increases DMG by 20%.", true)
.addField("UT3: ", "DMG is increased by 20%. Upon Crit Hit on enemies with over 5 stacks of Ember, skill cooldown is reduced by 5%.", true)
.addField("UT4: ", "Ember becomes irremovable and causes the target to take 1% increased M.DMG per stack.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'esker') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.c4d123c7.png")
.setTitle("Esker\nThe Illusion Gambler")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Wanderer's Pleasure, Lu Etrona Dice", "Upon a Critical Skill Hit, increases M.DMG that target receives by 20% for 10 sec and recovers own Mana by 100.", true)
.addBlankField(true)
.addField("S1: This Is My Game\nCost: \nCD: ", "Attacks a random enemy 3 times, dealing ??? M.DMG and stunning it for 3 sec. If the 3 attacks land on the same enemy, deals additional ??? M.DMG that ignores DEF.", true)
.addField("S2: My Turn\nCost: \nCD: ", "Rolls the dice and increases ATK and Crit DMG of 2 random allies by ??? and 7% respectively for 60 sec. This effect can be stacked up to max 10 times, and the number of targets increases by 1 per 1 pip on the rolled dice.", true)
.addField("S3: Shall I Try My Luck?\nCost: \nCD: ", "Attacks all enemies and deals ??? M.DMG, permanently reducing Cooldown of this skill by 2 sec or increasing its DMG by 30%, each with a 50% chance. This effect can be stacked up to max 10 times.", true)
.addField("S4: This Is Not a Trick", "Every 10 sec, increases own ATK by ??? and DEF by ???. This effect can be stacked up to max 10 times.", true)
.addBlankField(true)
.addField("UT1: Mumbo Jumbo Runic Cube", "[This Is My Game] Increases DMG by 20% and the number of hits by 1.", true)
.addField("UT2: Indispensable Chess Piece", "[My Turn] The effect of My Turn becomes irremovable, and additionally grants 30 ATK Spd per stack to the ally with the highest ATK.", true)
.addField("UT3: Old Fishing Rod", "[Shall I Try My Luck?] Reduces Mana Cost by 1 and increases M.DMG target receives by 10% for 10 sec.", true)
.addField("UT4: Shady Chip", "[This Is Not a Trick] Increases ATK and DEF boost by 50%. ATK Spd of self is increased by 20 per stack.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lewisia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.bee67668.png")
.setTitle("Lewisia\nThe Royal Vermilion Blood")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Scarlet Ruler, Dominicia", "If HP is over 50%, ATK is increased by 20%. If HP is under 50%, takes 10% reduced DMG.", true)
.addBlankField(true)
.addField("S1: Blood Orb\nCost: \nCD: ", "Blood Orb", true)
.addField("S2: Blood Zone\nCost: \nCD: ", "Deals ??? M.DMG to target enemy and creates a Blood Zone that lasts for 10 sec around the target. Enemies within the Blood Zone receives ??? M.DMG every 0.5 sec, and M.DEF is reduced by 30%. Per every stacked Blood Curse, DMG is increased by 0.5%. Upon use, consumes 20% of current HP.", true)
.addField("S3: Blood Banquet\nCost: \nCD: ", "Attacks enemies in a straight line 3 times, dealing a total of ??? M.DMG and inflicting Stun for 3 sec. Per every stacked Blood Curse, DMG is increased by 0.5% Upon use, consumes 10% of current HP.", true)
.addField("S4: Blood Dominator", "When HP is 50% or above, ATK is increased by ??? and DEF Pen. is increased by 250. Upon attack, inflicts target with Blood Curse, dealing a total of ??? M.DMG over time for 20 sec, and recovering 10% of DMG dealt from Blood Curse as HP. Blood Curse can be stacked max 100 times, and cannot be dispelled.", true)
.addBlankField(true)
.addField("UT1: Old Silver Cup", "[Blood Orb] Increases DMG by 50% and leaves 5 stacks of Blood Curse on the target.", true)
.addField("UT2: Spell of Bloody Mist", "[Blood Zone] Increases DMG by 20% and the effect duration by 2 sec.", true)
.addField("UT3: Blood of the Ancients", "[Blood Banquet] DMG is increased by 20%, and upon Crit Hit, recovers 400 mana.", true)
.addField("UT4: Red Ring", "[Blood Dominator] Increases DMG of Blood Curse by 50%. Upon attacking enemies inflicted with 100 or more stacks of Blood Curse, increases own ATK by 1% for 10 sec. ATK boost can be stacked up to max 10 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lilia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.a5b9bbe7.png")
.setTitle("Lilia\nThe Daughter of Storm and Sea")
.addField("Class", "Wizard", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Infinite Spring, Cielamaha", "Mana is recovered by 50 per each sec, and upon each ATK there is an 80% chance of dealing 20% of ATK as P.DMG.", true)
.addBlankField(true)
.addField("S1: Aqua Tempest\nCost: \nCD: ", "or 8 sec, summons Aqua Tempest to a random target and enemies in target's range and deals ??? P.DMG every 0.5 sec. If the target is killed, Aqua Tempest is summoned to attack another random target for the remaining time.", true)
.addField("S2: Everlasting Oasis\nCost: \nCD: ", "When activated, turns into the Everlasting Oasis state for 15 sec. During the Everlasting Oasis state, mana recovery rate per sec is increased by 150% and ATK is increased by ???. Additionally, all DEF is increased by ???.", true)
.addField("S3: Celestial Cataract\nCost: \nCD: ", "Throws water drops 15 times to random enemies, dealing a total of ??? P.DMG. Additionally, throws big water drops 5 times to target and other enemies in target's range, dealing ??? P.DMG. Enemies hit by the big water drop are inflicted by Stun for 2 sec. Per each water drop thrown, ??? mana is consumed, and mana consumption rate is increased by ???. Stops use when mana becomes 0.", true)
.addField("S4: Aqua Purification", "Mana recovery upon ATK is fixed, but own ATK is increased by ??? and mana recovery per sec is increased to 120. Per 6 mana recovery per sec, ATK is increased by 1%.", true)
.addBlankField(true)
.addField("UT1: Whisper of Sea", "[Aqua Tempest] Reduces Cooldown by 2.5 sec and enemies inflicted by Aqua Tempest take 10% increased P.DMG.", true)
.addField("UT2: Heart of Flow", "[Everlasting Oasis] The effect cannot be dispelled, and Crit DMG is increased by 20% during skill duration.", true)
.addField("UT3: Bottomless Kettle of Elementals", "[Celestial Cataract] Upon each ATK there is a 7% chance of throwing a big water drop, dealing 100% of ATK as P.DMG and increasing own Crit DMG by 2% for 7 sec.", true)
.addField("UT4: Key of Purity", "[Aqua Purification] Every 10 sec, increases own Crit DMG by 80% and Mana Recovery/Sec by 30% for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lorraine') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.39148b59.png")
.setTitle("Lorraine\nGrand Elidoran Scholar")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: ", "Every 7 sec, deals 40% of ATK as M.DMG to enemies inflicted with Poison, and reduces enemy M.DEF by 10%. Per every stacked Poison, DMG is increased by 20%.", true)
.addBlankField(true)
.addField("S1: \nCost: \nCD: ", "Attacks 3 times at random, dealing ??? M.DMG to enemies in range and inflicting 1 stack of Poison with each attack.", true)
.addField("S2: \nCost: \nCD: ", "Deals ??? M.DMG to enemies in a straight line, stacking 2 Poison and shackling them for 4 sec. After some time, deals a large amount of DMG based on the number of Poison stacks.", true)
.addField("S3: \nCost: \nCD: ", "Deals ??? M.DMG to enemies in range and knocks them down for 3 sec. Enemies inflicted by Poison takes 20% more DMG per every stack.", true)
.addField("S4: ", "When dealing a normal attack, attacks a random enemy 3 times with a 30% chance of inflicting ??? M.DMG and 1 stack of Poison for 20 seconds. Poison inflicts a total of ??? M.DMG over 20 seconds.", true)
.addBlankField(true)
.addField("UT1: ", "Reduces Mana Cost by 1 and Cooldown by 0.8 sec.", true)
.addField("UT2: ", "Reduces Mana Cost by 1 and drains 200 MP from the affected enemy.", true)
.addField("UT3: ", "DMG is increased by 20%. Upon Crit Hit on enemies with over 5 stacks of Poison, skill cooldown is reduced by 4%.", true)
.addField("UT4: ", "Increases activation chance by 20%. Targets take 10% increased M.DMG for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'maria') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.41764970.png")
.setTitle("Maria\nFallen Witch")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: ", "Upon a Critical Hit, reduces Heal Rate of the target by 50% and increases own Crit DMG by 2% for 10 sec. Crit DMG increase effect can be stacked up to max 20 times.", true)
.addBlankField(true)
.addField("S1: \nCost: \nCD: ", "Deals ??? M.DMG to enemies in frontal range and pushes them back. Reduces M.DEF of hit enemies by 20% for 15 sec. Deals additional ??? M.DMG to Non-Hero enemies.", true)
.addField("S2: \nCost: \nCD: ", "Deals ??? M.DMG to 2 enemies, and shackles them for 6 sec. Hit enemies will take ??? M.DMG over 6 sec.", true)
.addField("S3: \nCost: \nCD: ", "Draws in nearby enemies towards the center 5 times and deals a total of ??? M.DMG. The last attack stuns enemies for 3 sec. Deals additional ??? M.DMG to Non-Hero enemies.", true)
.addField("S4: ", "Enemies damaged by Maria has their ATK reduced by ??? for 10 sec.", true)
.addBlankField(true)
.addField("UT1: ", "Gains immunity to CC for the skill's duration, and reduces the target's Mana by 100.", true)
.addField("UT2: ", "Increases DMG by 50% and increases M.Weakness of the affected enemy by 10% for 10 sec.", true)
.addField("UT3: ", "DMG is increased by 20%, and the last attack reduces target's P.DEF and M.DEF by 30% for 7 sec.", true)
.addField("UT4: ", "Every 10 sec, attacks enemies affected by Black Wind, dealing M.DMG equal to 200% of ATK. Increases own ATK by 2% for 20 sec per hit enemy. This effect can be stacked up to max 10 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'nyx') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.46db91a9.png")
.setTitle("Nyx\nDimension Cleaver")
.addField("Class", "Wizard", true)
.addField("Type", "Physical", true)
.addField("Role", "DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Dimensional Key, Magnus Fille", "Auto Attack penetrates through enemies in a straight line and DMG is increased by 30%. Per each blade stack, DMG is increased by an extra 4%.", true)
.addBlankField(true)
.addField("S1: Dimension Blade\nCost: \nCD: ", "Deals ??? P.DMG to target enemies and gains 1 stack of Blade per each hit enemy. The number of target increases depending on the number of Blade stacks. Blade can be stacked up to max 5 times, and lasts for 20 sec.", true)
.addField("S2: Dimension Cleaver\nCost: \nCD: ", "Dispels all positive effects of target enemy and deals ??? P.DMG. Hit enemies take ??? P.DMG for 10 sec, and are knocked down for 3 sec. The number of target increases depending on the number of Blade stacks.", true)
.addField("S3: Infinity Blades\nCost: \nCD: ", "Deals ??? P.DMG to frontal enemies in range, and the final attack deals ??? P.DMG to one enemy, inflicting knockdown for 3 sec. The number of target for the last attack increases depending on the number of Blade stacks.", true)
.addField("S4: Hidden Blade", "Each auto attack fires an additional blade that deals ??? P.DMG. The number of target increases depending on the number of Blade stacks.", true)
.addBlankField(true)
.addField("UT1: Dimensional Magical Circle", "[Dimension Blade] Increases the number of targets by 1, and for 10 sec, reduces the target's P.Block by 200.", true)
.addField("UT2: Sword of Flow Cutting", "[Dimension Cleaver] DMG is increased by 50% and own Crit DMG is increased by 10% for 8 sec per each hit enemies. This effect can be stacked max 5 times.", true)
.addField("UT3: Dimension Stone", "[Infinity Blades] Mana cost is reduced by 1 and DMG is increased by 20%.", true)
.addField("UT4: Spring of Galaxy", "[Hidden Blade] Increases DMG by 50%. Increases own Crit DMG by 1% for 5 sec upon each successful hit. Crit DMG boost can be stacked up to max 20 times.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'ophelia') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.3dc441bc.png")
.setTitle("Ophelia\nPathfinder of Fate")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Cards of Destiny Del Arcana", "Attacks have a 77.7% chance to increase ATK Spd by 20 and Mana Recovery/Sec by 10% for 15 sec. This effect can be stacked up to max 15 times.", true)
.addBlankField(true)
.addField("S1: Card of Death - Carta\nCost: \nCD: ", "Attacks enemy target, dealing ??? M.DMG and inflicting Stun for 3 sec. Consumes the card in possession to inflict additional effects. Upon using the skill, gains the card of [Death]. [Death] - DMG ignores target's DEF and Stun duration increases by 5 sec. [Love] - Deals a total of ??? M.DMG over time for 10 sec and reduces heal rate by 100%. [Fortune] - Skill Cooldown does not take effect.", true)
.addField("S2: Card of Love - Elliciad\nCost: \nCD: ", "Increases ATK by ??? for 12 sec and Mana Recovery/Sec by 100%. Consumes a card in possession to gain an additional effect according to the card type. Gains [Love] card upon use. [Death] - DEF Penetration increases by 600 for the duration of skill and gains immunity to CC for 6 sec. [Love] - The effect applies to all allies. [Luck] - Cooldown does not apply.", true)
.addField("S3: Card of Fortune - Vellekia\nCost: \nCD: ", "Attacks the target and the enemies near it to deal ??? M.DMG. This attack cannot miss and deals 100% increased Crit DMG. Gains [Luck] card upon use. [Death] - Crit DMG increases by 120%. [Love] - Removes all positive effects from enemies in range and silences them for 2 sec. [Luck] - Cooldown does not apply. Recovers 1 orb of Mana.", true)
.addField("S4: Pathfinder of Fate", "All allies' ATK is increased by ??? , and Crit Chance is increased by 100. Ophelia gains additional effect according to the card in possession. [Death] - ATK is increased by 30%. [Love] - Per each sec, heals 7% of max HP. [Fortune] - M.Dodge Chance is increased by 200.", true)
.addBlankField(true)
.addField("UT1: Strange Card", "[Card of Death - Carta] Increases DMG by 50%, and upon killing an enemy, recovers Mana by 1000.", true)
.addField("UT2: Elliciad's Heart", "[Card of Love - Elliciad] Dispels Negative Effects of the target and all skill cooldown are decreased by 6%.", true)
.addField("UT3: Coin of Fortune", "[Card of Fortune - Vellekia] Mana cost is reduced by 1 and DMG is increased by 20%.", true)
.addField("UT4: Fate Tying Thread", "[Pathfinder of Fate] Upon acquiring a card, increases DMG to Non-Hero enemies by 10% and takes 20% reduced DMG for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'pavel') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.86b1f6ba.png")
.setTitle("Pavel\nWizard of Ice Dragon")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Sub-DPS", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Dragon Hearts, Andarta Andraste", "Every 15 sec, deals 160% of ATK as M.DMG to 2 random enemies and inflicts Frost. Enemies already inflicted with Frost will become inflicted with Freeze for 5 sec.", true)
.addBlankField(true)
.addField("S1: Wedge of Cold Snap\nCost: \nCD: ", "Deal ??? M.DMG to the targeted enemy and inflict Freeze for 5 sec. If any enemies are inflicted with Frost, deal DMG and inflict Freeze to them as well.", true)
.addField("S2: Ice Spear\nCost: \nCD: ", "Attacks random enemies 5 times, dealing ??? M.DMG and inflicting Frost. When attacking enemies inflicted with Frost, creates an additional spear that deals extra half DMG. Additional spears do not inflict Frost. Enemies inflicted with Freeze take 50% increased DMG.", true)
.addField("S3: Icy Conquest\nCost: \nCD: ", "Deals ??? M.DMG to all enemies. Enemies inflicted with Frost becomes inflicted with Freeze for 3 sec. Enemies inflicted with Freeze take 100% increased DMG.", true)
.addField("S4: Chill of Early Dawn", "Deals ??? M.DMG to 3 enemies every 15 sec and inflicts Frost on them to reduce their ATK Spd by 100 for 8 sec.", true)
.addBlankField(true)
.addField("UT1: Source of Snow", "[Wedge of Cold Snap] Increases DMG by 20% and upon casting, increases CC ACC by 400 for 10 sec.", true)
.addField("UT2: Frozen Brooch", "[Ice Spear] Reduces Cooldown by 8% and has a 40% chance to freeze the enemy for 1 sec upon damaging the enemy in Frost state. This effect is not applied to additionally created spears.", true)
.addField("UT3: Glacial Heart", "[Icy Conquest] DMG is increased by 50% and Freeze duration is increased by 1 sec.", true)
.addField("UT4: Ice Dragon's Heart", "[Chill of Early Dawn] Increases the number of targets by 1. Upon a Critical Hit, recovers own Mana by 100.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'veronica') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.7496a7e5.png")
.setTitle("Veronica\nThe Eye of Discernment")
.addField("Class", "Wizard", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Infinite Charter, Accordio", "Changes the max number of stacks for Top Financier's Knowledge to 9 and gains additional Experience stack every 14 sec.", true)
.addBlankField(true)
.addField("S1: This will hurt a little!\nCost: \nCD: ", "Deals ??? M.DMG to enemy and surrounding enemies within range, and inflicts Stun for 2 sec.", true)
.addField("S2: Let me help you.\nCost: \nCD: ", "Grants a Rune to all allies to increase their ATK by ??? and any DMG to bosses by 15% for 10 sec.", true)
.addField("S3: Get out of my sight!\nCost: \nCD: ", "Attacks target and enemies in a wide surrounding area 2 times to deal ??? M.DMG, and knocks them down for 5 sec. Hit enemies take 30% increased M.DMG for 10 sec.", true)
.addField("S4: Top Financier's Knowledge", "Increases ATK of all allies by ??? and gains Experience stack upon using a Skill. When 3 Experiences are stacked, gains Top Financier's Knowledge that increases own Crit DMG by 30% and the effects of all active Skills by 10%. The Top Financier's Knowledge effect is irremovable and stacks up to 5 times.", true)
.addBlankField(true)
.addField("UT1: Guild Code of Conduct", "[This Will Hurt A Little!] increases DMG by 50%, and increases DMG to Bosses by 2% for 30 sec upon Critical Hit. This effect stacks up to max 10 times.", true)
.addField("UT2: Pen Point of Firm Will", "[Let Me Help You] Reduces Mana Cost by 1 and increases skill duration by 1.6 sec.", true)
.addField("UT3: Seal of Guild Manager", "[Get out of my sight!] DMG is increased by 20% and per each enemy hit, cooldown is reduced by 10%.", true)
.addField("UT4: Guild Accounts Report", "[Top Financier's Knowledge] Increases ATK boost by 50%. Upon gaining Top Financier's Knowledge, increases Crit DMG of all allies by 20% for 10 sec.", true)
msg.channel.send({ embed });
break;

//hero priest info

} else {
if (args[1] === 'baudouin') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.e7d77d1b.png")
.setTitle("Baudouin\nHoly Ruffian")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: God's Book, Genesis", "Increases the casting speed of all skills, and upon every skill use, increases ATK by 2% and DEF by 2% for all allies. This effect can stack up to 7 times.", true)
.addBlankField(true)
.addField("S1: Holy Nova\nCost: \nCD: ", "Targets the ally with the lowest HP and allies nearby to heal ??? HP. Deals ??? M.DMG to enemies near the target, and reduces enemy ATK Spd by 25% for 10 sec.", true)
.addField("S2: Spear of Light\nCost: \nCD: ", "Deals ??? M.DMG, inflicts knockback, and shackles the target enemy for 6 sec. Enemies inflicted by shackle take 25% increased M.DMG while the effect lasts.", true)
.addField("S3: Holy Sanctuary\nCost: \nCD: ", "Grants Invincibility to all allies for 7 sec and heals ??? HP for the duration of skill.", true)
.addField("S4: Training of God", "Each attack has a 20% chance of dealing ??? M.DMG to target and inflicting stun for 1.5 sec.", true)
.addBlankField(true)
.addField("UT1: Old Holy Grail", "[Holy Nova] Reduces Mana Cost by 1 and increases Heal Rate by 20%.", true)
.addField("UT2: Last Chapter of the Bible", "[Spear of Light] Gains Immunity to CC for the skill's duration and increases M.Weakness of the target by 10% for 10 sec.", true)
.addField("UT3: Well-Worn Rosary", "[Holy Sanctuary] ATK is increased by 25% for the duration of skill, and recovers 120 Mana per sec.", true)
.addField("UT4: Scorched Journal", "[Training of God] Increases Stun duration by 0.5 sec. Hit enemies take 25% increased M.DMG for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'cassandra') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.49d5cc5a.png")
.setTitle("Cassandra\nTempting Winds")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Aurelian Whisper, Goldbreeze", "Skill hits increase M.DMG that the target takes by 10% for 10 sec. Every 8 sec, heals the ally with the lowest HP by 200% of own ATK and dispels all negative effects from the ally.", true)
.addBlankField(true)
.addField("S1: Softly~\nCost: \nCD: ", "Heals all allies by ??? HP and deals ??? M.DMG to all enemies. Hit enemies are inflicted by Silence for 2 sec.", true)
.addField("S2: Fiercely!\nCost: \nCD: ", "For 15 sec, all allies' ATK is increased by ??? and Crit Chance is increased by 700.", true)
.addField("S3: Tempting Wave\nCost: \nCD: ", "Deals ??? M.DMG to an enemy with the highest ATK. If this skill is used in Arena, inflicts Charm on the target for 7 sec. If this skill is used outside the Arena, enemy takes 25% increased M.DMG. Charmed enemies cannot use any skills, and deals auto attack to own allies.", true)
.addField("S4: Gentle Touch", "At the start of each battle, reduces mana cost by 2 orbs for a single skill, and all allies' DEF is increased by ??? for 5 sec.", true)
.addBlankField(true)
.addField("UT1: Feather Decoration of Crimson Bird", "[Softly~] Increases Heal Rate by 50% and the duration of Silence by 0.8 sec.", true)
.addField("UT2: Fancy Pendant", "[Fiercely!] Increases duration by 5 sec and additionally increases Crit DMG by 20%.", true)
.addField("UT3: Golden Fragrance", "[Tempting Wave] Skill cooldown is reduced by 30% and Charm duration is increased by 1 sec.", true)
.addField("UT4: Reed Diffuser of Seduction", "[Gentle Touch] DEF boost becomes irremovable. All allies have their All Crit Resistance increased by 100 for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'frey') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.9aee9258.png")
.setTitle("Frey\nPriestess of Light")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("Need UW?", "Yes", true)
.addBlankField(true)
.addField("UW: God's Authority, Rosmerta", "Every 8 sec, heals 4 allies with the lowest HP by 80% of own ATK, and increases Crit Chance by 300 and Crit DMG by 20% for the ally with the highest ATK for 8 sec.", true)
.addBlankField(true)
.addField("S1: Miraculous Light\nCost: 2\nCD: 8s", "Heals ??? HP of an ally with the lowest HP.", true)
.addField("S2: Blessings of Light\nCost: 2\nCD: 15s", "Cast a shield on all allies that absorbs ??? DMG for 12 sec. While the shield is in effect, gain Immunity to CC.", true)
.addField("S3: Heaven's Vengeance\nCost: 3\nCD: 22s", "Attacks the target and its nearby enemies 6 times, dealing up to ??? M.DMG. Hit targets will be blinded for 6 sec, and take 25% increased DMG.", true)
.addField("S4: Goddess Grace", "Increases M.DEF of 1 ally with the lowest HP by ??? for 10 sec every 15 sec.", true)
.addBlankField(true)
.addField("UT1: Angel's Egg", "[Miraculous Light] Increases Heal Rate by 50% and target becomes Immune to DMG for 1 sec.", true)
.addField("UT2: Miraculous Medal", "[Blessings of Light] Increases shield amount by 50% and recovers 100 Mana every second for 4 sec.", true)
.addField("UT3: Forgotten Arbiter's Feather", "[Heaven's Vengeance] Target takes 20% increased M.DMG for 10 sec, and Blind duration is increased by 1 sec.", true)
.addField("UT4: Angelic Advent", "[Goddess Grace] Upon activation, dispels all negative effects from the target and increases the target's Heal Rate by 20% for the duration of skill.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'juno') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.f2394092.png")
.setTitle("Juno\nThe Chef of Heroes")
.addField("Class", "Priest", true)
.addField("Type", "Physical", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Hundred-Flavor Banquet, Tempora Fyrr", "Every 10 sec, gains 1 stack of [Excellent Ingredient] and recovers 1 orb of Mana.", true)
.addBlankField(true)
.addField("S1: Best Dish", "Removes negative effects from all allies, heals a total of ??? HP over 7 second(s), and increases DEF by ???. When there are 2 stacks or more [Excellent Ingredient], consumes 2 stacks to double the DEF Boost.", true)
.addField("S1-1: Juno's Spicy Special", "Removes positive effects from all enemies, deals a total of ??? P.DMG over 10 second(s), and enemies take 20% increased P.DMG. When there are 2 stacks or more [Excellent Ingredient], consumes 2 stacks to double the P.DMG that enemies take.", true)
.addField("S2: Power-up", "Casts a shield on the ally with the lowest HP that absorbs ??? DMG and grants Immunity to CC along with 1 orb of Mana. When there are 2 stacks or more [Excellent Ingredient], consumes 2 stacks to double the Mana Recovery.", true)
.addField("S2-1: Help Yourself, Then Get Lost!", "Attacks the target and nearby enemies around it, dealing ??? P.DMG and reducing their Mana by 1 orb. If the target is not a Hero, inflicts ??? additional P.DMG that ignores DEF. When there are 2 stacks or more [Excellent Ingredient], consumes 2 stacks to double the Mana Reduction.", true)
.addField("S3: Cook from Hell", "Removes all negative effects from self, heals ??? HP, and transforms into a Cook from Hell. [Best Dish] and [Power-up] are changed to [Juno's Spicy Special] and [Help Yourself, Then Get Lost!] respectively. Gains 1 stack of irremovable [Excellent Ingredient]. When the skill is used again, transforms into a Cook from Heaven.", true)
.addField("S4: Open for Business!", "While transformed into a Cook from Heaven, increases DEF of all allies by ??? and their heal rate by 15%. While transformed into a Cook from Hell, reduces DEF of all enemies by ???% and their heal rate by 20%.", true)
.addBlankField(true)
.addField("UT1: Colorful Ladle", "[Best Dish] Increases Heal Rate by 20% and gains 1 stack of [Excellent Ingredient] after use. [Juno's Spicy Special] Increases DMG by 20%, and reduces the target's Crit Chance by 250 for 10 sec.", true)
.addField("UT2: The Jar of Happiness", "[Power-up] Increases Mana Recovery Rate by 50% and reduces Cooldown of the target's active skills by 12%. [Help Yourself, Then Get Lost!] Increases Mana Reduction by 50% and stuns the target for 1 second.", true)
.addField("UT3: Suspicious Seasoning Set", "[Cook from Hell] Applies healing effects to all allies and reduces Cooldown of Cook from Hell by 1 second.", true)
.addField("UT4: Apron of Honor", "[Open for Business!] Increases DEF boost by 50%. While under [Cook from Hell], reduces ATK Spd of all enemies by 100.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'kaulah') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.441cfadb.png")
.setTitle("Kaulah\nShaman of Lightning")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("Need UW?", "No", true)
.addBlankField(true)
.addField("UW: ", "Grants a 10% chance to deal M.DMG equal to 100% of ATK and inflicts Electric Shock on 2 random enemies through a normal attack. If the target is already inflicted with Electric Shock, stuns the target for 2 sec.", true)
.addBlankField(true)
.addField("S1: ", "Drops 5 lightning bolts upon a random enemy, dealing ??? M.DMG and inflicting Electrify. Electrified enemy is stunned for 3 sec.", true)
.addField("S2: ", "HP of all allies is healed by ??? for 5 sec.", true)
.addField("S3: ", "For 15 sec, all allies' ATK is increased by ??? , and ATK Spd is increased by 350.", true)
.addField("S4: ", "Deals ??? M.DMG to 4 enemies every 15 sec, inflicts Electric Shock for 20 sec, and stuns them for 1 sec upon a Critical Hit. Enemies under Electric Shock take a total of ??? M.DMG over 20 sec.", true)
.addBlankField(true)
.addField("UT1: ", "Reduces the target's Heal Rate by 30% and the target's Mana by 100 for 10 sec.", true)
.addField("UT2: ", "Absorbs DMG of 200% ATK and creates a shield that grants Immunity to CC for 1 sec when used upon allies with full HP.", true)
.addField("UT3: ", "Mana cost is reduced by 1, and Crit DMG 20% boost effect is added.", true)
.addField("UT4: ", "Reduces the target's ATK Spd by 250 and increases M.DMG it takes by 10% for 10 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'laias') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.437e1ed4.png")
.setTitle("Laias\n")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Flowing Circle, Eltoirre", "Increases the Heal Rate of all allies by 8% and M.DEF by 5% of Laias's ATK. Every 5 sec, heals the ally with the lowest HP by 100% of own ATK.", true)
.addBlankField(true)
.addField("S1: Healing Droplets", "Heals HP of all allies by ??? and reduces M.DMG they take by 15% for 5 sec. If the target's HP is below 50%, Heal Rate and the amount of reduced M.DMG the target takes increases by x 1.5.", true)
.addField("S2: Bubble Shield", "For 15 sec, casts a shield that blocks ??? DMG on the ally with the lowest HP. While the shield is in effect, it grants Immunity to CC, increases the ATK by ??? , and heals ??? HP every sec for the ally.", true)
.addField("S3: Festival of the Flow", "Deals ??? M.DMG to nearby enemies and knocks them down. All allies, excluding self, recovers 2 orbs of mana. Afterwards, for 12 sec, creates a whirlpool that deals ??? M.DMG to random enemies and knocks them down for 2 sec.", true)
.addField("S4: Blessing of the Water Dragon", "All allies' M.DEF is increased by ??? , and M.Crit Hit Resistance is increased by 250.", true)
.addBlankField(true)
.addField("UT1: Water Dragon Scale", "[Healing Droplets] Increases Heal Rate by 50%, and for 10 sec, increases the target's M.Block by 200.", true)
.addField("UT2: Oasis Crystal", "[Bubble Shield] Reduces Cooldown by 12% and dispels Negative Effects from the target.", true)
.addField("UT3: Papyrus of the Flow", "[Festival of the Flow] Whirlpool effect targets 2 enemies and all allies recover additional 500 mana.", true)
.addField("UT4: Tear of God Dragon", "[Blessing of the Water Dragon] Increases DEF boost by 50%. All allies recover Mana by 40 every sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lavril') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.aaa36f0b.png")
.setTitle("Lavril\nLovely Evil Spirit")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Void Soul, Dunn Nemecia", "Upon using a skill, gains [Void Soul] for 1 sec and dodges all attacks. This effect activates once every 10 sec. Increases Crit DMG of the ally under Soul Link by 30%.", true)
.addBlankField(true)
.addField("S1: G-go Away!", "Deals ??? M.DMG to the enemy and reduces its Crit Resistance by 300 for 10 sec. Hit enemies become affected by Lavril's Ectoplasm for 5 sec, taking ??? M.DMG every 0.5 sec. Every time an enemy takes DMG from this skill, HP of all allies is healed by 5% of the DMG dealt.", true)
.addField("S2: Bear Up...!", "Heals the HP of an ally with the highest ATK by ??? and heals additional ??? HP every 1 sec for 15 sec. Increases Crit DMG of the ally by 50% + 15% of Lavril's Crit DMG for 15 sec. [You Scare Me...!] becomes available for 5 sec after casting this skill.", true)
.addField("S2-1: You Scare Me...!", "Deals ??? M.DMG to the enemy and reduces its ATK Spd by 250 for 15 sec while increasing M.DMG it takes by 25%.", true)
.addField("S3: Leave Me Alone...!", "Swirls a Spectral Tornado in a wide range to the front, dealing ??? M.DMG every 0.5 sec for 5 sec. Each hit reduces ATK of hit enemies by 3% for 5 sec, and increases M.DMG they take by 3%. This effect can be stacked up to max 15 times.", true)
.addField("S4: Together Forever...", "At the beginning of the first battle, forms a Soul Link with an ally with the highest ATK. This effect cannot be dispelled. The ally bound by Soul Link has their ATK increased by ??? and recovers ??? Mana every second.", true)
.addBlankField(true)
.addField("UT1: Tarot Card of the Moon", "[G-go Away!] Increase DMG by 50% and reduces hit enemies' Heal Rate by 20%.", true)
.addField("UT2: Fairy's Scent", "[Bear Up...!] Increases Heal Rate by 50% and Crit DMG by 20%. [You Scare Me...!] Increases DMG by 50% and reduces target's M.DEF by 10%.", true)
.addField("UT3: Blessed Protection", "[Leave Me Alone...!] Skill duration is increased by 1 sec and each hit increases M.DMG the target receives by 1%.", true)
.addField("UT4: Tear of Soul", "[Together Forever…] Increases ATK boost by 50%. Allies under Soul Link have their Heal Rate increased by 10%.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'leo') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.7bc39c1f.png")
.setTitle("Leo\nEternal Scribe")
.addField("Class", "Priest", true)
.addField("Type", "Physical", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Phoenix Quill, Belisa", "At the beginning of each battle, increases P.DEF and M.DEF by 20%, ATK Spd by 200 for 15 sec, and adds an additional effect to the first skill used. Rune of Frailty - Increases Crit Chance by 500. Rune of Healing - Dispels CC inflicted on caster before the skill is cast. Rune of Silence - Increases Silence duration by 1 sec.", true)
.addBlankField(true)
.addField("S1: Rune of Frailty", "Engraves a rune on the target, dealing up to ??? P.DMG that ignores DEF based on missing HP and reducing their P.DEF by 50% for 8 sec.", true)
.addField("S2: Rune of Healing", "Heals ??? HP of all allies.", true)
.addField("S3: Rune of Silence", "Deals ??? P.DMG to all enemies, and dispels all positive effects. Inflicts Silences on target for 3 sec.    ", true)
.addField("S4: Rune of Protection", "Every 10 sec, engraves a rune upon the ally with the lowest HP and recovers a total of ??? HP for 10 sec.    ", true)
.addBlankField(true)
.addField("UT1: Ancient Letter Encyclopedia - First Volume", "Ancient Letter Encyclopedia - First Volume", "[Rune of Frailty] Becomes irremovable and increases DMG by 20%.", true)
.addField("UT2: Ink of Vitality", "[Rune of Healing] Increases Heal Rate by 50% and P.Crit Resistance of allies by 100 for 10 sec.", true)
.addField("UT3: Scroll of Memories", "[Rune of Silence] Target takes 15% increased DMG for 10 sec, and target's CC resistance is reduced by 120.", true)
.addField("UT4: Golden Magnifier", "[Rune of Protection] Increases the number of targets by 1. Targets have their ATK Spd increased by 200 for the duration of skill.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'lucias') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.2184fb7f.png")
.setTitle("Lucias\nSaint of Blessings")
.addField("Class", "Priest", true)
.addField("Type", "Physical", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: Blessing of Light, Benedicia", "For 30 sec after the battle starts, allies take 10% reduced P.DMG while having their ATK Spd increased by 100 and DMG to Non-Hero enemies increased by 6%.", true)
.addBlankField(true)
.addField("S1: Path of Blessings", "Heals 4 allies with the lowest HP by ??? and targets take ???% reduced P.DMG for 7 sec.", true)
.addField("S2: Zone of Faith", "Sets up the [Zone of Faith] at the own location for 4 sec. Increases ATK of allies in [Zone of Faith] by ??? and dispels negative effects on them continuously. Heals allies in area by ??? every second. Deals P.DMG of ??? on enemies within [Zone of Faith] every second, and stuns them for ??? sec.", true)
.addField("S3: Stigmata", "Increases P.Dodge of all allies by 250 and their ATK by ??? for 15 sec. Effects will be dispelled when the self dies. Normal attacks deal additional P.DMG of ??? to targets for 15 sec, and increases the P.DMG taken by target by 25% for 5 sec.", true)
.addField("S4: Holy Sacrifice", "Casting Path of Blessings and Zone of Faith consumes 20% of self's current HP. Upon healing an ally with these spells, the amount of healing is increased by ??? and the target gains ??? additional DEF for 10 sec.", true)
.addBlankField(true)
.addField("UT1: Book of Blessings", "[Path of Blessings] Reduces Mana Cost by 1 and Cooldown by 12%.", true)
.addField("UT2: Dice of Remembrance", "[Zone of Faith] Reduces Mana Cost by 1, and reduces Mana of enemies within range by 200 per sec.", true)
.addField("UT3: Guidance of Morning Star", "[Stigmata] The effect of Stigmata cannot be dispelled by skill removing the positive effects. Reduces Cooldown by 12%.", true)
.addField("UT4: Sword of Sacrifice", "[Holy Sacrifice] Increases DEF boost by 50%. Targets have their ATK increased by 8% for 5 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'may') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.b9addf5a.png")
.setTitle("May\nThe Girl Dreaming of Riches")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: The Box of Fragrance, Etelia", "Reduces Cooldown of self's active Skills by 1.4 sec, and increases the ATK Spd Boost and DEF Penetration Boost from [Take Anything!] by 20.", true)
.addBlankField(true)
.addField("S1: Take anything!", "All allies' ATK is increased by ??? for 120 sec, and randomly grants one of the following effects: 1. DEF Penetration 70 up, 2. Atk Spd 100 up, 3. Instant Mana recovery by 500. All effects other than Mana Recovery can be stacked up to 5 times max.", true)
.addField("S2: Cheer up!", "All allies' HP is healed by ??? , and per each sec, each ally recovers 1% of their max HP for 10 sec. There is a 10% chance the heal rate doubles.", true)
.addField("S3: Not for sale!", "Attacks a random target and other enemies in range 3 times, dealing a total of ??? M.DMG and inflicting Stun for 4 sec. There is a 10% chance that the skill range, DMG, and Stun duration are doubled.", true)
.addField("S4: Take this!", "Every 15 sec, deals ??? M.DMG to 4 random enemies, and randomly inflicts one of the following: 1. ??? M.DMG over time for 10 sec, 2. Stun for 2 sec, 3. Freeze for 5 sec.", true)
.addBlankField(true)
.addField("UT1: Healthy Potion Set", "[Take Anything!] Reduces Mana Cost by 1, and increases the target's M.DEF by 2% for 20 sec. This effect can be stacked up to max 8 times.", true)
.addField("UT2: Sweet Piece of Cake", "[Cheer Up!] Increases Heal Rate by 20% and the chance of double Heal Rate by 20% additionally.", true)
.addField("UT3: Crystal Ball from Unknown Origin", "[Not for sale!] DMG is increased by 20% and attacks the enemy 1 more time.", true)
.addField("UT4: Dangerous Snack Set", "[Take This!] Changes the target to all enemies. Upon activation, all allies recover 200 Mana.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'mediana') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.43298a2a.png")
.setTitle("Mediana\nThe Dangerous Doctor")
.addField("Class", "Priest", true)
.addField("Type", "Physical", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Merciful Threat, Phistonia", "Special Poison DMG is increased by 40% and targets inflicted by Poison take 30% of Mediana's ATK as extra P.DMG when hit by allies other than Mediana. Additional P.DMG effect activates only once per 1 sec.", true)
.addBlankField(true)
.addField("S1: Healing Salve", "Heals all allies by ??? and makes them immune to the next single hit of DMG.", true)
.addField("S2: Special Water Cannon", "Fires a water cannon in a frontal direction, healing allies in range of ??? HP every 0.5 sec, and dealing ??? P.DMG to the enemy.", true)
.addField("S3: Strengthening Potion", "Injects the ally with the highest ATK with a strengthening potion, increasing their ATK by 20%+ ??? of Mediana's ATK and keeping their HP from falling below 5%.", true)
.addField("S4: Mediana's Special Poison", "Increases all allies' ATK by ??? and P.Crit Resistance by 200. Upon attack, injects the enemy with a special poison that deals ??? P.DMG over time for 5 sec and reduces P.Crit Resistance by 200.", true)
.addBlankField(true)
.addField("UT1: Strangely Healthy Injection", "[Healing Salve] Increases Heal Rate by 50%, and for 10 sec, increases the targets' Crit DMG by 20%.", true)
.addField("UT2: Special Potion of Double Reaction", "[Special Water Cannon] Increases Resistance by 30% and reduces Cooldown by 12%.", true)
.addField("UT3: Mysterious Potion", "[Strengthening Potion] dispels target's negative effects and target gains immunity to CC for 2 sec.", true)
.addField("UT4: Old Medical Report", "[Mediana's Special Poison] Increases ATK boost by 50%. All allies take 4% reduced P.DMG.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'rephy') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.4b264e8b.png")
.setTitle("Rephy\nSpiritual Guide")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "No", true)
.addBlankField(true)
.addField("UW: God's Lamp, Kurulati", "Every 20 sec, an ally with the lowest HP turns invisible for 5 sec. An invisible ally becomes immune to P.DMG, and HP will not drop below 1%. MP Recovery per sec is increased to 120%.", true)
.addBlankField(true)
.addField("S1: Healing Soul", "Heals 4 allies with lowest HP 10% of Max HP, and heals extra ??? HP over 8 sec. This effect cannot be dispelled.", true)
.addField("S2: Salvation", "Dispels all negative effects. M.DEF is increased by ??? for 20 sec.", true)
.addField("S3: Soulrush", "Deals a total of ??? M.DMG over 10 attacks to enemies within range. Hit enemies' ATK Spd is reduced by 25%.", true)
.addField("S4: Spiritual Tuning", "Every 7 sec, an ally with the lowest Hp recovers 1 orb of mana and ??? HP.", true)
.addBlankField(true)
.addField("UT1: Melody of Blue Star", "[Healing Soul] Reduces Mana Cost by 1, and increases the target's CC ACC by 100 for the duration of skill.", true)
.addField("UT2: Seed of Birth", "[Salvation] Increases M.DEF Boost by 50% and reduces Cooldown by 12%.", true)
.addField("UT3: Haven of Souls", "[Soulrush] Mana cost is reduced by 1 and heals all allies' HP by 8% of DMG.", true)
.addField("UT4: Blue Star Candy", "[Spiritual Tuning] Increases Heal Rate by 50%. Targets have their ATK increased by 20% for 4 sec.", true)
msg.channel.send({ embed });
break;
} else {
if (args[1] === 'shea') {
const embed = new Discord.RichEmbed()
.setThumbnail("http://maskofgoblin.com/img/hero.709141d5.png")
.setTitle("Shea\nAria of Fantasy")
.addField("Class", "Priest", true)
.addField("Type", "Magic", true)
.addField("Role", "Support", true)
.addField("UW?", "Yes", true)
.addBlankField(true)
.addField("UW: Charming Melody , Schwanheite", "When Trance is stacked, all skill cooldown is reduced by 10%, and recovers own Mana by 200.", true)
.addBlankField(true)
.addField("S1: Green Nature's Melody", "Heals a total of ??? HP for all allies over 8 times, and all allies take reduced DMG by 35% for 8 seconds. If used when Trance is stacked up to 3, this skill's Heal rate increases by 100% and changes the DMG Reduction Effect to 70%.", true)
.addField("S2: Blue Wind's Song", "Recovers a total of ??? MP for all allies over 8 times, heals ??? HP for a target with max MP, and reduces the duration of CC by 50% for 8 seconds. If used when Trance is stacked up to 3, this skill's MP Recovery and Heal rate increase by 50% and all allies will gain Immunity to CC for 8 seconds.", true)
.addField("S3: Dance of Red Passion", "Deals a total of ??? M.DMG. to all enemies over 8 times, and increases ATK of all allies by ??? for 8 seconds. If used when Trance is stacked up to 3, this skill's DMG and ATK Boost increase by 100%, and all enemies' buffs are continuously canceled.", true)
.addField("S4: Trance", "At the end of the skill, 1 more Trance is stacked. Trance can be stacked up to max 3 times, and if the skill is used when Trance is stacked up to 3, consumes the stack to heal ??? HP of all allies. Trance cannot be dispelled.", true)
.addBlankField(true)
.addField("UT1: Flower of Life", "[Green Nature's Melody] Increases Heal Rate by 50%, and for 8 sec, increases the target's CC Resist by 100.", true)
.addField("UT2: Windy Flower", "[Blue Wind's Song] Increases ACC by 250 for 8 sec and recovers 160 MP every time an ally uses a skill.", true)
.addField("UT3: Fairy's Crown", "[Dance of Red Passion] Upon activation, enemies are inflicted with Silence for 2 sec, and all allies' Crit DMG is increased by 20% for the duration of skill.", true)
.addField("UT4: Dream of Mira", "[Trance] Upon gaining Trance, increases own ATK by 20% and ATK Spd by 100 for 5 sec.", true)
msg.channel.send({ embed });
break;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})
bot.login(process.env.BOT_TOKEN);
