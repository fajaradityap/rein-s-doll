const { Client, Attachment } = require('discord.js');
const bot = new Client();
const token = 'NTg4NTgwOTU2Mzk5NDY4NTQ0.XQHhHw.QFRn4_uDD83rOmIHITQTYWOz71k';

bot.on('ready', () => {
    console.log('this bot is online');
    bot.user.setActivity('Kings Raid');
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "general");
    if (!channel) return;
    channel.send(`Welcome to Vagabond, ${member}, please read the rules in the rules channel`)
})

bot.on('message', msg => {
    let args = msg.content.split(" ");
    switch (args[0]) {
        case 'info':
            msg.delete(1000)
            msg.channel.send('created by Your Majesty 【﻿Ｒｅｉｎｆｌｙ】')
            break;
        case 'aisha':
            msg.delete(1000)
            const attachment = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/aisha.png')
            msg.channel.send(attachment);
            break;
        case 'annette':
            msg.delete(1000)
            const attachment2 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/annette.png')
            msg.channel.send(attachment2);
            break;
        case 'chrisha':
            msg.delete(1000)
            const attachment3 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/chrisha.png')
            msg.channel.send(attachment3);
            break;
        case 'cleo':
            msg.delete(1000)
            const attachment4 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/cleo.png')
            msg.channel.send(attachment4);
            break;
        case 'crow':
            msg.delete(1000)
            const attachment5 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crow.png')
            msg.channel.send(attachment5);
            break;
        case 'crowmit':
            msg.delete(1000)
            const attachment6 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/crowmit.png')
            msg.channel.send(attachment6);
            break;
        case 'dimael':
            msg.delete(1000)
            const attachment7 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/dimael.png')
            msg.channel.send(attachment7);
            break;
        case 'erze':
            msg.delete(1000)
            const attachment8 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/erze.png')
            msg.channel.send(attachment8);
            break;
        case 'ezekiel':
            msg.delete(1000)
            const attachment9 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ezekiel.png')
            msg.channel.send(attachment9);
            break;
        case 'eztheo':
            msg.delete(1000)
            const attachment10 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/eztheo.png')
            msg.channel.send(attachment10);
            break;
        case 'frey':
            msg.delete(1000)
            const attachment11 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/frey.png')
            msg.channel.send(attachment11);
            break;
        case 'gladi':
            msg.delete(1000)
            const attachment12 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/gladi.png')
            msg.channel.send(attachment12);
            break;
        case 'jane':
            msg.delete(1000)
            const attachment13 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/jane.png')
            msg.channel.send(attachment13);
            break;
        case 'juno':
            msg.delete(1000)
            const attachment14 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/juno.png')
            msg.channel.send(attachment14);
            break;
        case 'kara':
            msg.delete(1000)
            const attachment15 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kara.png')
            msg.channel.send(attachment15);
            break;
        case 'kasel':
            msg.delete(1000)
            const attachment16 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/kasel.png')
            msg.channel.send(attachment16);
            break;
        case 'laias':
            msg.delete(1000)
            const attachment17 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/laias.png')
            msg.channel.send(attachment17);
            break;
        case 'leo':
            msg.delete(1000)
            const attachment18 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/leo.png')
            msg.channel.send(attachment18);
            break;
        case 'lilia':
            msg.delete(1000)
            const attachment19 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lilia.png')
            msg.channel.send(attachment19);
            break;
        case 'lucias':
            msg.delete(1000)
            const attachment20 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/lucias.png')
            msg.channel.send(attachment20);
            break;
        case 'luna':
            msg.delete(1000)
            const attachment21 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/luna.png')
            msg.channel.send(attachment21);
            break;
        case 'may':
            msg.delete(1000)
            const attachment22 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/may.png')
            msg.channel.send(attachment22);
            break;
        case 'medi':
            msg.delete(1000)
            const attachment23 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/medi.png')
            msg.channel.send(attachment23);
            break;
        case 'miri':
            msg.delete(1000)
            const attachment24 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/miri.png')
            msg.channel.send(attachment24);
            break;
        case 'mirufall':
            msg.delete(1000)
            const attachment25 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirufall.png')
            msg.channel.send(attachment25);
            break;
        case 'mirusad':
            msg.delete(1000)
            const attachment26 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mirusad.png')
            msg.channel.send(attachment26);
            break;
        case 'mitrash':
            msg.delete(1000)
            const attachment27 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/mitrash.png')
            msg.channel.send(attachment27);
            break;
        case 'naila':
            msg.delete(1000)
            const attachment28 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/naila.png')
            msg.channel.send(attachment28);
            break;
        case 'nera':
            msg.delete(1000)
            const attachment29 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/nera.png')
            msg.channel.send(attachment29);
            break;
        case 'numbchase':
            msg.delete(1000)
            const attachment30 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/numbchase.png')
            msg.channel.send(attachment30);
            break;
        case 'oddy':
            msg.delete(1000)
            const attachment31 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/oddy.png')
            msg.channel.send(attachment31);
            break;
        case 'ophel':
            msg.delete(1000)
            const attachment32 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/ophel.png')
            msg.channel.send(attachment32);
            break;
        case 'pavel':
            msg.delete(1000)
            const attachment33 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pavel.png')
            msg.channel.send(attachment33);
            break;
        case 'pris':
            msg.delete(1000)
            const attachment34 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/pris.png')
            msg.channel.send(attachment34);
            break;
        case 'reina':
            msg.delete(1000)
            const attachment35 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/reina.png')
            msg.channel.send(attachment35);
            break;
        case 'rephy':
            msg.delete(1000)
            const attachment36 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rephy.png')
            msg.channel.send(attachment36);
            break;
        case 'rodi':
            msg.delete(1000)
            const attachment37 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rodi.png')
            msg.channel.send(attachment37);
            break;
        case 'scarchase':
            msg.delete(1000)
            const attachment38 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarchase.png')
            msg.channel.send(attachment38);
            break;
        case 'scarno':
            msg.delete(1000)
            const attachment39 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scarno.png')
            msg.channel.send(attachment39);
            break;
        case 'scaryes':
            msg.delete(1000)
            const attachment40 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/scaryes.png')
            msg.channel.send(attachment40);
            break;
        case 'seria':
            msg.delete(1000)
            const attachment41 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/seria.png')
            msg.channel.send(attachment41);
            break;
        case 'sham':
            msg.delete(1000)
            const attachment42 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sham.png')
            msg.channel.send(attachment42);
            break;
        case 'shea':
            msg.delete(1000)
            const attachment43 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/shea.png')
            msg.channel.send(attachment43);
            break;
        case 'sonia':
            msg.delete(1000)
            const attachment44 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/sonia.png')
            msg.channel.send(attachment44);
            break;
        case 'theo':
            msg.delete(1000)
            const attachment45 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/theo.png')
            msg.channel.send(attachment45);
            break;
        case 'boys':
            msg.delete(1000)
            const attachment46 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/boys.png')
            msg.channel.send(attachment46);
            break;
        case 'girls':
            msg.delete(1000)
            const attachment47 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/girls.png')
            msg.channel.send(attachment47);
            break;
        case 'vero':
            msg.delete(1000)
            const attachment48 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/vero.png')
            msg.channel.send(attachment48);
            break;
        case 'viska':
            msg.delete(1000)
            const attachment49 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/viska.png')
            msg.channel.send(attachment49);
            break;
        case 'yanne':
            msg.delete(1000)
            const attachment50 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/yanne.png')
            msg.channel.send(attachment50);
            break;
        case 'zafir':
            msg.delete(1000)
            const attachment51 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/zafir.png')
            msg.channel.send(attachment51);
            break;
        case 'rein':
            msg.delete(1000)
            const attachment52 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/rein.png')
            msg.channel.send(attachment52);
            break;
        case 'orty':
            msg.delete(1000)
            const attachment53 = new Attachment('https://raw.githubusercontent.com/fajaradityap/rein-s-doll/master/KR%20emoji/orty.png')
            msg.channel.send(attachment53);
            break;
        case 'heroes':
            msg.delete(1000)
            const attachment54 = new Attachment('https://giphy.com/gifs/ii2tzta1FtNH9ISJ7Z/html5')
            msg.channel.send(attachment54);
            break;
    }
})
bot.login(token);
bot.login(process.env.BOT_TOKEN);
