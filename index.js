const { Client, Attachment } = require('discord.js');
const bot = new Client();
const token = 'NTg4NTgwOTU2Mzk5NDY4NTQ0.XQHhHw.QFRn4_uDD83rOmIHITQTYWOz71k';
const PREFIX = '!';
const usedCommandRecently = new Set();

bot.on('ready', () => {
    console.log('this bot is online');
    bot.user.setActivity('Kings Raid');
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "general");
    if (!channel) return;
    channel.send(`Welcome to Vagabond, ${member}, please read the rules in the #readme-rules channel`)
})

bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'info':
            msg.delete(3000)
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send('created by Your Majesty 【﻿Ｒｅｉｎｆｌｙ】')
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;

        //heroes emoji

        case 'aisha':
            msg.delete(3000)
            const attachment = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/aisha.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'annette':
            msg.delete(3000)
            const attachment2 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/annette.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment2);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'chrisha':
            msg.delete(3000)
            const attachment3 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/chrisha.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment3);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'cleo':
            msg.delete(3000)
            const attachment4 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/cleo.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment4);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'crow':
            msg.delete(3000)
            const attachment5 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crow.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment5);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'crowmit':
            msg.delete(3000)
            const attachment6 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crowmit.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment6);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'dimael':
            msg.delete(3000)
            const attachment7 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/dimael.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment7);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'erze':
            msg.delete(3000)
            const attachment8 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/erze.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment8);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'ezekiel':
            msg.delete(3000)
            const attachment9 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ezekiel.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment9);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'eztheo':
            msg.delete(3000)
            const attachment10 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/eztheo.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment10);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'frey':
            msg.delete(3000)
            const attachment11 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/frey.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment11);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'gladi':
            msg.delete(3000)
            const attachment12 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/gladi.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment12);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'jane':
            msg.delete(3000)
            const attachment13 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/jane.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment13);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'juno':
            msg.delete(3000)
            const attachment14 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/juno.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment14);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'kara':
            msg.delete(3000)
            const attachment15 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kara.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment15);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'kasel':
            msg.delete(3000)
            const attachment16 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kasel.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment16);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'laias':
            msg.delete(3000)
            const attachment17 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/laias.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment17);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'leo':
            msg.delete(3000)
            const attachment18 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/leo.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment18);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'lilia':
            msg.delete(3000)
            const attachment19 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lilia.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment19);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'lucias':
            msg.delete(3000)
            const attachment20 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lucias.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment20);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'luna':
            msg.delete(3000)
            const attachment21 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/luna.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment21);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'may':
            msg.delete(3000)
            const attachment22 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/may.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment22);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'medi':
            msg.delete(3000)
            const attachment23 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/medi.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment23);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'miri':
            msg.delete(3000)
            const attachment24 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/miri.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment24);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'mirufall':
            msg.delete(3000)
            const attachment25 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirufall.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment25);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'mirusad':
            msg.delete(3000)
            const attachment26 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirusad.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment26);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'mitrash':
            msg.delete(3000)
            const attachment27 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mitrash.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment27);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'naila':
            msg.delete(3000)
            const attachment28 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/naila.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment28);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'nera':
            msg.delete(3000)
            const attachment29 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/nera.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment29);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'numbchase':
            msg.delete(3000)
            const attachment30 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/numbchase.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment30);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'oddy':
            msg.delete(3000)
            const attachment31 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/oddy.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment31);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'ophel':
            msg.delete(3000)
            const attachment32 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ophel.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment32);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'pavel':
            msg.delete(3000)
            const attachment33 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pavel.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment33);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'pris':
            msg.delete(3000)
            const attachment34 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pris.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment34);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'reina':
            msg.delete(3000)
            const attachment35 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/reina.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment35);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'rephy':
            msg.delete(3000)
            const attachment36 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rephy.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment36);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'rodi':
            msg.delete(3000)
            const attachment37 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rodi.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment37);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'scarchase':
            msg.delete(3000)
            const attachment38 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarchase.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment38);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'scarno':
            msg.delete(3000)
            const attachment39 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarno.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment39);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'scaryes':
            msg.delete(3000)
            const attachment40 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scaryes.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment40);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'seria':
            msg.delete(3000)
            const attachment41 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/seria.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment41);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'sham':
            msg.delete(3000)
            const attachment42 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sham.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment42);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'shea':
            msg.delete(3000)
            const attachment43 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/shea.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment43);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'sonia':
            msg.delete(3000)
            const attachment44 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sonia.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment44);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'theo':
            msg.delete(3000)
            const attachment45 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/theo.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment45);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'boys':
            msg.delete(3000)
            const attachment46 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/boys.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment46);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'girls':
            msg.delete(3000)
            const attachment47 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/girls.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment47);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'vero':
            msg.delete(3000)
            const attachment48 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/vero.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment48);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'viska':
            msg.delete(3000)
            const attachment49 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/viska.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment49);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'yanne':
            msg.delete(3000)
            const attachment50 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/yanne.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment50);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'zafir':
            msg.delete(3000)
            const attachment51 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/zafir.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment51);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'rein':
            msg.delete(3000)
            const attachment52 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rein.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment52);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'orty':
            msg.delete(3000)
            const attachment53 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/orty.png')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment53);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;
        case 'heroes':
            msg.delete(3000)
            const attachment54 = new Attachment('https://media.giphy.com/media/ii2tzta1FtNH9ISJ7Z/giphy.gif')
            if (usedCommandRecently.has(msg.author.id)) {
                msg.reply("wait 5s");
            } else {
                msg.channel.send(attachment54);
                usedCommandRecently.add(msg.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(msg.author.id);
                }, 5000);
            }
            break;

        //heroes info

        case 'hero':
            if (args[1] === 'kasel') {
                const embed = new Discord.RichEmbed()
                    .addTitle('Hero Information')
                    .addField('http://www.kingsraid.wiki/index.php?title=Kasel')
                    .addThumbnail('http://maskofgoblin.com/img/hero.ee6ef94e.png')
                msg.channel.sendEmbed(embed);
            }

    }
})
bot.login(token);
bot.login(process.env.BOT_TOKEN);
