//KALO ADA YG EROR CHAT ME wa.me/6285879466965
//thx too di menu jan di apus🌌

const { 
  WAConnection: _WAConnection,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  GroupSettingChange,
  ChatModification,
  MessageType
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
// Module
const { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const {dafontDown,dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins,getRandom,start, info, success, close } = require('./lib/functions')
const {  fetchJson,  getBase64 } = require('./lib/fetcher')
const { yta, ytv,upload } = require('./lib/ytdl')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { exif } = require('./lib/exif')
const setGelud = require('./lib/gameGelud.js')
const util = require('util');
const translate = require("@vitalets/google-translate-api");
const axios = require("axios")
const fs = require('fs')
const qrcode = require('qrcode')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const googleIt = require('google-it')
const yts = require( 'yt-search')
const request = require('request');
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg') 
const F = require('./lib/lomte')
const { antiSpam } = require('./lib/antispam')
//==========≠===========================//
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/antifirtex.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const { addVote, delVote } = require('./database/vote.js')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadilomte')
const chatban = JSON.parse(fs.readFileSync('./src/banchat.json'))
const _limit = JSON.parse(fs.readFileSync('./Ramdani/limit.json'))
const _leveling = JSON.parse(fs.readFileSync('./Ramdani/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./Ramdani/level.json'))
const antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'))
const a = '```'
//======≠≠================≠================//
const { 
bayarLimit, 
limitAdd
} = require('./lib/limitatm.js') 
const {
getLevelingXp,
getLevelingLevel,
getLevelingId,
addLevelingXp,
addLevelingLevel,
addLevelingId
} = require('./lib/level.js')


//=============Ganti Disini===========//
prefix = '#' //ganti prefixny serah luh
//kalo mau multi prefix hapus => (//) di baris 410 biar merahnya ilang 
const namabot = '✤𝙨𝙢𝙞𝙡𝙚𝙗𝙤𝙩𝙯✤' //ganti nama bot luh
const namaowner = '꧁𝙧𝙖𝙢𝙙𝙖𝙣𝙞𝙜𝙖𝙣𝙯꧂' //ganti nama luh
fake = `❍⧐ ✤𝙨𝙢𝙞𝙡𝙚𝙗𝙤𝙩𝙯✤
❍⧐ ✤𝙘𝙧𝙚𝙖𝙩𝙚𝙙 𝙗𝙮✤
❍⧐ ✤𝙧𝙖𝙢𝙙𝙖𝙣𝙞𝙜𝙖𝙣𝙯✤` //ganti serah luh
limitawal = 25 //serah luh
eror1 = 'tidak ada'
eror2 = 'tidak ada'
const tod = fs.readFileSync("./ramdanii.jpg"); //ganti imagenya 
const ownerNumber = [`6285879466965@s.whatsapp.net`] //ganti pakek nomer lu
const ownerContact = [`6285879466965`] // Nomor Owner
const premium = ["6285879466965@s.whatsapp.net"] //ganti pakek nomer lu
//https://ziyy.herokuapp.com/api/
thumb = fs.readFileSync("./stik/thumb.jpeg"); //ganti imagenya
//=============end settings==========//
const vcard2 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Ramdani\n' 
            + 'ORG: Pengembang SmileBotz;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285879466965:+6285879466965\n' 
            + 'END:VCARD' 

//=============JANGAN DI GANTI==========//
hit_today = []
recording = false
composing = false
LeysKey = 'dappakntlll'
blocked = [] 
join_ky = [] 
antilinkgc = false; 
antilink2gc = false; 
nsfwgc = false;  
bisa = false; 
levelinggc = false; 
welcomegc = false; 
bangc = false; 
ban = [] 
ky_ttt = []  
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"] 
//===========================//

baterai = {
battery: "" || "Tidak terdeteksi",
isCharge: "" || false
}
function addMetadata(packname, author) {
if (!packname) packname = `${config.packname}`; if (!author) author = ` ${config.author}`;
author = author.replace(/[^a-zA-Z0-9]/g, '');
let name = `${author}_${packname}`
if (fs.existsSync(`./src/sticker/${name}.exif`)) {
return `./src/sticker/${name}.exif`
}
const json = {
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
let len = JSON.stringify(json).length
let last
if (len > 256) {
len = len - 256
bytes.unshift(0x01)
} else {
bytes.unshift(0x00)
}
if (len < 16) {
last = len.toString(16)
last = "0" + len
} else {
last = len.toString(16)
}
const buf2 = Buffer.from(last, "hex")
const buf3 = Buffer.from(bytes)
const buf4 = Buffer.from(JSON.stringify(json))
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
fs.writeFile(`./src/sticker/${name}.exif`, buffer, (err) => {
return `./src/sticker/${name}.exif`
}
)
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}       
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
 function jsonformat(string) {
return JSON.stringify(string, null, 2)
}

function convertBalanceToString(angka) {
var balancenyeini = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}
function randomString(length){
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
let str = '';
lengt = length || 9
for (var i = 0; i < length; i++) {
str += chars[Math.floor(Math.random() * 65)];
}
return str
}
//==============stikcmd==========//
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return _scommand[position].chats
}
}
const checkSCommand = (id) => {
let status = false
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
status = true
}
})
return status
}
//=================================//
async function starts() {
const Ramdani = new WAConnection()
Ramdani.logger.level = 'warn'
Ramdani.version = [2, 2119, 6] 
console.log(color(`
╔═══╗╔═══╗╔═╗╔═╗╔═══╗╔═══╗╔═╗─╔╗╔══╗
║╔═╗║║╔═╗║║║╚╝║║╚╗╔╗║║╔═╗║║║╚╗║║╚╣─╝
║╚═╝║║║─║║║╔╗╔╗║─║║║║║║─║║║╔╗╚╝║─║║─
║╔╗╔╝║╚═╝║║║║║║║─║║║║║╚═╝║║║╚╗║║─║║─
║║║╚╗║╔═╗║║║║║║║╔╝╚╝║║╔═╗║║║─║║║╔╣─╗
╚╝╚═╝╚╝─╚╝╚╝╚╝╚╝╚═══╝╚╝─╚╝╚╝─╚═╝╚══╝
`,`purple`)) 
	console.log(color(`╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║═╣║║╔╣║║║║║═╣
║║║║═╣╚╣╚╣║║║║║═╣
╚══╩═╩═╩═╩═╩╩╩╩═╝`,`blue`)) 
console.log(color(`╔═❰ ꧁𝙞𝙣𝙛𝙤 𝙤𝙬𝙣𝙚𝙧꧂ ❱══⧐`,`green`)) 
console.log(color(`║┣❥ 𝙣𝙖𝙢𝙖`,`green`), color(`:`,`red`), color(`ᴀᴋʜᴡᴀɴ ʀᴀᴍᴅᴀɴɪ`,`yellow`))
console.log(color(`║┣❥ 𝙣𝙤𝙢𝙚𝙧`,`green`), color(`:`,`red`), color(`6285879466965`,`yellow`))
console.log(color(`║┣❥ 𝙜𝙚𝙣𝙙𝙚𝙧`,`green`), color(`:`,`red`), color(`ʟᴀᴋɪ ʟᴀᴋɪ`,`yellow`))
console.log(color(`║┣❥ 𝙖𝙨𝙠𝙤𝙩`,`green`), color(`:`,`red`), color(`ʙᴏʏᴏʟᴀʟɪ`,`yellow`)) 
console.log(color(`║┣❥ 𝙝𝙤𝙗𝙞`,`green`), color(`:`,`red`), color(`ɴɢᴇʙᴏᴛ`,`yellow`)) 
console.log(color(`║┣❥ 𝙪𝙢𝙪𝙧`,`green`), color(`:`,`red`), color(`13`,`yellow`))
console.log(color(`║┣❥ 𝙠𝙚𝙡𝙖𝙨`,`green`), color(`:`,`red`), color(`8`,`yellow`))
console.log(color(`┗━═══❍════❍════❍⧐`,`green`)) 
console.log(color(`╔═❰ ꧁THANKS TOO꧂ ❱══⧐
║┣❥Ramdani
║┣❥Franky
┗━═══❍════❍════❍⧐`,`orange`)) //gosah apus anj
Ramdani.on('qr', () => {
console.log(color('[','purple'), color('!','blue'), color(']','purple'), color(' Scan qrnya kak Ramdani'))
})
fs.existsSync('./akhwan.json') && Ramdani.loadAuthInfo('./akhwan.json')
Ramdani.on('𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠', () => {
start('2', '𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠...')
})
Ramdani.on('open', () => {
success('2', '༄𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙᭄')
}) 
await Ramdani.connect({timeoutMs: 30*1000})
fs.writeFileSync('./akhwan.json', JSON.stringify(Ramdani.base64EncodedAuthInfo(), null, '\t'))
Ramdani.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
let keynye = m.key
let c = Ramdani.chats.get(keynye.remoteJid)
let a = c.messages.dict[`${keynye.id}|${keynye.fromMe ? 1: 0}`]
let contennye = Ramdani.generateForwardMessageContent(a, false)
})
Ramdani.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await Ramdani.getProfilePicture(mem)
} catch (e) {
pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
pp_grup = await Ramdani.getProfilePicture(anu.jid)
} catch (e) {
pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
if (anu.action == 'demote') {
mdata = await Ramdani.groupMetadata(anu.jid)
member = mdata.participants.length
num = anu.participants[0]
anu_user = Ramdani.contacts[mem]
teks = `Selamat Untuk @${num.split('@')[0]}\nAnda Telah Turun Pangkat, Tadinya Admin Sekarang Member`
bbuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Turun Pangkat&pp=${pp_user}&bg=${pp_grup}`)
Ramdani.sendMessage(mdata.id, bbuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
if (anu.action == 'promote') {
mdata = await Ramdani.groupMetadata(anu.jid)
member = mdata.participants.length
num = anu.participants[0]
anu_user = Ramdani.contacts[mem]
teks = `Selamat Kepada @${num.split('@')[0]}\nAnda Telah Naik Pangkat, Dari Member Menjadi Admin`
bbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURIComponent(anu_user.notify)}&member=${member}&pesan=${encodeURIComponent(anu_user.notify)} Naik Pangkat&pp=${pp_user}&bg=${pp_grup}`)
Ramdani.sendMessage(mdata.id, bbuuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
 if (anu.action == 'add') {
mdata = await Ramdani.groupMetadata(anu.jid)
member = mdata.participants.length
num = anu.participants[0]
anu_user = Ramdani.contacts[mem]
teks = `╔═══ ❰ 「 *WELCOME* 」❱ ═══
║ *@${num.split('@')[0]}*     
║ INTRO      
║ *┣❥ Nama :*      
║ *┣❥ Umur :*    
║ *┣❥ Askot :*       
║ *┣❥ Gender :*     
║ *┣❥ Hoby :*      
╚════ ⸨ *${mdata.subject}* ⸩ ═══`
bbbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
Ramdani.sendMessage(mdata.id, bbbuuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
if (anu.action == 'remove') {
mdata = await Ramdani.groupMetadata(anu.jid)
num = anu.participants[0]
anu_user = Ramdani.contacts[mem]
member = mdata.participants.length
out = `Sayonara @${num.split('@')[0]} we will miss you`
bbbbuuuuffff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
Ramdani.sendMessage(mdata.id, bbbbuuuuffff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
Ramdani.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
// ANTI CALL
Ramdani.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log("call dari "+ callerId)
ban.push(callerId)
Ramdani.sendMessage(callerId, `Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/+6285879466965?text=Bukain+Blocknya+Bang`, MessageType.text)
await sleep(5000)
blocked.push(callerId)
await Ramdani.blockUser(callerId, "add") // Block user
})
Ramdani.on("CB:action,,battery", json => {
const battery = json[2][0][1].value
const persenbat = parseInt(battery)
baterai.battery = `${persenbat}%`
baterai.isCharge = json[2][0][1].live
}) 
Ramdani.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            m = simple.smsg(Ramdani, mek)
            global.ky_ttt
            global.join_ky
            global.prefix
			global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const basreng = from.endsWith('@g.us')
			const botmek = basreng ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[botmek] != undefined ? Ramdani.contacts[botmek].vname || Ramdani.contacts[botmek].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const cmod = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
	//     const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/' 
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			///button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {
				wait: '𝚝𝚞𝚗𝚐𝚐𝚞 𝚜𝚎𝚋𝚎𝚗𝚝𝚊𝚛....',
				error: {
					stick: ' 𝚐𝚊𝚐𝚊𝚕, 𝚝𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝚜𝚊𝚊𝚝 𝚖𝚎𝚗𝚐𝚔𝚘𝚗𝚟𝚎𝚛𝚜𝚒 𝚐𝚊𝚖𝚋𝚊𝚛 𝚔𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛',
					Iv: ' 𝚕𝚒𝚗𝚔 𝚢𝚊𝚗𝚐 𝚊𝚗𝚍𝚊 𝚔𝚒𝚛𝚒𝚖 𝚝𝚒𝚍𝚊𝚔 𝚟𝚊𝚕𝚒𝚍!'
				},
				only: {
					group: '𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗𝚒 𝚑𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚍𝚊𝚕𝚊𝚖 𝚐𝚛𝚘𝚞𝚙!',
                    groupP: '𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗𝚒 𝚑𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚌𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚝𝚎!',
					benned: '𝚖𝚊𝚊𝚏 𝚊𝚗𝚍𝚊 𝚜𝚞𝚍𝚊𝚑 𝚝𝚎𝚛𝚋𝚊𝚗𝚗𝚎𝚍',
					owner: '𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗𝚒 𝚑𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚘𝚕𝚎𝚑 𝚘𝚠𝚗𝚎𝚛!',
					admin: '𝚙𝚎𝚛𝚒𝚗𝚝𝚊𝚑 𝚒𝚗𝚒 𝚑𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚘𝚕𝚎𝚑 𝚊𝚍𝚖𝚒𝚗 𝚐𝚛𝚘𝚞𝚙! ',
					Badmin: '𝚙𝚎𝚛𝚒𝚗𝚝𝚊𝚑 𝚒𝚗𝚒 𝚑𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔𝚊 𝚋𝚘𝚝 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝚊𝚍𝚖𝚒𝚗! ',
					premium: '𝚔𝚑𝚞𝚜𝚞𝚜 𝚞𝚜𝚎𝚛 𝚙𝚛𝚎𝚖𝚒𝚞𝚖, 𝚖𝚘 𝚋𝚞𝚢? 𝚌𝚑𝚊𝚝 𝚘𝚠𝚗𝚎𝚛 wa.me/6285879466965',
					enesfewe: '𝚖𝚘𝚍𝚎 𝚗𝚜𝚏𝚠 𝚋𝚎𝚕𝚞𝚖 𝚍𝚒𝚊𝚔𝚝𝚒𝚏𝚔𝚊𝚗', 
				}
			}
			const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./Ramdani/limit.json', JSON.stringify(_limit))
            }
            }
            const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
            const botNumber = Ramdani.user.jid
            const tebakkk = ['tebak4','tebak7','tebak10']
            const tebakk = tebakkk[Math.floor(Math.random() * (tebakkk.length))]
            const tebakl = ['🎀','✨','🎰','🎁','🛶','☢️','🍇','🍈','🍉','🍊','🍋','🍌','🎃','🥇','🎗️','🚮','🔈','🎑','🥞','🏺','🏛️','🍑','🍍','🥒','🥐','🗼','⛺','🌄','🏙️','🎡','💈','🚉','🌌','🍬']
const tebaks = tebakl[Math.floor(Math.random() * (tebakl.length))]
            const fernazer1 = ['1','2','3','4','5','6','7','8','9']
            const fernazer2 = ['1','2','3','4','5','6','7','8','9']
            const fernazer3 = fernazer1[Math.floor(Math.random() * (fernazer1.length))]
            const fernazer4 = fernazer2[Math.floor(Math.random() * (fernazer2.length))] 
		   const Ramdani1 = ['1','2','3','4','5','6','7']
           const Ramdani3 = Ramdani1[Math.floor(Math.random() * (Ramdani1.length))]
		    const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
			const totalchat = await Ramdani.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const akhwangans =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus Dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai t','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : Menghargai seriusnya seseorang.','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, Diluupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','JaDilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan','Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seaDil-aDilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
		    const yekan = akhwangans[Math.floor(Math.random() * akhwangans.length)]
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const tescuk = ["0@s.whatsapp.net"]
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			//===================⛋=================//
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isGroup = from.endsWith('@g.us')
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isVote = isGroup ? voting.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiLink2 = isGroup ? antilink2.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isPrem = premium.includes(sender)
			const isBanChat = chatban.includes(from)
	        if (isBanChat && !isOwner) return
	        const isLevelingOn = isGroup ? _leveling.includes(from) : false
			Ramdani.chatRead(from)
			if (!composing) {
Ramdani.updatePresence(from, Presence.composing)
}
if (!recording) {
Ramdani.updatePresence(from, Presence.recording) 
}
			//====≠=======================================//
			
		var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
//=======hari======//
        switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}
//=====bulan=====//
         switch(bulan1) {
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break;
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break;
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break;
}
var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
			
			const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = '𝚠𝚊𝚔𝚝𝚞 𝚝𝚎𝚗𝚐𝚊𝚑 𝚖𝚊𝚕𝚊𝚖🌃'; break;
                case 1: waktoo = '𝚠𝚊𝚔𝚝𝚞 𝚝𝚎𝚗𝚐𝚊𝚑 𝚖𝚊𝚕𝚊𝚖🌃'; break;
                case 2: waktoo = '𝚠𝚊𝚔𝚝𝚞 𝚍𝚒𝚗𝚒 𝚑𝚊𝚛𝚒🌌’'; break;
                case 3: waktoo = '𝚠𝚊𝚔𝚝𝚞 𝚍𝚒𝚗𝚒 𝚑𝚊𝚛𝚒🌌'; break;
                case 4: waktoo = '𝚜𝚞𝚋𝚞𝚑🏙️,'; break;
                case 5: waktoo = '𝚜𝚞𝚋𝚞𝚑🏙️'; break;
                case 6: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔🌅'; break;
                case 7: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔🌅'; break;
                case 8: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔🌅'; break;
                case 9: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔🌅'; break;
                case 10: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔🌅'; break;
                case 11: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔☀️'; break;
                case 12: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔☀️'; break;
                case 13: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔☀️'; break;
                case 14: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔☀️'; break;
                case 15: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔🌇'; break;
                case 16: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔🌇'; break;
                case 17: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔🌇–'; break;
                case 18: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔🌇˜'; break;
                case 19: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔🌇'; break;
                case 20: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖🌃'; break;
                case 21: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖🌃'; break;
                case 22: waktoo = '𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖🌃'; break;
                case 23: waktoo = '𝚝𝚎𝚗𝚐𝚊𝚑 𝚖𝚊𝚕𝚊𝚖🌃'; break;
            }
            const tampilUcapan = '' + waktoo;
           
          
         const gege = new Date().getTime();
			var asee = new Date();
                        var waktoo = asee.getHours();
                        switch(waktoou){
                case 0: waktoou = `thumbnail7`; break; 
                case 1: waktoou = `thumbnail7`; break;
                case 2: waktoou = `thumbnaill`; break;
                case 3: waktoou = `thumbnaill`; break;
                case 4: waktoou = `thumbnaill`; break;
                case 5: waktoou = `thumbnaill`; break;
                case 6: waktoou = `thumbnail4`; break;
                case 7: waktoou = `thumbnail4`; break;
                case 8: waktoou = `thumbnail4`; break;
                case 9: waktoou = `thumbnail4`; break;
                case 10: waktoou = `thumbnail4`; break;
                case 11: waktoou = `thumbnail5`; break;
                case 12: waktoou = `thumbnail5`; break;
                case 13: waktoou = `thumbnail5`; break;
                case 14: waktoou = `thumbnail5`; break;
                case 15: waktoou = `thumbnail6`; break;
                case 16: waktoou = `thumbnail6`; break;
                case 17: waktoou = `thumbnail6`; break;
                case 18: waktoou = `thumbnail6`; break;
                case 19: waktoou = `thumbnail6`; break;
                case 20: waktoou = `thumbnail7`; break;
                case 21: waktoou = `thumbnail7`; break;
                case 22: waktoou = `thumbnail7`; break;
                case 23: waktoou = `thumbnail7`; break;
            }
            const tampilImage = '' + waktoou;
        
				//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`;break;
                case 1: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`;break;
                case 2: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`;break;
                case 3: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 4: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 5: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 6: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 7: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 8: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 9: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 10: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚙𝚊𝚐𝚒 𝚔𝚊𝚔 ${pushname}🌅`;break;
                case 11: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔 ${pushname}☀️`; break;
                case 12: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔 ${pushname}☀️`; break;
                case 13: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔 ${pushname}☀️`; break;
                case 14: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚒𝚊𝚗𝚐 𝚔𝚊𝚔 ${pushname}☀️`;break;
                case 15: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔 ${pushname}🌇`;break;
                case 16: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔 ${pushname}🌇`;break;
                case 17: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚜𝚘𝚛𝚎 𝚔𝚊𝚔 ${pushname}🌇`;break;
                case 18: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌚`;break;
                case 19: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`;break;
                case 20: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃 `;break;
                case 21: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`; break;
                case 22: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃`; break;
                case 23: waktoonyabro = `𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚊𝚕𝚊𝚖 ${pushname}🌃 `;break;
            }
            const ucapanFakereply = '' + waktoonyabro;
         let locale = 'id'
       
       //================fakereply========//
 //======Fake lokasi=====//
const floc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
remoteJid: `0@s.whatsapp.net`, 
message: { 
liveLocationMessage: {
title:`fake`,
caption: `${fake}`,
thumbnail: fs.readFileSync(`./${tampilImage}.jpg`)} 
}}}
const floc = {
key: { participant: "0@s.whatsapp.net" },
message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
};
//===================//

//======fake video====//
const fvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
},
message: {
videoMessage: {
title: fake,
h: `𝐬𝐦𝐢𝐥𝐞𝐛𝐨𝐭𝐳\n𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲\n𝐫𝐚𝐦𝐝𝐚𝐧𝐢𝐠𝐚𝐧𝐳`,
seconds: "0",
caption: fake,
jpegThumbnail: fs.readFileSync('./Ramdani.jpg'),
},
},
};
//====================//

//======fake image======//
   const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `*${namabot}*\n*BY ${namaowner}*`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`)} } }
//====================//

//======fake toko======//
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`) }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const ftoko2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`) }, 'title': `*${namabot}*\n*Created By*\n*${namaowner}*`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
//====================//

//======fake kontak======//
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
//====================//
const katalog = (teks) => {
             res = Ramdani.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 2021, "message": teks, "footerText": "*SMILEBOTZ", "thumbnail": thumb, "surface": 'CATALOG' }}, {quoted:floc2})
             Ramdani.relayWAMessage(res)
        }
const fkatalog = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net",
},
orderMessage: { 
itemCount: 0, 
message: `𝐬𝐦𝐢𝐥𝐞𝐛𝐨𝐭𝐳`, 
footerText: `ᴄʀᴇᴀᴛᴇᴅ\n ʙʏ ʀᴀᴍᴅᴀɴɪ`,
thumbnail: fs.readFileSync(`./${tampilImage}.jpg`), 
surface: 'CATALOG', 
} 
} 
//======fake troli======//
const ftroli = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "6289523258649-1604595598@g.us",
},
message: {
orderMessage: {
itemCount: 10,
status: 200,
thumbnail: thumb,
surface: 200,
message: fake,
orderTitle: "SMILEBOTZ",
sellerJid: "0@s.whatsapp.net",
},
},
contextInfo: { forwardingScore: 999, isForwarded: true },
sendEphemeral: true,
};
//====================//

//======fake group======//
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`)}},
};
const fgc2 = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`)}},
};
//====================//
  
   
    
    const flink = {
      key: { participant: "0@s.whatsapp.net" },
      message: {
      	linkMessage: {
      	url: "https://chat.whatsApp.com",
      caption: fake, 
      jpegThumbnail: fs.readFileSync(`./${tampilImage}.jpg`)}},
     }
     
   const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      }, 
    message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    //====================berantakan🐱===============//
     
        
  //role
  const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
		
			
            idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
			const q = args.join(' ')
            const nomersu = `${sender.split("@")[0]}`
			const isBanned = ban.includes(sender)
            const IsCodeinvite = join_ky.includes(q)
		    errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Ramdani.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			   const costum = (pesan, tipe, target, target2) => {
			Ramdani.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
	    
        const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./Ramdani/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return Ramdani.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: mek})
            Ramdani.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : fkontak})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./Ramdani/limit.json', JSON.stringify(_limit))
            Ramdani.sendMessage(from, `𝙨𝙞𝙨𝙖 𝙡𝙞𝙢𝙞𝙩 𝙖𝙣𝙙𝙖 : *${limitCounts}*`, text, { quoted : fkontak})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            Ramdani.sendMessage(from, `𝚖𝚊𝚊𝚏 *${pushname}* 𝚋𝚊𝚝𝚊𝚜 𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚊𝚗 (𝚕𝚒𝚖𝚒𝚝) 𝚑𝚊𝚛𝚒 𝚒𝚗𝚒 𝚝𝚎𝚕𝚊𝚑 𝚑𝚊𝚋𝚒𝚜. (𝚕𝚒𝚖𝚒𝚝) 𝚋𝚒𝚜𝚊 𝚍𝚒 𝚐𝚎𝚝 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *${prefix}𝚌𝚕𝚊𝚒𝚖, 𝚊𝚝𝚊𝚞 ${prefix}𝚋𝚞𝚢𝚕𝚒𝚖𝚒𝚝`, text, {quoted: mek})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./Ramdani/limit.json',JSON.stringify(_limit))
            return false
            }
            }
        if(isGroup && !isVote && isLevelingOn) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283183586629@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283183586629@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)  
        const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(`╔═══ ❰ 「 𝐧𝐚𝐢𝐤 𝐥𝐞𝐯𝐞𝐥 」❱ ═══
║ *@${sender.split("@")[0]}*                            
║┣❥ 𝚗𝚊𝚖𝚊 : ${pushname}
║┣❥ 𝚡𝚙 : ${getLevelingXp(sender)}
║┣❥ 𝚕𝚒𝚖𝚒𝚝 : +3
║┣❥ 𝚕𝚎𝚟𝚎𝚕 : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╚════ ⸨ *${namabot}* ⸩ ═════`)
}
            }    
        }
    }
 }

const downloadM = async(save) => {
obj = Object.keys(mek.message)[0]
encmedia = content.includes("quotedMessage") ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message[obj].contextInfo : mek
if (save) return await Ramdani.downloadAndSaveMediaMessage(encmedia)
return await Ramdani.downloadMediaMessage(encmedia)
  }

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './tmp/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './tmp/stik' + names + '.png'
                    let asw = './tmp/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ramdani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
});
                });
            }
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
    mime = res.headers['content-type']
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
                };
                download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
    type = MessageType.video
    mime = Mimetype.gif
} 
if(mime.split("/")[0] === "audio"){
    mime = Mimetype.mp4Audio
}
Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
                });
            }
const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link).catch(e => {
	fetch(link).then((hasil) => {
	return Ramdani.sendMessage(from, hasil, type, options)
	}).catch(e => {
	Ramdani.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	}) 
  }) 
  })
	Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	Ramdani.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	
	const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
	
   const getWin = (userId) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === userId) {
position = i
                }
            })
            if (position !== false) {
                return _win[position].win
            }
        }
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
         reply('Bug Troli Detected!\n\n' + require('util').format(m.key))
        await Ramdani.modifyChat(m.chat, 'delete', {
        includeStarred: false
        })
        }
			colors = ['red','white','black','blue','yellow','green']
			//convert
            const isQuoted = type == 'extendedTextMessage'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            
            if (!isGroup && isCmd) console.log(color(`❱═[`,`blue`), color(`𝚙𝚛𝚒𝚟𝚊𝚝𝚎`,`yellow`), color(`]➤`,`blue`), color(`𝚍𝚊𝚛𝚒`,`yellow`), color(`⧐`,`blue`), color(`${pushname}`,`purple`), color(`𝚌𝚘𝚖𝚖𝚊𝚗𝚍`,`yellow`), color(`${budy}`,`green`), color(`═❰`,`blue`)) 
            if (isGroup && isCmd) console.log(color(`❱═[`,`blue`), color(`𝚐𝚛𝚘𝚞𝚙`,`yellow`), color(`]➤`,`blue`), color(`𝚍𝚊𝚛𝚒`,`yellow`), color(`⧐`,`blue`), color(`${pushname}`,`purple`), color(`𝚌𝚘𝚖𝚖𝚊𝚗𝚍`,`yellow`), color(`${budy}`,`green`), color(`═❰`,`blue`)) 
               //====≠=======anti spam==========//) 
            if (!isOwner && isCmd && antiSpam.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply('『𝐬𝐩𝐚𝐦 𝐝𝐞𝐭𝐞𝐤𝐭𝐞𝐝』\nʙᴇʀɪ ᴊᴇᴅᴀ 4/5 ᴅᴇᴛɪᴋ ᴋᴀᴋ ʙɪᴀʀ ʙᴏᴛ ɴɢɢᴀᴋ ᴅᴇʟᴀʏ')}
        
        if (!isOwner && isCmd && antiSpam.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply('『𝐬𝐩𝐚𝐦 𝐝𝐞𝐭𝐞𝐤𝐭𝐞𝐝』\nʙᴇʀɪ ᴊᴇᴅᴀ 4/5 ᴅᴇᴛɪᴋ ᴋᴀᴋ ʙɪᴀʀ ʙᴏᴛ ɴɢɢᴀᴋ ᴅᴇʟᴀʏ')
        }
            if (isCmd && !isOwner) antiSpam.addFilter(from)
            
            if (budy.includes("https://chat.whatsapp.com/")){
            	if (isGroup && antilinkgc == true)
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		Ramdani.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('*KAN ADA ANTILINK, MALAH NGIRIM LINK*')
		}, 1100)
		setTimeout( () => {
		Ramdani.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
		}  
		if (budy.includes("END:VCARD")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		Ramdani.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('*KAN ADA ANTILINK, MALAH NGIRIM LINK*')
		}, 1100)
		setTimeout( () => {
		Ramdani.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
		}  
//===≠==≠=====≠==antilink part2=============//
if (budy.includes("https://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink2) return
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (isGroupAdmins) return reply(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
		result =`『𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 𝙜𝙧𝙤𝙪𝙥 𝙙𝙚𝙩𝙚𝙠𝙩𝙚𝙙 』`
buttons = [{buttonId: `${prefix}ijinkan`,
buttonText:{displayText: '꧁ɪᴊɪɴᴋᴀɴ꧂'},type:1},{buttonId:`${prefix}kick ${sender.split("@")[0]}`,buttonText:{displayText:`꧁ᴋɪᴄᴋ ${pushname}꧂`},type:1}] 
buttonsMessage = { contentText: `${result}`, footerText: `❀ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴋᴇ ɢʀᴏᴜᴘ ɪɴɪ, ɪᴢɪɴᴋᴀɴ ᴏʀ ᴋɪᴄᴋ?❀`, buttons: buttons, headerType: 1 }
prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
} 
		
		switch(command) {
// Thanks to 
//Franky
//Ramdani Ganz
/////////////////////////////////////////////////////////////////////\/////////////////\/////÷/÷/\////\
case 'lah2':
case 'welcome':
if (isLimit(sender)) return
await limitAdd(sender)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
result =`*Klik Nyalakan untuk mengaktifkan / Klik Matikan untuk Menonaktifkan*`
buttons = [{buttonId: `${prefix}wellf`,
buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐰𝐞𝐥𝐜𝐨𝐦𝐞』'},type:1},{buttonId:`${prefix}well`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧 𝐰𝐞𝐥𝐜𝐨𝐦𝐞』'},type:1},{buttonId:`${prefix}lah3`,buttonText:{displayText:'𝐧𝐬𝐟𝐰➡️'},type:1}] 
buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
break
case 'antilink2':
if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 result =`꧁ᴀɴᴛɪʟɪɴᴋ2 ᴏɴ/ᴀɴᴛɪʟɪɴᴋ2 ᴏꜰꜰ꧂`
              buttons = [{buttonId: `${prefix}button9`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤』'},type:1},{buttonId:`${prefix}button8`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤』'},type:1},{buttonId:`${prefix}lah2`,buttonText:{displayText:'𝐰𝐞𝐥𝐜𝐨𝐦𝐞➡️'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
case 'well':
if (isLimit(sender)) return
await limitAdd(sender)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
{
if (isWelkom) return reply('*SUDAH AKTIF* !!!')
welkom.push(from)
welcome = true;
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
} 
break
case 'wellf':
if (isLimit(sender)) return
await limitAdd(sender)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
{
welkom.splice(from)
welcome = false;
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
} 
break
case 'slot':
case 'sley':
if (isLimit(sender)) return
await limitAdd(sender)
result =`║ ${slot11} ║ ${slot22} ║ ${slot33}
║ ${slot44} ║ ${slot55} ║ ${slot66} <====
║ ${slot77} ║ ${slot88} ║ ${slot99}`
buttons = [{buttonId: `${prefix}sley`,buttonText:{displayText: '🔄'},type:1}] 
buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
break
case 'lah3':
if (isLimit(sender)) return
await limitAdd(sender)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
result =`*Klik Nyalakan untuk mengaktifkan / Klik Matikan untuk Menonaktifkan*`
buttons = [{buttonId: `${prefix}mana4`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧』'},type:1},{buttonId:`${prefix}mana3`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧』'},type:1},{buttonId:`${prefix}lah4`,buttonText:{displayText:'𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱➡️'},type:1}] 
buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
break
case 'mana3':
case 'nsfw':
if (isLimit(sender)) return
await limitAdd(sender)
if (isLimit(sender)) return
await limitAdd(sender)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
result =`*Klik Nyalakan untuk mengaktifkan / Klik Matikan untuk Menonaktifkan*`
buttons = [{buttonId: `${prefix}mana4`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧』'},type:1},{buttonId:`${prefix}manaa`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧』'},type:1}] 
buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
break
//by Ramdani
					case 'manaa':
					if (isLimit(sender)) return
			        await limitAdd(sender)
					{
						if (isNsfw) return reply('*SUDAH AKTIF* !!!')
						nsfw.push(from)
						nsfwgc = true;
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan fitur nsfw di grub ini')
					} 
					break
					case 'mana4':
					if (isLimit(sender)) return
			        await limitAdd(sender)
					 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
{
						nsfw.splice(from)
						nsfwgc = false;
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan nsfw di grub ini')
						} 
					break
					case 'lah4':
					if (isLimit(sender)) return
			        await limitAdd(sender)
					 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					result =`*Klik Nyalakan untuk mengaktifkan / Klik Matikan untuk Menonaktifkan*`
					buttons = [{buttonId: `${prefix}fwjqppp`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱』'},type:1},{buttonId:`${prefix}mana6`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱』'},type:1}] 
  buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
break
					break
					case 'mana6':
					if (isLimit(sender)) return
			        await limitAdd(sender)
					if (isLimit(sender)) return
			        await limitAdd(sender)
					 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					{
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/antifirtex.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur AntiVirtex di grub ini')
					} 
					break
					case 'fwjqppp':
					if (isLimit(sender)) return
			        await limitAdd(sender)
					 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
{
						welkom.splice(from, 1)
						fs.writeFileSync('./database/antifirtex.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan AntiVirtex di grub ini')
						} 
					break
case 'join':
if (isLimit(sender)) return
			        await limitAdd(sender)
if (isBanned) return reply(mess.only.benned) 
if(!IsCodeinvite) return reply(`Maaf Code Yang Anda Tulis Salah!\nKetik : ${prefix}serial\nUntuk Mendapatkan Code!`)
if(!comde) return reply('Masukkan Link Grup Kamu!')
let  = body.slice(26)
Ramdani.acceptInvite(comde)
sendMess(m.sender,'Berhasil Masuk Ke Grup mu!')
reply('Silahkan Lihat Chat Dari Bot!')  
break
case 'tagme':

					if (!isGroup) return reply(mess.only.group) 
					mentionedf = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedf.length > 1) {
						tekse = ''
						for (let _ of mentionedf) {
							teks += `@sender.split("@")[0]`
						}
						mentions(tekse, mentionedf, true)
						Ramdani.sendMessage(from, mentionedf)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} `, mentioned, true)
						Ramdani.sendMessage(from, mentionedf)
					}
					break
case 'serial':
if (isBanned) return reply(mess.only.benned)
reply('Silahkan Lihat Chat Dari Bot!')  
seri_ky = randomString(6)
join_ky.push(seri_ky)
serinya = `*CODE SERIAL JOIN*

Nama : ${pushname}
Nomor : wa.me/${sender.split("@s.whatsapp.net")[0]}
Code Join Kamu : ${seri_ky}

Note : Jangan Sebar Codemu Kalau Ketahuan\nOwner Akan Ban Kamu!`
sendMess(m.sender,serinya)
break
case 'kick':

					if (!isGroup) return reply(mess.only.group) 
					if (!isGroupAdmins) return reply(`KHUSUS ADMIN`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`) 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝐲𝐚𝐧𝐠 i𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@sender.split("@")[0]`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah Di Terima, Mengeluarkan @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
case 'suit3':
if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					{
					  bat = [
					    `Kamu *Batu*\n${namabot} *Gunting*\nKamu Menang `,
					    `Kamu *Batu*\n${namabot} *Kertas*\nKamu Kalah 🙂`,
					    `Kamu *Batu*\n${namabot} *Batu*\nKita Seri 😏`
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  result =`${batu}`
					buttons = [{buttonId: `${prefix}lawan3`,buttonText:{displayText: '𝙗𝙖𝙩𝙪'},type:1},{buttonId:`${prefix}lawan2`,buttonText:{displayText:'𝙠𝙚𝙧𝙩𝙖𝙨'},type:1},{buttonId:`${prefix}lawan1`,buttonText:{displayText:'𝙜𝙪𝙣𝙩𝙞𝙣𝙜'},type:1}]
  buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(prep)
             }
break
	case "stikerwm":
      case "stickerwm":
      case 'swm':
      if (!isPrem) return reply(mess.only.premium)
            if ( args.length < 1) return reply(`reply stiker ${prefix}swm author|packname`)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${args[0]}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `${args[0]}`
            require('./lib/fetcher.js').createExif(satu, dua)
	        require('./lib/fetcher.js').modStick(media, Ramdani, fgc, from)
			break
			
case 'sider': 
  if (!isGroup) return reply(mess.only.group)
  if (!isQuoted) return reply(`Reply pesan dari bot`)
Ramdani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
    let anu = []
    let txt = `• *Iist Sider*\n\n`
    for (let i = 0; i < res.reads.length; i++){
        anu.push(res.reads[i].jid)
        txt += `• @${res.reads[i].jid.split("@")[0]}\n`
        txt += `• Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
    }         
    mentions(txt, anu, true)
      })
     .catch((err) => reply('reply pesan bot!'))
  break
case 'block':
if (!isOwner) return reply(mess.only.owner)
				 Ramdani.updatePresence(from, Presence.composing) 
				 if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
					case 'unblock':
					if (!isOwner) return reply(mess.only.owner)
					if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
					case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": blocked}})
					break
case 'ban':
if (!isOwner) return
const kys = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
ban.push(kys)
reply(`Berhasil Banned ${kys}`)
break
case 'unban':
if (!isOwner) return
ban = []
break
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
      prefix = args[0]
      reply(`Ganti Prefix ${prefix} SUCCESS!`)
					break
					case 'setnamabot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
      namabot = args[0]
      reply(`SUCCESS...Mengganti Nama Bot`)
					break
					case 'setreply':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
      fake = args[0]
      reply(`SUCCESS...Mengganti Fake Reply Bot`)
					break
					case 'setlimit':
if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
limitawal = args[0]
reply(`Ganti ${limitawal} SUCCESS!`)
					break
					case 'eror1':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
eror1 = args[0]
reply(`Ganti ${eror1} SUCCESS!`)
					break
					case 'eror2':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
eror2 = args[0]
reply(`Ganti ${eror2} SUCCESS!`)
					break
					
case 'delete':
case 'd':
case 'del':
case `🚮`:
if (!isOwner) return reply(mess.only.owner)
if (isBanned) return reply(mess.only.benned)    

Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'invite':
if (!isOwner) return reply(mess.only.owner)
Ramdani.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('_*SUDAH SELESAI~*_')
break
            break

//addfitur


case 'term':
case 'exec':
					if (!isOwner) return reply(mess.only.owner)
					if (!q) return reply(`masukin code!`)
					exec(`${q}`, (err, stdout) => {
						if (err) return reply(`root@Ramdani:~ ${err}`)
						if (stdout) {
							reply(stdout)
						}
					})
					break
					case 'dadu':
					if (isBanned) return reply(mess.only.benned)   
     
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./stik/${random}.webp`)
			Ramdani.sendMessage(from, damdu, sticker, {quoted: fgc})
			break
case 'runtime':
if (isBanned) return reply(mess.only.benned)   
              taga1 = {
             text: `${namabot} 𝙩𝙚𝙡𝙖𝙝 𝙖𝙠𝙩𝙞𝙛 𝙨𝙚𝙡𝙖𝙢𝙖 ${runtime(process.uptime())}`,
              }
              Ramdani.sendMessage(from, taga1, MessageType.text, {quoted: flink})
              break
              case 'ijinkan':
              
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (isBanned) return reply(mess.only.benned)   
              taga1f = {
             text: `𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐞𝐧𝐠𝐢𝐣𝐢𝐧𝐤𝐚𝐧 𝐦𝐞𝐦𝐛𝐞𝐫 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦𝐤𝐚𝐧 𝐥𝐢𝐧𝐤 𝐤𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢 `,
              }
              Ramdani.sendMessage(from, taga1f, MessageType.text, {quoted: fgc})
              break
              
              case 'hurufkebalik':                     	  
                    if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    Ramdani.sendMessage(from, anu1, text, {quoted: fgc})
                    break   
                    case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(`eror`)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'detikvn':
                    if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						Ramdani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fgc})
						fs.unlinkSync(media)
				break
				case 'faketoko':
				if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			if (args.length == 0) return reply(`Contoh: text|description|item`)
                    get_args = args.join(" ").split("|")
                    textnya = get_args[0]
                    description = get_args[1]
                    itemnya = get_args[2]
                    even = `${textnya}`
                    Ramdani.sendMessage(from, even, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync(`./${tampilImage}.jpg`) }, 'title': `${description}`, 'productImageCount': `${itemnya}` }, 'businessOwnerJid': `0@s.whatsapp.net`}}}})
                    break
                    case 'faketoko':
				if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			lol = {
			message: { 
textMessage: { 
			displayName: `tes`
			}}
			} 
                    Ramdani.sendMessage(from, lol, MessageType.text, {quoted: fvideo}) 
                    break
                    case 'robot':
                    if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await Ramdani.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hahfff = fs.readFileSync(ran)
Ramdani.sendMessage(from, hahfff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true, quoted: fgc})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await Ramdani.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hahff = fs.readFileSync(ran)
					Ramdani.sendMessage(from, hahff, audio, {mimetype: 'audio/mp4', ptt:true, duration: 999999999, quoted:fgc})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await Ramdani.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hahf = fs.readFileSync(ran)
Ramdani.sendMessage(from, hahf, audio, {mimetype: 'audio/mp4', ptt: true, duration: 1489, quoted:fgc})
fs.unlinkSync(ran)
	})
break
case 'spamimg':
case 'spamaudio':
case 'spamstiker':
if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			if (args.length < 1) return reply(`_Reply media|jumlah`)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 15) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Ramdani.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 15) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Ramdani.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await Ramdani.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 15) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Ramdani.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await Ramdani.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 15) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Ramdani.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await Ramdani.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 15) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Ramdani.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'cerpen':
              if(!isGroup) return reply(mess.only.group)
               if (isBanned) return 
				if (isLimit(sender)) return 
				reply(mess.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerpen?&apikey=${LeysKey}`)
				t = anu.result
				buffer = await getBuffer(d.thumbnail)
				pndek = `[ CERITA PENDEK ]\n\n\nTitle : ${t.title}\nPengarang : ${t.pengarang}\nKategori : ${t.kategori}\nStory : ${d.story}`
				Ramdani.sendMessage(from, buffer, image, {quoted: fgc, caption: pndek})
				await limitAdd(sender)
				break
				case 'ceritahoror':
				if(!isGroup) return reply(mess.only.group)
                if (isBanned) return 
				if (isLimit(sender)) return 
				reply(mess.wait) 
				anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${LolKey}`)
				d = anu.result
				buffer = await getBuffer(d.thumbnail)
				horor = `[ CERITA HOROR ]\n\n\nTitle : ${d.title}\nDeskripsi : ${d.desc}\nStory : ${d.story}`
				Ramdani.sendMessage(from, buffer, image, {quoted: fgc, caption: horor})
				await limitAdd(sender)
				break
				case 'cersex':
				if(!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.only.enesfewe)
                if (isBanned) return 
				if (isLimit(sender)) return 
				reply(mess.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${LeysKey}`) 
				buffer = await getBuffer(anu.gambar)
				sex = `[ CERITA SEX ]\n\n\nCerita : ${anu.result}`
				Ramdani.sendMessage(from, buffer, image, {quoted: fgc, caption: `🎭`})
				await limitAdd(sender)
				break
              case 'command':
 listMsg = {
 buttonText: 'KLIK',
 footerText: 'tes',
 description: `tes`,
 sections: [
                     {
                      "title": `tes`,
 rows: [
                           {
                              "title": "owner",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {quoted: fvideo})
break
				case 'help':
				case 'menu':
				case 'menu4':
				
				nomqm = mek.participant
				if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
				const uangku = checkATMuser(sender)
				const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
console.log(color(`[Menampilkan fitur bot]`,`blue`))
                let totalchat = await Ramdani.chats.all()
				let i = []
				let giid = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
result =`꧁${namabot}꧂
╔════════════⧐
┣➤ ${ucapanFakereply}
┗════════════⧐
꧁✾ᴄʀᴇᴀᴛᴇᴅ༝ʙʏ༝ʀᴀᴍᴅᴀɴɪ✾꧂`
buttons = [{buttonId: `${prefix}ownerr`,buttonText:{displayText: '✧𝚘𝚠𝚗𝚎𝚛✧'},type:1},{buttonId:`${prefix}menu3`,buttonText:{displayText:'✧𝚖𝚎𝚗𝚞2✧'},type:1},{buttonId:`${prefix}runtime`,buttonText:{displayText:'✧𝚛𝚞𝚗𝚝𝚒𝚖𝚎✧'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: `
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║═╣║║╔╣║║║║║═╣
║║║║═╣╚╣╚╣║║║║║═╣
╚══╩═╩═╩═╩═╩╩╩╩═╝
╔════════════⧐
║❥𝙝𝙖𝙧𝙞
*┣➤ ${tampilHari}*
║❥𝙟𝙖𝙢
*┣➤ ${tampilJam}*
┗════════════⧐  
╔══❰ 𝚒𝚗𝚏𝚘 𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝙰 ❱══⧐
║┣❥ 𝙣𝙖𝙢𝙖: *${pushname}*
║┣❥ 𝙣𝙤𝙢𝙚𝙧: *wa.me/${sender.split("@")[0]}*
║┣❥ 𝙧𝙤𝙡𝙚: *${role}*
║┣❥ 𝙪𝙖𝙣𝙜: *${uangku}
║┣❥ 𝙭𝙥 : *${getLevelingXp(sender)}/${reqXp}*
║┣❥ 𝙡𝙚𝙫𝙚𝙡 : *${getLevelingLevel(sender)}*
║┣❥ 𝙡𝙞𝙢𝙞𝙩 : *${limitawal}\day*
┗━═══❍════❍════❍⧐ 
╔═══❰ 𝚒𝚗𝚏𝚘 𝚋𝚘𝚝𝚣 ❱════⧐
╠➤ 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 = ${antilinkgc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤2 = ${antilink2gc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐧𝐬𝐟𝐰 = ${nsfwgc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 = ${welcomegc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐥𝐞𝐯𝐞𝐥𝐢𝐧𝐠 = ${levelinggc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐬𝐭𝐚𝐭𝐮𝐬 𝐠𝐫𝐨𝐮𝐩 = ${bangc ? "_[𝚋𝚊𝚗𝚌𝚑𝚊𝚝]_" : "_[𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝]_"}
╚═══❍════❍════❍⧐
╔[]══════✧𝐪𝐮𝐨𝐭𝐞𝐬 ✧══════[]╗ 
_"[${yekan}]"_
╚[]══════✧ 𝐪𝐮𝐨𝐭𝐞𝐬✧══════[]╝
╔═❰ 『 𝚐𝙰𝚖𝚎 𝚖𝚎𝚗𝚞  』❱═══⧐           
┣❏ *${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ*
┣❏ *${prefix}ᴅᴇʟᴛᴛ*
┣❏ *${prefix}ꜱᴜɪᴛ*
┣❏ *${prefix}ɢᴇʟᴜᴅ*
┣❏ *${prefix}ᴅᴇʟɢᴇʟᴜᴅ*
┣❏ *${prefix}ᴛᴏᴅ*
┣❏ *${prefix}ꜱʟᴏᴛ*
┣❏ *${prefix}ᴀᴘᴀᴋᴀʜ*
┣❏ *${prefix}ʙɪꜱᴀᴋᴀʜ*
┣❏ *${prefix}ᴋᴀᴘᴀɴᴋᴀʜ*
┣❏ *${prefix}ʀᴀᴛᴇ*
┣❏ *${prefix}ᴛᴇʙᴀᴋ*
┗━═══❍════❍═════❍⧐
╔══❰ 『 𝚘𝚠𝚗𝚎𝚛 𝚖𝚎𝚗𝚞 』❱══⧐           
┣❏ *${prefix}ꜱᴇᴛᴄᴍᴅ*
┣❏ *${prefix}ᴅᴇʟᴄᴍᴅ*
┣❏ *${prefix}ʟɪꜱᴛᴄᴍᴅ*
┣❏ *${prefix}ꜱᴇᴛᴘʀᴇꜰɪx*
┣❏ *${prefix}ᴄʟᴇᴀʀᴀʟʟ*
┣❏ *${prefix}ᴄʟᴏɴᴇ*
┣❏ *${prefix}ʙᴀɴ*
┣❏ *${prefix}ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ/ᴏꜰꜰ*
┣❏ *${prefix}ᴀᴜᴛᴏᴄᴏᴍᴘᴏꜱɪɴɢ ᴏɴ/ᴏꜰꜰ*
┣❏ *${prefix}ᴜɴʙᴀɴ*
┣❏ *${prefix}ꜱᴇᴛʟɪᴍɪᴛ*
┣❏ *${prefix}ʙᴜɢɢᴄ*
┣❏ *${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ*
┣❏ *${prefix}ʙᴄᴠɴ*
┣❏ *${prefix}ʙᴄꜱᴛɪᴋ*
┣❏ *${prefix}ʙᴄᴠɪᴅᴇᴏ*
┣❏ *${prefix}ʙᴄɪᴍɢ*
┣❏ *${prefix}ʙʟᴏᴄᴋ*
┣❏ *${prefix}ᴜɴʙʟᴏᴄᴋ*
┣❏ *${prefix}ꜱᴇᴛʀᴇᴘʟʏ* 
┣❏ *${prefix}ꜱᴇᴛɴᴀᴍᴀʙᴏᴛ*
┣❏ =>
┣❏ >
┗━═══❍════❍════❍⧐
╔═❰ 『 𝚐𝚛𝚘𝚞𝚙 𝚖𝚎𝚗𝚞 』❱══⧐           
┣❏ *${prefix}ᴀᴅᴅ*
┣❏ *${prefix}ᴄᴀʀɪᴘᴇꜱᴀɴ*
┣❏ *${prefix}ᴄʟᴀɪᴍ*
┣❏ *${prefix}ᴅᴇʟᴠᴏᴛᴇ*
┣❏ *${prefix}ꜱᴇᴛᴇʟᴀɴ*
┣❏ *${prefix}ᴋɪᴄᴋ*
┣❏ *${prefix}ʟɪɴᴋɢᴄ*
┣❏ *${prefix}ᴋɪʀɪᴍ*
┣❏ *${prefix}ꜱɪᴅᴇʀ*
┣❏ *${prefix}ᴠᴏᴛɪɴɢ*
┣❏ *${prefix}ʀᴇꜱᴇᴛʟɪɴᴋ*
┣❏ *${prefix}ᴀɴᴛɪʟɪɴᴋ*
┣❏ *${prefix}ᴀɴᴛɪʟɪɴᴋ2*
┣❏ *${prefix}ᴡᴇʟᴄᴏᴍᴇ*
┣❏ *${prefix}ɴꜱꜰᴡ*
┣❏ *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
┣❏ *${prefix}ᴅᴇᴍᴏᴛᴇ*
┣❏ *${prefix}ʟᴠ*
┣❏ *${prefix}ꜱᴇᴛᴅᴇꜱᴄ*
┣❏ *${prefix}ꜱᴇᴛɴᴀᴍᴇ*
┣❏ *${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ*
┣❏ *${prefix}ʟᴇᴠᴇʟ*
╠════❍════❍════❍⧐
┣❏ *${prefix}ᴍᴇɴᴜ2*
┣❏ *${prefix}ᴀʟʟᴍᴇɴᴜ*
╠════❍════❍════❍⧐
╠═══❰ ꧁𝙩𝙝𝙭 𝙩𝙤𝙤꧂ ❱══⧐
║❥𝐫𝐚𝐦𝐝𝐚𝐧𝐢
║❥𝐟𝐫𝐚𝐧𝐤𝐲
┗━═══❍════❍════❍⧐`, buttons:  buttons, headerType: 1 }
     prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {
                                       text: `wa.me/6285879466965`,
                                        matchedText: `wa.me/6285879466965`,
                                        canonicalUrl: `wa.me/6285879466965`,
                                        description: `${ucapanFakereply}`,
                                        title: ``,
                                        jpegThumbnail: thumb
                                }, 'extendedTextMessage', { detectLinks: false }, {quoted: fgc2},{})
              Ramdani.relayWAMessage(prep)
              break
              
              
              case 'menu3':
              case 'menu2':

              nomqmy = mek.participant
              if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)   
				console.log(color(`[Menampilkan Menu2`,`blue`))
result =`꧁${namabot}꧂`
buttons = [{buttonId: `${prefix}menu4`,buttonText:{displayText: '↩️𝙗𝙖𝙘𝙠 𝙩𝙤 𝙢𝙚𝙣𝙪'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: `╔═══❰ *INFO PENGGUNA* ❱════⧐
║┣❥ *𝚗𝚊𝚖𝚊: ${pushname}*
║┣❥ *𝚗𝚘𝚖𝚎𝚛: wa.me/${sender.split("@")[0]}*
║┣❥ *𝚛𝚘𝚕𝚎: ${role}*
║┣❥ *𝚕𝚒𝚖𝚒𝚝 : ${limitawal}\day*
┗━═══❍════❍════❍⧐
╔══❰ 『 *ᴍᴀᴋᴇʀ* 』❱═══⧐           
┣❏ *${prefix}ɴᴇᴏɴ1*
┣❏ *${prefix}ᴛ3ᴅ*
┣❏ *${prefix}ɢᴀʟᴀxʏ*
┣❏ *${prefix}ɢᴀᴍɪɴɢ*
┣❏ *${prefix}ᴄᴏʟᴏʀꜱ*
┣❏ *${prefix}ᴋʟɪɴɢ*
┣❏ *${prefix}ᴛᴀʜᴛᴀ*
┣❏ *${prefix}ɴᴇᴏɴ2*
┣❏ *${prefix}ᴡᴀʟʟ*
┣❏ *${prefix}ᴡᴏʟꜰ*
┣❏ *${prefix}ᴛꜰɪʀᴇ*
┣❏ *${prefix}ʏᴛɢᴏʟᴅ*
┣❏ *${prefix}ʏᴛꜱɪʟᴠᴇʀ*
┣❏ *${prefix}ᴛᴇxᴛ3ᴅ*
┣❏ *${prefix}ʟᴏɢᴏᴀ*
┣❏ *${prefix}ᴘᴏʀɴʜᴜʙ*
┣❏ *${prefix}ᴍᴀʀᴠᴇʟ*
┣❏ *${prefix}ʟᴇᴀᴠᴇꜱᴛ*
┣❏ *${prefix}ɴᴜʟɪꜱ*
┣❏ *${prefix}ꜱᴍᴏᴋᴇ* 
┣❏ *${prefix}ʀᴀɪɴʙᴏᴡ* 
╚════❍════❍════❍⧐
╔═❰ 『 𝚒𝚗𝚏𝚘 𝚖𝚎𝚗𝚞  』❱═⧐
┣❏ *${prefix}ᴡᴀᴍᴇ*
┣❏ *${prefix}q*
┣❏ *${prefix}ɪɴꜰᴏꜱᴛɪᴄᴋ*
┣❏ *${prefix}ᴏᴡɴᴇʀ*
┣❏ *${prefix}ɢʀᴏᴜᴘʟɪꜱᴛ*
┣❏ *${prefix}ᴄᴇᴋɢʀᴜᴘ*
╚════❍════❍════❍⧐
╔═❰ 『 𝚜𝚝𝚘𝚛𝚊𝚐𝚎 𝚖𝚎𝚗𝚞  』❱═⧐
┣❏ *${prefix}ᴛᴏᴍᴘ3*
┣❏ *${prefix}ᴅᴇᴛɪᴋᴠɴ*
┣❏ *${prefix}ᴘʀᴏꜰɪʟᴇ*
┣❏ *${prefix}ʀᴏʙᴏᴛ* 
┣❏ *${prefix}ɢᴇᴍᴜᴋ* 
┣❏ *${prefix}ʙᴀʟɪᴋ* 
┣❏ *${prefix}ᴛᴏᴍᴘ4*
┣❏ *${prefix}ꜱᴡᴍ*
┣❏ *${prefix}ᴛᴏɪᴍɢ*
┣❏ *${prefix}ᴛᴏᴠɴ*
┣❏ *${prefix}ꜱᴛɪᴄᴋᴇʀ*
┣❏ *${prefix}ᴅᴏɴᴀꜱɪ*
┣❏ *${prefix}ꜱᴇᴡᴀʙᴏᴛ*
┣❏ *${prefix}ᴀᴅᴅꜱᴛɪᴋᴇʀ* 
┣❏ *${prefix}ᴀᴅᴅᴠɴ* 
┣❏ *${prefix}ɢᴇᴛᴠɴ* 
┣❏ *${prefix}ɢᴇᴛꜱ* 
┣❏ *${prefix}ʟɪꜱᴛꜱᴛɪᴋᴇʀ* 
┣❏ *${prefix}ʟɪꜱᴛᴠɴ* 
┣❏ *${prefix}ᴀᴅᴅɪᴍᴀɢᴇ* 
┣❏ *${prefix}ɢᴇᴛɪᴍᴀɢᴇ* 
┣❏ *${prefix}ɪᴍᴀɢᴇʟɪꜱᴛ* 
┣❏ *${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ* 
┣❏ *${prefix}ɢᴇᴛᴠɪᴅᴇᴏ* 
┣❏ *${prefix}ᴠɪᴅᴇᴏʟɪꜱᴛ*
┣❏ *${prefix}ꜱᴘᴀᴍɪᴍɢ* 
┣❏ *${prefix}ꜱᴘᴀᴍᴀᴜᴅɪᴏ* 
┣❏ *${prefix}ꜱᴘᴀᴍꜱᴛɪᴋᴇʀ*
┗━══❍════❍════❍⧐     
╔═❰ 『 ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ 』❱═⧐                  
┣❏ *${prefix}ᴘʟᴀʏ*
┣❏ *${prefix}ʏᴛᴅʟ*
┣❏ *${prefix}ʏᴛᴍᴘ4*
┣❏ *${prefix}ʏᴛᴍᴘ3*
┣❏ *${prefix}ᴛɪᴋᴛᴏᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ*
┣❏ *${prefix}ɪɢᴅʟ*
┣❏ *${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ*
┣❏ *${prefix}ʟɪʀɪᴋ*
┣❏ *${prefix}ʏᴛꜱ*
┣❏ *${prefix}ᴄᴇʀᴘᴇɴ*
┣❏ *${prefix}ᴄᴇʀɪᴛᴀʜᴏʀᴏʀ*
┣❏ *${prefix}ᴄᴇʀꜱᴇx*
┣❏ *${prefix}ᴇᴍᴏᴊɪ*
┣❏ *${prefix}ɢᴏᴏɢʟᴇ*
┣❏ *${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ*
┣❏ *${prefix}ᴀᴛᴛᴘ*
┣❏ *${prefix}ᴛᴛᴘ*
┣❏ *${prefix}ꜱꜱᴡᴇʙ* 
┣❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ*
┣❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ2* 
┣❏ *${prefix}ᴅᴀꜰᴏɴᴛ*
┣❏ *${prefix}ꜰᴏɴᴛᴅᴏᴡɴ*
┣❏ *${prefix}xɴxx*
┣❏ *${prefix}xɴxxᴅᴏᴡɴ*
┣❏ *${prefix}ɴʜᴇɴᴛᴀɪᴘᴅꜰ*
┣❏ *${prefix}ʟᴏʟɪ*
┣❏ *${prefix}ᴡᴀɪꜰᴜ*
┣❏ *${prefix}ʜᴜꜱʙᴜ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚕𝚊𝚒𝚗𝚗𝚢𝚊 』❱══⧐                  
┣❏ *${prefix}ʙᴜᴄɪɴ*
┣❏ *${prefix}ɢᴀʟᴀᴜ*
┣❏ *${prefix}ʀᴜɴᴛɪᴍᴇ*
┣❏ *${prefix}ɢʀᴏᴜᴘʟɪꜱᴛ*
┣❏ *${prefix}ᴄɪᴛᴀᴄɪᴛᴀ*
┣❏ *${prefix}ꜱᴄ*
┣❏ *${prefix}ꜰᴏx* 
┣❏ *${prefix}ᴅᴏɢ* 
┣❏ *${prefix}ᴄᴀᴛ* 
┣❏ *${prefix}ᴘᴀɴᴅᴀ* 
┣❏ *${prefix}ᴘᴀɴᴅᴀ1* 
┣❏ *${prefix}ʙɪʀᴅ* 
┣❏ *${prefix}ᴋᴏᴀʟᴀ* 
┣❏ *${prefix}ᴍᴇᴍᴇ* 
┣❏ *${prefix}ᴛᴇxᴛꜰᴏɴᴛ* 
┣❏ *${prefix}ᴋᴀᴘɪᴛᴀʟ* 
┣❏ *${prefix}ʙᴏᴏᴍᴛᴇxᴛ* 
┣❏ *${prefix}ᴊᴀᴅɪᴀɴ*
┣❏ *${prefix}ʜᴜʀᴜꜰᴋᴇʙᴀʟɪᴋ*
┣❏ *${prefix}ᴍᴏʀᴇ* 
┣❏ *${prefix}ꜰɪᴛɴᴀʜ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚝𝚊𝚐 𝚖𝚎𝚗𝚞 』❱══⧐     
┣❏ *${prefix}ɢᴀɴᴛᴇɴɢ*
┣❏ *${prefix}ᴄᴀɴᴛɪᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀ*
┣❏ *${prefix}ᴊᴀɢᴏ*
┣❏ *${prefix}ʜᴇʙᴀᴛ*
┣❏ *${prefix}ꜱᴀᴅʙᴏʏ*
┣❏ *${prefix}ᴘᴀᴋɢɪʀʟ*
┣❏ *${prefix}ꜱᴀᴅɢɪʀʟ*
┣❏ *${prefix}ᴘᴀᴋʙᴏʏ*
┣❏ *${prefix}ʙᴇʙᴀɴ*
┣❏ *${prefix}ʙᴀɪᴋ*
┣❏ *${prefix}ᴊᴀʜᴀᴛ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚌𝚎𝚔 𝚖𝚎𝚗𝚞 』❱══⧐     
┣❏ *${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ*
┣❏ *${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ*
┣❏ *${prefix}ᴊᴇʟᴇᴋᴄᴇᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀᴄᴇᴋ*
┣❏ *${prefix}ᴊᴀɢᴏᴄᴇᴋ*
┣❏ *${prefix}ʙᴇʙᴀɴᴄᴇᴋ*
┣❏ *${prefix}ʙᴀɪᴋᴄᴇᴋ*
┣❏ *${prefix}ᴊᴀʜᴀᴛᴄᴇᴋ*
┣❏ *${prefix}ᴘᴀᴋʙᴏʏᴄᴇᴋ*
┣❏ *${prefix}ᴘᴀᴋɢɪʀʟᴄᴇᴋ*
┣❏ *ᴄᴇᴋᴘʀᴇꜰɪx*
╠════❍════❍════❍⧐
╠═══❰ ꧁𝙩𝙝𝙭 𝙩𝙤𝙤꧂ ❱══⧐
║❥𝐫𝐚𝐦𝐝𝐚𝐧𝐢
║❥𝐟𝐫𝐚𝐧𝐤𝐲
┗━═══❍════❍════❍⧐`, buttons:  buttons, headerType: 1 }
     prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc2},{})
              Ramdani.relayWAMessage(prep)
              break
              case 'transfer':
				if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)   
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285879466965@s.whatsapp.net', fee)
                reply(`╔══❰ 𝚜𝚞𝚌𝚌𝚎𝚜𝚜 ❱══⧐
║┣❥ 𝚙𝚎𝚗𝚐𝚒𝚛𝚒𝚖𝚊𝚗 𝚞𝚊𝚗𝚐 𝚝𝚎𝚕𝚊𝚑 𝚜𝚞𝚔𝚜𝚎𝚜
║┣❥ 𝚍𝚊𝚛𝚒 : +${sender.split("@")[0]}
║┣❥ 𝚔𝚎 : +${tujuan}\njumblah transfer : ${jumblah}
║┣❥ 𝚙𝚊𝚓𝚊𝚔 : ${fee}
┗━═══❍════❍════❍⧐`, {quoted: fvideo}) 
                break
                case 'profile':
              Ramdani.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					Ramdani.sendMessage(from, buffer, image, {quoted: fgc, caption: profile})

					break
					case 'hobby':
		                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi',`Jual Cewe`,`Sholat Bercandaan`,'Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fkatalog })
					await limitAdd(sender)
					break
              case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (isBanned) return reply(mess.only.benned)
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        Ramdani.sendMessage(from, fku, text, {quoted: fgc})
				                        break
				case 'leave': 
				if (!isOwner) return
				await reply(from, 'bye').then(() => Ramdani.groupLeave(from))
					break
				case 'unafk':
				                               if (isBanned) return reply(mess.only.benned)
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        Ramdani.sendMessage(from, kl7, text, {quoted: fgc})
                                        break
case 'kalkulator':
				                               if (isBanned) return reply(mess.only.benned)
         if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
case 'tr':
case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
                    kode_negara = args[0]
                    args.shift()
                    teks = args.join(" ")
                    translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
                    ini_txt = `*Translate*
                    
                     Terdeteksi Bahasa : ${res.from.language.iso}
                     Terjemahan Nya : ${res.text}`
                     reply(ini_txt)
                    })
                break   
                case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons:  buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
       case 'buttons6':
       if (isLimit(sender)) return
			        await limitAdd(sender)
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              case 'buggc':
					if (!isOwner) return reply(mess.only.owner)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				Ramdani.toggleDisappearingMessages(from)
				break
              
      case 'tod':
      if (isLimit(sender)) return
			        await limitAdd(sender)
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
case 'waifu':
   case 'loli':
       case 'husbu':
       if (isLimit(sender)) return
			        await limitAdd(sender)
              if (!isNsfw) return reply(mess.only.enesfewe)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'pfft', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//Ramdani.send2ButtonImg(jid, content, url, footer, button1, row1, button2, row2, options = {}) {
case 'play':
case 'ytdl':
if (isLimit(sender, 2)) return
			        await limitAdd(sender)
if (isBanned) return reply(mess.only.benned)
if (!q) return reply(`Example : ${prefix + command} santuy 30 detik`)
res = await yts(q).catch(e => {
reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `*Youtube Play▶️*`

buttons = [{buttonId:`${prefix}buttonvideo ${res.all[0].url}`,buttonText:{displayText:'✤ᴠɪᴅᴇᴏ✤'},type:1},{buttonId:`${prefix}buttonmusic ${res.all[0].url}`,buttonText:{displayText:'❀ᴀᴜᴅɪᴏ❀'},type:1}]
imageMessage = (await Ramdani.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
buttonsMessage = {contentText: thumbInfo,footerText:`
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🖇️ Link : ${res.all[0].author.url}`,imageMessage,buttons,headerType:4}
inibut = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
Ramdani.relayWAMessage(inibut)
break

case 'buttonmusic':
if (isLimit(sender)) return
			        await limitAdd(sender)
if(!q) return reply('linknya?')
reply(mess.wait)
res = await yta(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Audio_')
})
filesize = res
if (Number(filesize) >= 10) return reply('File Melebihi Dari 10 MB!')
sendMediaURL(from, `${res.dl_link}`)
break
case 'buttonvideo':
if (isLimit(sender)) return
			        await limitAdd(sender)
if(!q) return reply('linknya?')
reply(mess.wait)
res = await ytv(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Video_')
})
filesize = res
if (Number(filesize) >= 10) return reply('File Melebihi Dari 10 MB!')
sendMediaURL(from, `${res.dl_link}`)
break

case 'addcmd': 
       case 'setcmd':
         if (!isPrem) return reply(mess.only.premium)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(`*Succes*`, {quoted: fvideo})
              } else {
              reply(`tag stickernya`, {quoted: fvideo})
}
              break
       case 'delcmd':
         if (!isPrem) return reply(mess.only.premium)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              reply(`*Succes*`, {quoted: fvideo})
              break
       case 'listcmd':
       
         if (!isPrem) return reply(mess.only.premium)
              let teksnyee = `\`\`\`〖 LIST STICKER CMD 〗\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true, {quoted: fvideo})
              break
case 'sourcecode': 
       case 'sc': 
       case 'src':
       if (isLimit(sender)) return
			        await limitAdd(sender)
             tagalgc1 = {
             text: `ʙᴜʏ?, ʜᴀʀɢᴀ? 35ᴋ, ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ: wa.me/6285879466965`
              }
              Ramdani.sendMessage(from, tagalgc1, MessageType.text, {quoted: fvideo})
              break
case 'google':
              if (isLimit(sender)) return
			        await limitAdd(sender)
              if (!q) return reply('apa yang mau di cari?')
              ss = await getBuffer(`https://telegra.ph/file/726258c6e01d66a0c8036.jpg`)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               Ramdani.sendMessage(from, ss, image, {caption: vars, quoted : mek, thumbnail: Buffer.alloc(0) })
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
// Case By Franky🗿
case 'kirim':
if(!mek.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(mek.quoted.sender , q)
break
case 'nhentaipdf':
                    if (!isNsfw) return reply(mess.only.enesfewe)
                    if (args.length == 0) return reply(`Example: ${prefix + command}344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await Ramdani.sendMessage(from, ini_buffer, document, { quoted: fkatalog, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
// Fork By Nino Chan / Marz Tod🗿
case 'jadibot':
             if (!isPrem) return reply(mess.only.premium)
              jadibot(reply,Ramdani,from)
              break
       case 'stopjadibot':
             stopjadibot(reply)
             break
      case 'listbot': 
      case 'listjadibot':
             let jamdi = '〖 *LIST JADIBOT* 〗\n\n'
             for(let i of listjadibot) {
             jamdi += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
            reply(jamdi)
            break
            case 'citacita':
            if (isBanned) return reply(mess.only.benned)    
            if(!isGroup) return reply(mess.only.group)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     Ramdani.sendMessage(from, anu, MessageType.audio, {quoted: floc2, mimetype: 'audio/mp4', ptt:true})
                     break
case 'delvote':
if (isBanned) return reply(mess.only.benned)    
if(!isGroup) return reply(mess.only.group)
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            ////if(!isGroupAdmins) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)\nContoh : /voting @tag | alasan | waktu vote')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.lengthl > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'gelud':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    

					if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
					if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
                     if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
					if (fs.existsSync(`./tmp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delgelud*, untuk menghapus sesi`)
					
					gelutSkuy = setGelud(`${from}`)
					gelutSkuy.status = false
					gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
					gelutSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
					starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

					Ramdani.sendMessage(from, starGame, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
					break
					
					case 'delgelud':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
					if (fs.existsSync('./tmp/' + from + '.json')) {
						fs.unlinkSync('./tmp/' + from + '.json')
						reply('Berhasil Menghapus Sesi Gelud')
					} else {
						reply('Tidak ada sesi yang berlangsung')
					}
					break
case 'buylimit':
				payout = body.slice(10)
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`「 PEMBAYARAN SUKES 」

𝚙𝚎𝚗𝚐𝚒𝚛𝚒𝚖 : 𝚊𝚍𝚖𝚒𝚗
𝚙𝚎𝚗𝚎𝚛𝚒𝚖𝚊 : ${pushname}
𝚗𝚘𝚖𝚒𝚗𝚊𝚕 𝚙𝚎𝚖𝚋𝚎𝚕𝚒𝚊𝚗 : ${payout}
𝚑𝚊𝚛𝚐𝚊 𝚕𝚒𝚖𝚒𝚝 : ${koinPerlimit}/limit
𝚜𝚒𝚜𝚊 𝚞𝚊𝚗𝚐𝚖𝚞 : ${checkATMuser(sender)}
`)
				} 
				break

case 'deltt':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break

case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
gak = from
gilir = player2
ky_ttt.push({player1,player2,gak,angka,gilir})
Ramdani.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik ${prefix}deltt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break

case 'infostick':
case 'infos':
let webp = require('node-webpmux')
    if (!m.quoted) return Ramdani.reply(m.chat, 'Tag stikernya!', m)
    let qusu = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
       anu = util.format(JSON.parse(img.exif.slice(22).toString()))
     m.reply(anu)
    }
break
case 'grouplist':
case 'listgroup':
if (isBanned) return reply(mess.only.benned)    
 txt = Ramdani.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${Ramdani.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  Ramdani.reply(m.chat, 'List Groups:\n' + txt, m)
break
case 'q':
if (isBanned) return reply(mess.only.benned)    
    if (!m.quoted) return reply( 'reply pesan!')
    let qu = Ramdani.serializeM(await m.getQuotedObj())
    if (!qu.quoted) return reply( 'pesan yang anda reply tidak mengandung reply!')
    await qu.quoted.copyNForward(m.chat, true)
break
case 'sewabot':
case 'meu1':
result =`SEWABOT`
              buttons = [{buttonId: `${prefix}mie1`,buttonText:{displayText: '『𝙮𝙖』'},type:1},{buttonId:`${prefix}mie2`,buttonText:{displayText:'『𝙩𝙞𝙙𝙖𝙠』'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `[𝐬𝐞𝐰𝐚 𝐬𝐞𝐦𝐢𝐧𝐠𝐠𝐮 = 5𝐤] 
[𝐬𝐞𝐰𝐚 𝐬𝐞𝐛𝐮𝐥𝐚𝐧 = 20𝐤] 
[𝐬𝐞𝐰𝐚 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 = 25𝐤] 
[𝐬𝐜𝐫𝐢𝐩𝐭 = 35𝐤]
[𝐦𝐚𝐬𝐮𝐤𝐢𝐧 𝐛𝐨𝐭 𝐤𝐞 2 𝐠𝐫𝐨𝐮𝐩 = 5𝐤]
[𝐦𝐚𝐬𝐮𝐤𝐢𝐧 𝐛𝐨𝐭 𝐤𝐞 3 𝐠𝐫𝐨𝐮𝐩 = 10𝐤]

_JIKA INGIN SEWABOT KILIK DIBAWAH, KLIK [YA] AKAN LANGSUNG TERSAMPAIKAN KE OWNER, ATAU KLIK [TIDAK] UNTUK MEMBATALKANNYA_`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
             break
      case 'donasi':
             case 'meu':
             
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: 'OWNER'},type:1}]
                buttonsMessage = { contentText: `DONASI`, footerText: `LANGSUNG CHAT OWNER AJA`,buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break

case 'truey':
if (!isOwner) return reply(mess.only.owner)
{
if (isBanChat) return reply('*UDAH DI BANCHAT TADI*')
chatban.push(from)
bangc = true;
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*SUCCESS BANCHAT*')
}
break
case 'autocomposing':
if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply(`Contoh: ${prefix}autocomposing on`)
					if (args[0] === 'off' ) {
						composing = false
					 behw = `_Success Menonaktifkan Auto Composing_`, 
              reply(behw)
					} else if (args[0] === 'on') {
						composing = true
					behwfywy = `_Success Mengaktifkan Auto Composing_`,
               reply(behwfywy)
					}
					break
					case 'autorecord':
if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply(`Contoh: ${prefix}autorecord on`)
					if (args[0] === 'off' ) {
						recording = false
					 gdoqos = `_Success Menonaktifkan Auto Recording_`,
              reply(gdoqos)
					} else if (args[0] === 'on') {
						recording = true
					gdoqosf = `_Success Mengaktifkan Auto Recording_`,
              
					  reply(gdoqosf)
					}
					break
case 'falsey':
if (!isOwner) return reply(mess.only.owner)
{
chatban.splice(from)
bangc = false;
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*SUCCESS UNBANCHAT*')
}
break
case 'cekgrup':
case 'cekgroup':
case 'infogc':
if (isBanned) return reply(mess.only.benned)    
 cos = args.join( " ")
var net = cos.split('https://chat.whatsapp.com/')[1]
 jids = []
let { owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Ramdani.query({ 
json: ["query", "invite",net],expect200:true })
let oi = 
`</ *CEKGROUP* >

• *Owner Group* : @${owner.split('@')[0]}
• *Nama Group* : ${subject}
• *Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
• *Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
• *Id desc* : ${descId}
• *Desc di ganti oleh* : @${descOwner.split('@')[0]}
• *Tanggal* : ${formatDate(descTime * 1000)}`
jids.push(`${owner.replace(/@c.us/g,'@s.whatsapp.net')}`)
jids.push(`${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}`)
mentions(oi,jids,true)
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
break
case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
case 'owner':
case 'ownerr':

if (isBanned) return reply(mess.only.benned)    
console.log(color(`[KONTAK OWNER RAMDANI]`,`blue`))
let ini_list = []
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {

  ini_list.push({
            "displayName": Ramdani.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${Ramdani.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await Ramdani.sendMessage(from, {
        "displayName": `${ini_list.length} kontak`,
        "contacts": ini_list 
        }, 'contactsArrayMessage', { quoted: m })
        Ramdani.sendMessage(from,`𝚗𝚒𝚎𝚑 𝚔𝚊𝚔, 𝚓𝚊𝚗𝚐𝚊𝚗 𝚕𝚞𝚙𝚊 𝚜𝚊𝚟𝚎 𝚘𝚠𝚗𝚎𝚛 ${namabot}`,text,{quoted: hehe})
            break

case 'report':

if (isBanned) return reply(mess.only.benned)    
console.log(color(`Laporan Fitur Bot`,`blue`))
                if (args.length < 1) return reply(`Yang mau direport apaan? `)
                     const pesan = body.slice(4)
                      if (pesan.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: fkontak})
                        var nomor = mek.participant
                       const tekst1 = 
`*◪* *Bug Report*
*│◪* *Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}*
*└◪* *Pesan : ${pesan}*`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    Ramdani.sendMessage(`${ownerContact}@s.whatsapp.net`, options, text, {quoted: fkontak})
                    reply(`Terima Kasih, Masalah Anda Sudah Di Laporkan Ke Owner ${namabot}`)
                    break
                    case 'mie4':
const kak2 = body.slice(8)
                      if (kak2.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: fkatalog})
                        var suy = mek.participant
                       const api = `*◪* *${pushname} MEMBATALKAN SEWABOT*
*│◪* *Tag : @${sender.split("@")[0]}*`

                      var options = {
                         text: api,
                         contextInfo: {mentionedJid: [suy]},
                     }
Ramdani.sendMessage(`${ownerContact}@s.whatsapp.net`, options, text, {quoted: fkontak})
                    reply('*_MEMBATALKAN SEWABOT_*')
                    break
                   case 'mie2':
const kak1 = body.slice(8)
                      if (kak1.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: fkatalog})
                        var say = mek.participant
                       const apu = `*◪* *${pushname} MEMBATALKAN DONASI*
*│◪* *Tag : @${sender.split("@")[0]}*`

                      var options = {
                         text: apu,
                         contextInfo: {mentionedJid: [say]},
                     }
Ramdani.sendMessage(`${ownerContact}@s.whatsapp.net`, options, text, {quoted: floc2})
                    reply('*_MEMBATALKAN DONASI_*')
                    break
                    case 'mie1':
const mana = body.slice(8)
                      if (mana.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: fkatalog})
                        var itu = mek.participant
                       const gkada = `*◪* *ADA YANG MAU SEWABOT*
*│◪* *Tag : @${sender.split("@")[0]}*
*└◪* *Dari : ${pushname}*`

                      var options = {
                         text: gkada,
                         contextInfo: {mentionedJid: [itu]},
                     }
Ramdani.sendMessage(`${ownerContact}@s.whatsapp.net`, options, text, {quoted: floc2})
                    reply(`*Terima Kasih Permintaan Anda Sudah TersampaiKan ke Owner ${namabot}*`)
                    break
                    case `mie3`:
const mane = body.slice(8)
                      if (mane.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: fkatalog})
                        var ito = mek.participant
                       const gkado = `*◪* *ADA YANG MAU DONASI*
*│◪* *Tag : @${sender.split("@")[0]}*
*└◪* *Dari : ${pushname}*`

                      var options = {
                         text: gkado,
                         contextInfo: {mentionedJid: [ito]},
                     }
Ramdani.sendMessage(`${ownerContact}@s.whatsapp.net`, options, text, {quoted: floc2})
                    reply(`*Terima Kasih Permintaan Anda Sudah TersampaiKan ke Owner ${namabot}*`)
                    break

  case 'tomp3':
  if (!isGroup) return reply(mess.only.group)
                    reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=1:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(`Error`)
						hah = fs.readFileSync(ran)
						Ramdani.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: false, quoted: fgc})
						fs.unlinkSync(ran)
					})
					break

case 'wame':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
             Ramdani.updatePresence(from, Presence.composing)
             options = {
             text: `𝚕𝚒𝚗𝚔 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝚖𝚞 : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
              }
              }
              Ramdani.sendMessage(from, options, MessageType.text, {quoted: floc2})
              break
              case 'setname':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					Ramdani.groupUpdateSubject(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: fgc})
					break
                case 'setdesc':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					Ramdani.groupUpdateDescription(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: fgc})
					break 
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Ramdani.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
         case 'resetlink':
         case 'resetlinkgroup':
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
           json = ['action', 'inviteReset', from]
         Ramdani.query({json, expect200: true})
         await sleep(3000)
         reply('Sukses Mereset Link Group!')
         break
case 'tagall':
if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `• @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroupAdmins) return reply(mess.only.admin)
             linkgcf = await Ramdani.groupInviteCode(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
						reply('success')
					} catch (e) {
						console.log('Error :', e)
						var nomorn = mek.participant
                       const tekst12 = 
`https://chat.whatsapp.com/'+linkgcf

Admin ingin mengundang anda ke group`
                      var optionso = {
                         text: tekst12,
                         contextInfo: {mentionedJid: [nomorn]},
                     }
                    Ramdani.sendMessage(`${nomorn.split("@s.whatsapp.net")[0]}`, optionso, text, {quoted: fkontak})
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break 
case 'setelan':
case 'gc':
					if (!isGroup) return reply(mess.only.group)
					console.log(color('[ADMIN INGIN MENGUBAH SETELAN GROUP]','blue')) 
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroupAdmins) return reply(mess.only.admin)
         result =`*OPEN GROUP/CLOSE GROUP*`
              buttons = [{buttonId: `${prefix}membukagroup`,buttonText:{displayText: '𝙤𝙥𝙚𝙣'},type:1},{buttonId:`${prefix}menutupgroup`,buttonText:{displayText:'𝙘𝙡𝙤𝙨𝙚'},type:1},{buttonId:`${prefix}lah1`,buttonText:{displayText:'𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤➡️'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              
              case 'membukagroup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (!isGroupAdmins) return reply(mess.only.admin)
					{
					    reply(`*SUCCESS MEMBUKA GROUP*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}
						break
						case 'menutupgroup':
						if (!isGroup) return reply(mess.only.group)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (!isGroupAdmins) return reply(mess.only.admin)
						{
						reply(`*SUCCESS MENUTUP GROUP*`) 
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					case 'suit1':
					if (!isGroup) return reply(mess.only.group)
					{
					  gunting = [
					    `Kamu *Gunting*\n${namabot} *Kertas*\nKamu Menang 😔`,
					    `Kamu *Gunting*\n${namabot} *Batu*\nKamu Kalah 🙂`,
					    `Kamu *Gunting*\n${namabot} *Gunting*\nKita Seri 😏`
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					result =`${gun}`
					buttons = [{buttonId: `${prefix}lawan3`,buttonText:{displayText: '𝙗𝙖𝙩𝙪'},type:1},{buttonId:`${prefix}lawan2`,buttonText:{displayText:'𝙠𝙚𝙧𝙩𝙖𝙨'},type:1},{buttonId:`${prefix}lawan1`,buttonText:{displayText:'𝙜𝙪𝙣𝙩𝙞𝙣𝙜'},type:1}]
  buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
             }
              break

                               case 'listadmin':
				case 'adminlist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List Admin ${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `${no.toString()} @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break



case 'pinterest':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
 
})
break
case 'creator':
            
                  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard2}, MessageType.contact, { caption: 'tes'}, { quoted: fgc}) 
                  Ramdani.sendMessage(from, `tes`)
                  break   
case 'toimg':
case 'img':
				  if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
						if (!isQuotedSticker) return reply(`Reply stickernya kaka`)
						reply(mess.wait)
						encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
						media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.png')
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(`Err: ${err}`)
							bufferi9nn = fs.readFileSync(ran)
							Ramdani.sendMessage(from, bufferi9nn, image, { caption: 'Done bruhh' })
							fs.unlinkSync(ran)
						})
					break
case 'tomp4':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker!')
            }
            fs.unlinkSync(owgi)
            
            break
case 'emoji':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
            if (isBanned) return reply(mess.only.benned)    
			if (!q) return reply('emojinya bruh?')
			qes = args.join(' ')
			
                       reply(mess.wait)
			emoji.get(`${qes}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
    			
                    break 
                    case 'neon1': 
                    if (!isGroup) return reply(mess.only.group)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break 
                   case 'attp':
                 
					await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     inii = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(inii)}`)
                     Ramdani.sendMessage(from, atetepe, sticker, {quoted: floc2})
                     break         
					case 'ttp':
                 
					await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepey = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     Ramdani.sendMessage(from, atetepey, sticker, {quoted: floc2})
                     break         
              
       case 'text3d':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break                   
       case 'galaxy':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (!isgroup) return reply(mess.only.groupP)
            if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break
      case 'gaming': 
      if (!isGroup) return reply(mess.only.group)
      if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break
      case 'colors': 
      if (!isGroup) return reply(mess.only.group)
      if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break
       case 'kling':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} bot & whatsapp*`)
                   reply(mess.wait)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH KAKS...`, quoted: fvideo})
                   break
                   case 'tahta': 
                   if (!isGroup) return reply(mess.only.group)
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `Nieh`, quoted: fvideo})
                   break
       case 'neon2': 
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=Alphabott&text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: fvideo})
                   break                    
       case 'wall': 
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=Alphabott&text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: fvideo})
                   break  
                   case 's':
                    case 'sticker':
					case 'stiker':
					if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
			
					
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('Eror!')
})
.on('end', function () {
console.log('Finish')
Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : mek}) 
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Eror!`)
})
.on('end', function () {
console.log('Finish')
Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fkontak})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply('Reply Gambar/video minimal 6 detik')
}
break

                
case 'setbio':
				if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Ramdani.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setnama':
					if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Ramdani.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'bass':                
if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
			
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await Ramdani.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Ramdani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 0, quoted:fvideo})
						fs.unlinkSync(ran)
					})
				break
				case 'bcvn':
				if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
				var bcct = args.join(" ")
					Ramdani.updatePresence(from, Presence.composing)
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, buff, audio, { quoted: {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `[𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩]⧐ ${bcct}`, 'jpegThumbnail': fs.readFileSync('./yondaktau.jpeg')}}}, mimetype: 'audio/mp4', duration: 999999999, ptt: true })
						}
						} else{
          reply('reply audio')
							}
						break
						case 'tovn':
				reply('tunggu sebentar') 
				Ramdani.updatePresence(from, Presence.composing)
				if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buffy = await Ramdani.downloadMediaMessage(encmedia)
						 {
							Ramdani.sendMessage(from, buffy, audio, { quoted: fgc2, mimetype: 'audio/mp4', duration: 627173662, ptt: true })
						}
						} else{
          reply('reply audio')
							}
						break
						case 'bcstik':
						anut = await Ramdani.chats.all()
						if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
				var bcv = args.join(" ")
						if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buffv = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anut) {
							Ramdani.sendMessage(_.jid, buffv, sticker, { quoted: {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `[𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩]⧐ ${bcv}`, 'jpegThumbnail': fs.readFileSync('./yondaktau.jpeg')}},
}})
							}
							} else{
          reply('reply sticker')
							}
					break
       case 'wolf': 
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=Alphabott&text1=Ramdaniofc&text2=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
                   case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)   
                       if (args.length < 1) return reply(`Contoh : [ _@tag|teks1|teks2_ ] `)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				Ramdani.sendMessage(from, cs[2], MessageType.text, target)
				break
       case 'tfire':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=Alphabott`)                   
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break                
       case 'ytgold':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
       case 'ytsilver':
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
       case 't3d': 
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=Alphabott&text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
                   
                   case 'logoa':
                   if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
       case 'pornhub':  
                       if (isBanned) return reply(mess.only.benned)   
 if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
                   case 'gantengcek':
                   if (!isGroup) return reply(mess.only.group)
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😎`
                    reply(N), {quoted: fgc}
                    break 
                    case 'cantikcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😇`
                    reply(N)
                    break
                    case 'jahatcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    if (!isGroup) return reply(mess.only.group)
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    if (!isGroup) return reply(mess.only.group)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😘`
                    reply(N)
                    break
                    
                    
                    // TAG MENU 
                     case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
                 if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                   case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					query = args.join(" ")
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝙩𝙖𝙜 𝙩𝙖𝙧𝙜𝙚𝙩 𝙮𝙜 𝙞𝙣𝙜𝙞𝙣 𝙙𝙞 𝙠𝙞𝙘𝙠')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${mentioned[0].split('@')[0]} SEKARANG ANDA MENJADI MEMBER:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]}  SEKARANG ANDA MENJADI MEMBER`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝙩𝙖𝙜 𝙩𝙖𝙧𝙜𝙚𝙩 𝙮𝙜 𝙞𝙣𝙜𝙞𝙣 𝙙𝙞 𝙠𝙞𝙘𝙠')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
       case 'marvel':
       if (!isGroup) return reply(mess.only.group)
                       if (isBanned) return reply(mess.only.benned)   
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: fvn})
                   break
       case 'leavest': 
       if (!isGroup) return reply(mess.only.group)
       if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break                    
     case 'nulis':
     if (!isGroup) return reply(mess.only.group)
     if (isLimit(sender)) return
			        await limitAdd(sender)
                       if (isBanned) return reply(mess.only.benned)    
                   if (args.length < 1) return reply(`[  ×  ] Contoh:\n*${prefix}${command} Ramdani*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=Alphabott`)
                   Ramdani.sendMessage(from, anu, image, {caption: `NIEH`, quoted: floc2})
                   break
               
                     case "sticker":
      case "stiker":
      case "sg":
      case "s":
      if (!isGroup) return reply(mess.only.group)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Ramdani.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: fkatalog,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Ramdani.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: fkatalog,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;

                    case 'bisakah':
				if (!isGroup) return reply(mess.only.group)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: fgc})
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: fgc})
					await limitAdd(sender)
					break
         			  case 'apakah':
         			  if (!isGroup) return reply(mess.only.group)
					apakah = body.slice(1)
					const apa =['Iya','y','g','Tidak','Bisa Jadi','Coba Ulangi','Woya Jelas','Tanyakan Ayam','Y','G']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: fgc})
					await limitAdd(sender)
					break
				case 'rate':
				
				if (!isGroup) return reply(mess.only.group)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: fgc})
					await limitAdd(sender)
					break
                    case 'tts':
					
				if (!isGroup) return reply(mess.only.group)
				if (isLimit(sender)) return
			        await limitAdd(sender)
					if (args.length < 1) return Ramdani.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: fgc})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Textnya mana om', text, {quoted: fgc})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							bufferg = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							Ramdani.sendMessage(from, bufferg, audio, {quoted: fkatalog, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
                    break
                 
case 'xnxx':
if (isLimit(sender)) return
			        await limitAdd(sender)
if (!isgroup) return reply(mess.only.groupP)
                    if (args.length == 0) return reply(`Example: ${prefix + command} di perkosa`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'bc':
                    if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('teksnya mana')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, buff, image, {caption: `❮ *BROADCAST ${namabot}* ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `꧁ 𝚜𝚖𝚒𝚕𝚎𝚋𝚘𝚝𝚣 𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 ꧂\n\n${body.slice(4)}\n\n༄ʙʏ ʀᴀᴍᴅᴀɴɪɢᴀɴᴢ᭄`, {
                                        text: `wa.me/6285879466965`,
                                        matchedText: `wa.me/6285879466965`,
                                        canonicalUrl: `wa.me/6285879466965`,
                                        description: `𝚜𝚖𝚒𝚕𝚎𝚋𝚘𝚝𝚣`,
                                        title: `𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢\n𝚛𝚊𝚖𝚍𝚊𝚗𝚒 `,
                                        jpegThumbnail: thumb
                                }, 'extendedTextMessage', { detectLinks: false }, {quoted: fgc})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					case 'button':
if (!isOwner) return reply(mess.only.owner)
if (args.length == 0) return reply(`Usage: ${prefix}button fitur|display|contenttext|footertext`)
                    get_args = args.join(" ").split("|")
                    fitur = get_args[0]
                    display = get_args[1]
                     result = get_args[2]
                    footer = get_args[3]
buttons = [{buttonId: `${prefix}${fitur}`,buttonText:{displayText: `display`},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${footer}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fvideo},{})
              Ramdani.relayWAMessage(prep)
              break
					case 'totag':
					if (!isGroup) return reply(mess.only.group)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Ramdani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ramdani.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: fkatalog
            }
            ini_buffer = fs.readFileSync(file)
            Ramdani.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Ramdani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ramdani.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Ramdani.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Ramdani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ramdani.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Ramdani.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Ramdani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ramdani.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => { 
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Ramdani.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'xnxxdown':
case 'xxnxdownload':
if (!isgroup) return reply(mess.only.groupP)
if (!q) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${q}`)
nxx = 
`*XNXX DOWNLOADER*
*Title* : ${anu.result.title}
*Durasi* : ${anu.result.duration}
*Rating* : ${anu.result.rating}
*Penonton* : ${anu.result.view}
*Like* : ${anu.result.like}
*Dislike* : ${anu.result.dislike}
*Comment*: ${anu.result.comment}

*VIDEO AKAN DI KIRIM...*`
sendMediaURL(from,`${anu.result.thumbnail}`,nxx)
sendMediaURL(from,`${anu.result.link[0].link}`,`${anu.result.title}`)
break
case 'otakudesu':
if (!isGroup) return reply(mess.only.group)
 if (isBanned) return reply(mess.only.benned)
                                if (isLimit(sender)) return
			        await limitAdd(sender)
if (!q) return reply('apa yg mau di cari?')
res = await Otakudesu(`${q}`).catch(e => {
reply('_[ ! ] Error_')
})
amsu = `*OTAKUDESU SEARCH*

Judul : ${res.result.judul}
Japan : ${res.result.japan}
Rating : ${res.result.rating}
Produser : ${res.result.produser}
Type : ${res.result.type}
Status : ${res.result.status}
Episode : ${res.result.episode}
Durasi : ${res.result.durasi}
Rilis : ${res.result.rilis}
Studio : ${res.result.studio}
Genre : ${res.result.genre}
Sinopsis : ${res.result.sinopsis}
Link : ${res.result.link}`
sendMediaURL(from,`${res.result.thumb}`,`${amsu}`)
 
break
    
case 'lirik':
     if (!isGroup) return reply(mess.only.group)
                                if (isBanned) return reply(mess.only.benned)
                                if (isLimit(sender)) return
			        await limitAdd(sender)
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
teks = body.slice(7)
anu = await fetchJson(`https://franky404.herokuapp.com/api/music/liriklagu?query=${teks}&apikey=Franky`)
console.log(res)
let lirik = `*Lirik Lagu :*

${anu.result}
`
reply(lirik)

break

case 'ytmp4':
if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)    
				    if (isLimit(sender)) return
			        await limitAdd(sender)
			if (args.length === 0) return reply(`Kirim perintah *ytmp4 _linkYt_*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(`eror`) 
				}
				
				break
case 'lah1':
case 'antilink':
if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 result =`꧁Antilink On/Antilink Off꧂`
              buttons = [{buttonId: `${prefix}akhwan2`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤』'},type:1},{buttonId:`${prefix}akhwan1`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤』'},type:1},{buttonId:`${prefix}lah2`,buttonText:{displayText:'𝐰𝐞𝐥𝐜𝐨𝐦𝐞➡️'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              case  'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		             vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            Ramdani.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
              case 'bucin':
              case 'dhgfyuh':
              if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(mess.only.group)
					lont = [
					    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
					    ]
					  anj1 = lont[Math.floor(Math.random() * lont.length)]
					result =`꧁𝐛𝐮𝐜𝐢𝐧꧂`
              buttons = [{buttonId: `${prefix}dhgfyuh`,buttonText:{displayText: '『✤ʙᴜᴄɪɴ✾』'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${anj1}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              case 'galau':
              case 'ddygstupo':
              if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(mess.only.group)
					lontl = [
					    "“Apabila diriku bukanlah bagian dari semangatmu, maka setidaknya aku adalah salah satu orang yang selalu menyebutmu dalam doaku”",
					"“Merelakanmu pergi bukanlah pilihan terbaik, namun meminta agar dirimu kembalipun bukan hal yang tepat. Pasrahkan semuanya kepada Allah karena hanya takdirNyalah yang terbaik”", 
"“Bak alas dari kaca lantas berjalan diatas paku, setapak demi setapak pedih amat tercampak, memendap pedih kelu saat kau sebut dia di hadapanku tiap kali bersama”", 
"“Taman ini,  bunga ini seluruh yang ada disini adalah saksi bahwa kau dan aku pernah sedekat itu, namun kini aku tersadar dirimu tak lagi untukku.”", 
  "“Kau mampu berlari dengan menebar senyum, sedangkan aku terpaku tak sanggup memelukmu, karena bagimu keadaanku ini adalah ketiadaan yang tak pernah ada”", 
"“Aku lebih suka melihatmu yang dingin daripada harus melihatmu terluka dan bersedih saat kita bertemu”", 
"“Saling mengenal dengan dirimu semudah hembusan nafas, namun melupakanmu sesulit aku mengambil bulan”", 
"“Biarkan saja berjuta kata terangkai dalam benakku yang masih tak berani menampakkannya di depanmu. Namun tanpa kusadari ternyata pikiranku telah jauh menguasai hingga berharap bisa bersanding denganmu.”", 
"“Betapa kerasnya desiran angin menghujang tubuhku, terlalu sadis air keluar dari keheningan serta terlalu pedih mengingat kenangan yang mulai membuatku terpaku terbiasa tanpamu”", 
"“Aku dan kamu pernah seerat nadi, namun kini aku dan kamu bagai matahari dan bumi”",
"“Aku adalah orang yang kan selalu menjaga indahnya kisah kita, walaupun pelangi tidak akan selamanya ada”",
"“Seperti malam, ia pun turut berduka saat tahu diriku bukanlah untukmu”",
"“Lantas harus bagaimana diriku melupakanmu? Setiap nada adalah suaramu dan setiap hempasan angina adalah detak jantungmu”",
"“Semenjak kaki kita terhenti, ingatanku hilang dalam sajak yang tak terungkap”", 
"“Aku terjebak dalam sebuah masa dimana aku tengah menunggu, merengkuh ketidakpastian dan membeku dalam ketidakpedulian”", 
"“Jika memang diriku bukanlah semangatmu lagi, setidaknya aku adalah pendukungmu dalam diam, ya dalam setiap sepertiga malamku dirimulah yang tak lupa untuk selalu kusebut dan kudoakan.”", 
"“Memintamu untuk pergi meninggalkanku atau memintamu untuk tetap berada di sampingku bukanlah hal yang terbaik. Biarlah Allah saja yag menuntun kita dengan cara yang indah.”", 
"“Diriku adalah sepatu kaca yang tengah berjalan diatas paku, merasa amat perih ketika dirimu tengah asyik bercerita tentang sosoknya idamanmu yang sempurna.”", 
"“Bangku dan pohon telah menjadi saksi bisu kebersamaan kita yang kini kusadari tak akan pernah terulang lagi.”", 
"“Ketika dirimu berlari dengan tersenyum, aku diam tak berkutik untuk merengkuhmu karena bagi dirimu aku tak pernah ada.”", 
"“Aku lebih memilih dipandang dingin olehmu daripada harus memandangimu berderaian air mata.”", 
"“Ketika mengenal dirimu seringan cara mengambil nafas, maka melupakanmu seperti halnya ku berhenti bernafas.”",
"“Kamu adalah sebuah makna dari sebuah karya, karena takkan pernah ada ingatan yang mampu seabadi kenangan”",
"“Aku adalah seorang pujangga tanpa cinta, berusaha merengkuh dalam penantian sang dewi agar lekas berada dalam pelukan dan lekas dipertemukan”",
"“Aku ingin menjadi sekuat ranting yang mampu merindu walau tak lagi ada sehelaipun daun dan hingga ia tak lagi memiliki kehidupan lagi”",
"“Apa yang aku tulis adalah tentangmu, yang sangat kutakutkan adalah namaku bukanlah ia yang tertulis dalam relung hatimu”",
"“Mata ini tak pernah payah mencarimu, sekalipun yang ada hanyalah bayangan semu dan kabut putih”",
"“Bagaimana aku harus membuang kenangan, lantas dirimu terus berada dalam bayang ingatan”",
"“Aku mampu menapaki hutan bahkan gunung, namun hanya satu yang belum pernah sampai kutapaki yakni hatimu, karena hatimu tergantung membentang dan sangat tinggi”",
"“Aku tahu caranya bagaimana harus berlari sejauh mungkin, tapi yang tersulit adalah berpikir untuk meninggalkanmu”",
"“Ada cahaya dalam senyapku, ada beribu rindu tak terbalas, ada rasa getir dalam rintihku, melihatmu lantas hilang”",
"“Jika yang kau harapkan adalah seseorang yang selalu mengantar bunga untuk dirimu, maaf jika aku hanya mengajakmu merajut bunga mimpi”",
"“Aku lebih baik tidur dan tak terbangun lagi karena terlalu pedih jika harus membuka mata tanpa hadirmu disisiku”",
"“Dapatkah dirimu menungguku sejenak, paling tidak hingga hatiku sembuh dari luka yang tengah menganga ini.”",
"“Yang kuingin bukanlah rangkaian kata – kata yang indah tanpa makna, karena yang kuingin hanya kata sederhana namun penuh makna.”",
"“Kiranya aku belum sempat menjelaskan apa keinginanku, malah kau sudahi kisah ini semaumu.”",
"“Jika saja kala itu, diriku tak sengaja memetik kuncummu lalu membiarkanmu hingga layu, akan ku tanam dirimu di dalam hatiku agar bermekaran benih asmaraku.”",
"“Jika batu yang kerass saja, bisa dibuat hancur oleh setitik air. Maka begitupun hatiku, akan remuk melihat air matamu.”",
"“Aku menunggumu tanpa kau tau, kau membiarkanku dalam penantian yang amat panjang.”",
"“Kakiku mungkin bisa melangkah dengan mudah menjauhimu, namun pandanganmu lah yang membuatku mengurungkan hal itu.”",
"“Pada saat rasa ini tengah bermekaran, tak tau mengapa hadirmu semakin menghilang. Mungkin diriku yang terlalu menggebu menaruh harap padamu.”",
"“Kemarin canda tawa kita lalui berdua, namun semenjak ada kehadirannya mengubah yang awalnya menjadi kita kini hanya tinggal perca.”",
"“Pekat malam menjadi saksi atas ucapan janji kita, namun setelah itu menangis karena akan ketidakmampuan kita untuk menepatinya.”",
"“Kadangkala mata ini merasa sangat iri dengan hati, karena kamu yang selalu ada di hati tak pernah terlihat di mata.”",
"“Kesinilah, ku beritahu akan kesaksian kopi ini yang akan menjadi saksi atas pahitnya penantianku atasmu.”",
"“Dulu dirimu pernah membuatku terbang bahkan hingga naik ke bintang – bintang, namun kini diriku kau hempaskan jauh ke dalam jurang yang curam. Ragaku memang terlihat masih tetap seperti dulu, tapi tidak dengan hatiku.”",
"“Aku memutuskan untuk tetap tinggal bersamamu, karena ada sebagian mimpi yang ingin aku wujudkan bersamamu.”",
"“Jika engkau berniat untuk mengajakku terbang tinggi, seharusnya dirimu tidak menjatuhkan diriku sebelum sampai di tempat yang di tuju.”",
"“Untuk menjadi yang terbaika, engkau harus memiliki mimpi yang besar dan semangat untuk mewujudkannya”",
"“Seringkali kita menyepelekan hal hal yang kecil, padahal dari sanalah lahir suatu yang besar”",
"“harapan dan keinginan ini semestinya sejalan, yah sejalan dengan seberapa besar usaha ia dalam mewujudkannya”",
"“Seberapa jauh seseorang berkelana, maka ia akan menemui sejauh apa yang ia lakukan”",
"“Seorang juara pasti akan percaya pada dirinya sendiri, walaupun tidak ada orang yang mau mempercayainya lagi”",
"“Ketakutan harus dikerdilkan, karena ketakutan adalah musuh besar impian yang akan diwujudkan”",
"“Kerja keras orang tua itu karena ingin anak – anaknya menjadi pribadi yang bukan hanya biasa tapi luar biasa”",
"“orang yang tersesat adalah orang yang terus mengikuti arus keramaian”",
"“Jangan pernah mengorbankan apa yang sangat Anda harapkan dengan apa yang Anda ingin sekarang”",
"“saat orang lain disekitarmu berkata bahwa dirimu telah berubah, sebenarnya hanyalah engkau mulai berhenti untuk tidak melakukan hal – hal yang seperti biasanya mereka ingin Anda melakukannya.”",
"“ketika Anda masih banyak menanggung banyak masalah, berarti itu tanda Allah sayang karena Allah percaya bahwa Anda mampu menghadapinya. Jangan sia – siakan kepercayaan tersebut”",
"“Agar langkah sukses Ada 10 kali lebih cepat, maka Anda perlu mempunyai keberanian untuk mengambil keputusan.”",
"Setiap hariku aku bermimpi, mimpiku dan mimpimu tengah berjatuhan dan gugur. Walaupun begitu aku berharap semoga tidak dengan perasaanmu padaku.", 
"“Janganlah kau menuhankan kemewahan, karena itu jiwa bukan pegadaian. Jangan pula kau berharap kesempurnaan, karena yang kau miliki ini raga bukan permainan.”",
"Ketika aku tahu isi mimpiku adalah dirimu, rasanya telah enyah rasa untuk bangun dari tidur karena aku ingin terus bersamamu.", 
"“Ada banyak alasan untuk membuatku beranjak pergi darimu, tapi ada satu alasan yang membuatku tetap berada disampingku, aku mencintaimu”",
"Aku dalam ketidakpastian dibuat dilema dalam kapalmu bagai pasar yang lenyap tertiup angin", 
"“Aku memberikan hati dengan sepenuhnya, namun yang kudapat hanyalah goresan luka yang membuatku enggan merasakan cinta lagi”",
"Walau rembulan datang silih terganti, cintaku padamu takkan pernah pudah dan mati", 
"“Kamu adalah mimpiku, kamu hanyalah suatu hal yang takkan pernah menjadi nyata dalam hidupku”",
"Terdengar rintih dalam takdir, merenungi alunan nadamu, bersama melewati tinggi rendah alunanmu dalam genggaman kebahagiaan yang ku gambarkan", 
"“Wahai malam, bersenandunglah denganku, belajar mengeja rasa ngilu oleh hembusan anginmu”",
"“Untuk harapan yang tak tersampaikan, kini rasa itu masih tetap tertancap”",
"Kamu ibarat kertas kosong dan aku pena yang menuliskan kisah cinta kita", 
"“Pandanglah ke atas, cari bintang paling terang, di sanalah aku simpan segala cerita tentang dirimu”",
"Dahulu aku dan kamu pernah kita, namun kini mengingatku saja seperti ingin enyah",
"“Cinta adalah sebuah kekuatan, kekuatan besar dari seorang untuk bertahan dengan kelamnya kehidupan”",
"Ketika aku menangis, aku hanya membutuhkan perhatian dan dekapan hangat dari dirimu.", 
"Kesempurnaan cintaw akan didapatkan saat ia mampu bersatu bersanding bersama dengan orang yang sangat dicintainya", 
"Jika cinta adalah sebuah senyuman, maka aku ingin melihat senyummu setiap pagi ketika aku membuka mata", 
"“Bukti cinta sejati adalah cinta kepada sang pencipta yang tak akan pernah memberikan rasa kecewa”",
"“Cinta sejati adalah ketika kamu menemukan seseorang yang bisa menyempurnakan segala kekuranganmu”",
"“Duduklah disampingku, akan kuceritakan segalanya kecuali perpisahan”",
"“Genggam erat tangan ini, sampai nanti sampai aku tak bisa bangun lagi”",
"“Pengembaraan  jauh perjalananku menghentikanku padamu, sebuah akhir tanpa sebuah pilihan",
"“Ketika kamu tidak benar – benar serius denganku maka sebaiknya jangan mendekat dan jangan melangkah maju”",
"“Aku hanya bisa menikmati keindahanmu dari kejauhan, tapi tidak mampu untuk memilikim”",
"“Meskipun kini kau bukan milikku lagi, tapi rasa ini masih tetap milikmu”",
"“Keindahan itu mulai sirna, semenjak dirimu memutuskan pergi dariku”",
"“Meskipun dirimu jauh dari pandanganku, tapi hatiku tetap untukmu”",
"“Biarkan raga yang terpisah, bukan cinta kita”",
"“Andaikan dirimu disini, aku akan menceritakan indahnya pengembaraan cintaku ini”",
"“Jarak ini sungguh menyakitkan, dengan begitu kita tau seberapa besar rasa yang kita punya”",
"Aku sangat membenci waktu dimana ketika waktu kita harus diakhiri dan beranjak terpisah lagi oleh jarak", 
"“Sejauh apapun jarak kita, Aku dan kamu akan tetap dekat di dalam doa”",
"“Jarak yang ada bukanlah menjadi masalah karena ada cinta yang menyatukan kita”",
"“Jika aku dan kamu ditakdirkan bersama, meskipun sejauh apapun jarak yang ada kita tetap akan bersama”",
"“Jarak kita bukanlah hal yang berarti kecuali perasaan itu sendiri”",
"“Jarak bukanlah sebuah alasan yang logis untuk menghilangkan rasa yang kita punya”",
"“Berterimakasihlah pada jarak, dengannya kita tahu apa makna jeda di setiap tanda baca”", 
"“Akan tiba saatnya aku dan kamu berada dalam satu atap tanpa harus terpisahkan oleh jarak yang membentang”",
"“Satu jam waktu terasa satu menit, entah mengapa ketika sedang bersamamu waktu terasa begitu cepat”",
"Sebuah cinta akan semakin bermakna dan terasa begitu indah jika dilandaskan cinta kepadaNya", 
"Ketika memandangmu, aku ingin waktu tiba – tiba terhenti agar aku bisa lebih lama menikmati karya indah tuhan yang satu ini", 
"Bersamamu hilanglah segala resahku, hilang pula segala rasa sedihku karena hanya kamu yang ada dipikiranku", 
"Aku mencintaimu tanpa memandang siapapun kamu, aku mencintaimu karena tidak ada alasan lagi untuk tidak mencintaimu", 
"Kamu adalah sesorang yang selalu berada dalam doaku, yang selalu hadir dalam mimpiku dan aku harap kamu akan selalu ada dihidupku", 
"Aku mencintaimu tanpa adanya alasan. Karena bagiku dirimu bukanlah pertanyaan yang harus diberi alasan. Akan tetapi jawaban atas segala doa yang kupanjatkan", 
"Jika engkau adalah mentari dan aku adalah rembulan, maka aku ingin selalu berada dalam senja, yaitu ketika kita mulai bertemu dan saling pandang", 
"Ketika hidup membutuhkan sebuah alasan, maka satu – satunya alasanku untuk hidup sampai sekarang ini adalah dirimu", 
"Bahagia adalah ketika aku dan kamu menjadi satu dalam bahtera rumah tangga, bersama menuju surgaNya", 
"Kamu adalah satu – satunya bidadari dunia yang Tuhan kirim untuk menghiasi hari – hariku", 
"Aku tidak mencarimu, kamupun tidak mencariku, tapi tuhanlah yang menyatukan kita", 
"Kamu, adalah satu – satunya anugerah Tuhan yang paling besar di dalam hidupku", 
"“Jika cinta adalah sebuah luka, maka biarkan aku menjadi obat untuk semua rasa sakit yang kamu rasakan”",
"“Cinta pengorbanan dan cinta pembodohan itu adalah cinta yang dirasa sama – sama sakit.", 
"“Kau dan aku tak lagi dalam ikatan yang sama. Kau tinggalkanku dalam kenangan sedangkan dirimu bersamanya untuk masa depan.”",
"Aku tanpamu laksana butiran pasir yang terkena angin hingga ke tengah lautan tak tahu arah, kebingungan dan kehilangan arah untuk pulang.", 
"“Ku berikan cinta sepenuhnya padamu, namun apa yang kuperoleh, aku hanya memperoleh luka yang amat dalam bahkan membuatku tak bisa merasakan cinta itu lagi.”",
"Meskipun matahari dan bulan datang silih berganti, rasa cintaku padamu tetap akan selamanya utuh.",
"Kau adalah satu – satunya mimpi yang selalu ku munajatkan disetiap sujud malamku.",
"Jatuh bangun, susah senang aku rela melewatinya asalkan bersama dengan dirimu.",
"Duhai malam, maukah kau menemaniku bersenandung luka dengan diriku ? menerka dan mengeja sajak lara melalui hembusan anginmu.",
"Meski harapku belum sempat terucapkan, namun ia tetap tertancap jelas dalam ingatan.",
"Jika memang dirimu hanyalah sebuah kertas putih kosong maka diriku sebagai pena takkan rela menulis diatasnya, walau sekedar menyatakan perasaan cinta padamu.",
"Lihatlah keatas langit di malam hari, lihatlah bintang – bintang pastikan kamu menemukan yang paling terang karena kepadanyalah aku berbagi kisah tentangmu.",
"“Dahulu dirimu dan diriku dirangkai menjadi kita, namun kini untuk sekedar menyapa saja dirimu bagaikan orang yang tengah amnesia.”",
"Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapa pun.", 
"Waktu adalah satu-satunya yang dapat menyembuhkan patah hati.", 
 "Sembuhkan dulu hatimu sebelum memulai kisah yang baru lagi.", 
"Cinta bukanlah soal fisik yang sempurna, melainkan hati dan penerimaan seutuhnya.", 
 "Seandainya tidak ada badai, pelangi tidak akan muncul. Untuk itu, belajarlah dari badai yang menimpamu.", 
 "Aku bukan pelampiasan di saat pemeran utama tidak ada.", 
 "Berharap dan dikasih harapan itu sama sama sakit, kau tahu sakitnya karena apa? Karena harapan itu belum tentu sesuai dengan kenyataan.", 
"Semua bisa berakhir, orang berubah. Dan kamu tahu apa? Hidup kan terus berjalan.",
"Udah tiga hari gak makan apa-apa. Soalnya gak ada yang ngingetin aku makan.", 
"Dan sebenarnya, pacar orang adalah pacar kita juga, karena kita juga kan orang.", 
 "Cinta itu memang buta, tapi cinta tidak tuli. Cinta bisa bedakan mana suara Honda Jazz dengan Honda Supra.", 
"Mereka bilang cinta itu lebih penting dari uang, tapi pernahkan kamu membayar tagihan pakai pelukan?", 
"Hewan qurban aja dikorbanin lehernya ga sampai putus. Masa hubungan kita udah banyak berkorban akhirnya tetap putus.", 
"Pacarku bilang aku gila, tapi anehnya dia mau sama saya.", 
"Bukannya aku nggak laku, tapi aku adalah jomblo bertahan yang hebat.", 
"Kamu adalah seseorang yang tidak akan pernah aku lupakan dalam hidupku. Karena kamu masih punya utang kepadaku.", 
"Tong sampah saja ada banyak isinya, masak hati aku satu saja nggak ada isinya.", 
"Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.",
"Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja.", 
"Cara dia ngelihat cinta akan berbeda semenjak patah hati itu.",
"Denganmu, jatuh cinta adalah patah hati paling sengaja.",
 "Barangkali Tuhan sedang tidak ingin kamu jatuh cinta. Agar kamu bisa mencintai dirimu lebih lama.",
"Bukannya aku tidak ingin menjadi pacarmu. Aku hanya ingin dipersatukan dengan cara yang benar.", 
"Lebih baik sendiri daripada berdua tapi tanpa kepastian.", 
"Maaf aku lupa ternyata aku bukan siapa-siapa.", 
"Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri.", 
"Jangan memberi perhatian lebih seperti itu, cukup biasa saja tanpa perlu menimbulkan rasa.", 
"Aku memang bukan siapa-siapa untukmu, namun ada sesuatu yang perlu kau tau, kau adalah semangat hidupku.", 
 "Seandainya tidak ada badai, pelangi tidak akan muncul. Untuk itu, belajarlah dari badai yang menimpamu.", 
"Jangan jadikan seseorang sebagai prioritas utamamu sementara kamu hanya jadi pilihannya saja.",
"Sembuhkan dulu hatimu sebelum memulai kisah yang baru lagi.", 
"Menangis. Memaafkan. Belajar. Move on. Biarkan air matamu menyirami benih-benih kebahagiaan masa depanmu.",
 "Ketika kita bertemu tragedi nyata dalam hidup, kita dapat bereaksi dengan dua cara—entah dengan kehilangan harapan dan jatuh ke dalam kebiasaan merusak diri sendiri, atau dengan menggunakan tantangan untuk menemukan kekuatan batin kita.", 
"Terkadang kita tidak sadar sedang berharap kepada orang yang tidak bisa diharapkan.", 
"Jika kamu berani mengucapkan selamat tinggal, kehidupan akan memberikanmu hadiah berupa lembaran baru.","Semua bisa berakhir, orang berubah. Dan kamu tahu apa? Hidup kan terus berjalan.","Terkadang seseorang akan menoleh ke belakang pada apa yang dia miliki, bukan karena dia ingin pergi ke sana tetapi untuk memotivasi agar melakukan lebih baik.","Setelah kamu pergi, aku menjadi sadar bahwa orang baik akan bersanding dengan orang yang baik pula.","banyak hal yang tak ingin kita tinggalkan dalam hidup ini namun semua pasti ada akhir sesuai dengan ketentuannya.","Kenyataan memang tak selalu beriringan dengan harapan tapi bukan berarti kita harus dilanda keputusasaan.","Saat kata-kata jujur tak lagi punya arti, biarkan Tuhan yang membuat manusia memercayai dan meyakini kebenarannya.","Langit tidak selamanya cerah, kadang hujan pun bisa membawa bencana dan perasaan juga sering kali bisa terluka.","Kadang kebahagiaan diungkapkan dengan air mata, dan air mata harus bersembunyi di balik senyuman.", "Ada kelebihan dan kekurangan pada diri tiap orang, yang perlu dilakukan adalah memantapkan kelebihan yang kita miliki bukan meratapi kekurangan yang ada.", "Ketika sakit hati, daripada galau lebih baik kerja keras memperbaiki diri. Karena kesuksesan adalah bentuk balas dendam terbaik.", "Kau yang terbaik, juga terburuk. Kau yang mengajari arti patah hati. Kau beri harap, lalu kau pergi. Garis waktu takkan mampu menghapusmu.","Setiap kali hatimu hancur, pintu terbuka untuk dunia yang penuh dengan permulaan baru, peluang baru.","Dan apa pun yang mungkin menyakitiku hanya akan membuatku lebih kuat pada akhirnya."
]
					  anj2 = lontl[Math.floor(Math.random() * lontl.length)]
					result =`꧁𝐠𝐚𝐥𝐚𝐮꧂`
              buttons = [{buttonId: `${prefix}ddygstupo`,buttonText:{displayText: '『✤ɢᴀʟᴀᴜ✾』'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${anj2}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              case 'claim':
              case 'none':
					if (!isGroup) return reply(`GRUP ONLY`)
					result = `_ANDA MELAKUKAN CLAIM DAN MENDAPATKAN_ = *[${Ramdani3}]*`
              buttons = [{buttonId: `${prefix}none`,buttonText:{displayText: '🔄'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons:  buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              addLevelingLevel(sender, 1)
                    bayarLimit(sender, Ramdani3) 
                    break
              case 'lah9':
case 'akhwan1':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					   {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						antilinkgc = true;
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP INI')
						Ramdani.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} 
					break
					case 'button8':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					   {
						if (isAntiLink2) return reply('UDAH NYALA KAK')
						antilink.push(from)
						antilink2gc = true;
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink2))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP INI')
						Ramdani.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} 
					break
					case 'button9':
                    
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
                        {
						if (!isAntiLink2) return reply('EMANG AKTIF?')
						antilink.splice(from)
						antilink2gc = false;
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink2))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP INI')
					    }
                        break
					case 'leveling':
					case 'lv':
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					result =`꧁LEVELING ON/OFF꧂`
              buttons = [{buttonId: `${prefix}mamti`,buttonText:{displayText: '『𝐦𝐚𝐭𝐢𝐤𝐚𝐧』'},type:1},{buttonId:`${prefix}nyamla`,buttonText:{displayText:'『𝐧𝐲𝐚𝐥𝐚𝐤𝐚𝐧』'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
              case 'nyamla':
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
                    {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    levelinggc = true;
                    fs.writeFileSync('./Ramdani/leveling.json', JSON.stringify(_leveling))
           	        reply('SUKSES AKTIVE LEVELING')
                    }
                    break
                    case 'mamti':
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
                     {
                	_leveling.splice(from)
                levelinggc = false;
                    fs.writeFileSync('./Ramdani/leveling.json', JSON.stringify(_leveling))
                    reply('SUKSES NON ANTIVE LEVELING')
                    } 
                    break
				
                    case 'akhwan2':
                    
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
                        {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						antilink.splice(from)
						antilinkgc = false;
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP INI')
					    }
                        break 
                        
	case 'ytmp3':
	if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)    
				    if (isLimit(sender)) return
			        await limitAdd(sender)
			if (args.length === 0) return reply(`Kirim perintah *ytmp3 _linkyt_*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(`eror`)
				}
				
				break
case 'tiktok':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
if (isBanned) return reply(mess.only.benned)    
if (!q) return reply('link tiktokny?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply('_[ ! ] Server Sedang Error_')
})
console.log(res)
sendMediaURL (from, `${res.result.nowatermark}`,'nih kak')
break


case 'fbdl':
case 'fb':
if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)    
				    if (isLimit(sender)) return
			        await limitAdd(sender)
if (!q) return reply('Linknya?')
const fbdl = require("fbdl-core")
fbdl.getInfo(`${q}`).then( res => {
console.log(res)
sendMediaURL (from,`${res.rawVideo}`,`Judul : ${res.title}\nDurasi: ${res.duration}\nUploadedAt : ${res.uploadedAt}\nPublishedAt : ${res.publishedAt}`)
})

break
case 'ig':
case 'igdl':
		if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)    
				    if (isLimit(sender)) return
			        await limitAdd(sender)
				if (!q) return reply('link Instagramny?')
	var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply('Server sedang Error')
})
console.log(res)
sendMediaURL (from,`${res.result.link}`,`${res.result.desc}`)
       
                    break
case 'suit2':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
					{
					  ker = [
					    `Kamu *Kertas*\n${namabot} *Batu*\nKamu Menang 😔`,
					    `Kamu *Kertas*\n${namabot} *Gunting*\nKamu Kalah 🙂`,
					    `Kamu *Kertas*\n${namabot} *Kertas*\nKita Seri 😏`
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						result =`${kertas}`
					buttons = [{buttonId: `${prefix}lawan3`,buttonText:{displayText: '𝙗𝙖𝙩𝙪'},type:1},{buttonId:`${prefix}lawan2`,buttonText:{displayText:'𝙠𝙚𝙧𝙩𝙖𝙨'},type:1},{buttonId:`${prefix}lawan1`,buttonText:{displayText:'𝙜𝙪𝙣𝙩𝙞𝙣𝙜'},type:1}]
  buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
             }
              break
              case 'level':
                    if (!isLevelingOn) return reply('LEVELING TIDAK AKTIF')
                    if (!isGroup) return reply('GRUB ONLY')
                    const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
             if (userLevel === undefined && userXp === undefined) return reply(`LEVEL MU MASIH KOSONG`)
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `╔═══ ❰ 「 *LEVEL* 」❱ ═══
║ *@${sender.split("@")[0]}*                            
║┣❥ Nama : _${pushname}_
║┣❥ Nomer : _wa.me/${sender.split("@")[0]}_
║┣❥ Tag : _@${sender.split("@")[0]}_
║┣❥ Xp : _${userXp}/${requiredXp}_
║┣❥ Level : _${userLevel}_
╚════ ⸨ *${namabot}* ⸩ ═════`
                    reply(resul)
			    	break     
case 'twitter':
case 'tt':
if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)    
				    if (isLimit(sender)) return
			        await limitAdd(sender)
            if (!q) return reply('link Twitternya?')
             reply(mess.wait)
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'nih kak')
            })
            
            break
case 'fontdown':
if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply('link Invalid!')
teks = args.join(' ')
res = await dafontDown(teks) 
result = `*Dafont Downloader*

*Judul :* ${res[0].judul}
*Style :* ${res[0].style}
*Nama File :* ${res[0].output}
*Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: fgc})

break
case 'yts':
case 'ytsearch' :
if (!isGroup) return reply(mess.only.group)
    if (isLimit(sender)) return
			        await limitAdd(sender)
  if (!q) return reply('Cari apa?')
  let results = await yts(q)
  let wktod = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
      *YOUTUBE SEARCH*
      
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
    *TIPE CHANNEL YOUTUBE*
    
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  reply(wktod)
  break
  case 'clone':
					if (!isGroup) return reply(`*HANYA BISA DIGUNAKAN DI GRUP`)
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Ramdani.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Ramdani.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(`eror`)
					}
					await limitAdd(sender)
					break
					case 'clearall':{
					if (!isOwner) return reply(mess.only.owner)
					let chiit = await Ramdani.chats.all()
                    for (let i of chiit){
                   Ramdani.modifyChat(i.jid, 'delete', {
                   includeStarred: false
                       })
                    }
                 reply(`*_Success clearall_*`)
                    }
					break
					
		
	case "caripesan":
					if (!isGroup) return reply(mess.only.group)
					if (isLimit(sender)) return
			        await limitAdd(sender)
        if (!q) return reply("pesannya apa?");
        let v = await Ramdani.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await Ramdani.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
        case 'bcvideo':
        if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('teks?')
					var bccf = args.join(" ")
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359,quoted: {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./yondaktau.jpeg')}}}, caption: `[𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩]\n\n${bccf}`})
						}
							} else{
          reply('success broadcast video')
							}
					break
					case 'bcimg':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('teks?')
					var bcc = args.join(" ")
					anuu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						bufff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anuu) {
							Ramdani.sendMessage(_.jid, bufff, image, { quoted: {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "SMILEBOTZ", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./yondaktau.jpeg')}}}, caption: `[𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩]\n\n${bcc}`})
							}
							} else{
          reply('success broadcast image')
							}
					break
  


case 'fontsearch':
case 'dafont':
if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Font Apa Yg Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
await dafontSearch(`${teks}`).then( res => {
let ada= res[0]
result = `*Dafont Search*

*Judul :* ${ada.judul}
*Style :* ${ada.style}
*Link :* ${ada.link}`
reply(result)
})

break
case 'setppbot':
 
					if (!isOwner) return reply(mess.only.owner)
				    Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption *${prefix}setppbot* atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break 

case 'hidetag':
if (isLimit(sender)) return
			        await limitAdd(sender)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
teks = args.join(' ')
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Ramdani.sendMessage(from, teks, text, {contexInfo: {mentionedJid: jids}, quoted: fgc})
break
case 'sticktag':
if (isLimit(sender)) return
			        await limitAdd(sender)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isQuotedSticker) return reply('Tag Sticker Nya Oum')
teks = body.slice(9)
stik = await downloadM()
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Ramdani.sendMessage(from, stik, sticker, {contexInfo: {mentionedJid: jids}, quoted: fgc})
break

case 'tebak':
if (!isGroup) return reply(mess.only.group)
   result =`꧁𝙩𝙚𝙗𝙖𝙠꧂`
  buttons = [{buttonId: `${prefix}${tebakk}`,buttonText:{displayText: `${tebaks}`},type:1},
  
{buttonId:`${prefix}${tebakk}`,buttonText:{displayText:`${tebaks}`},type:1},

{buttonId:`${prefix}${tebakk}`,buttonText:{displayText:`${tebaks}`},type:1}]

  buttonsMessage = { 

contentText: `${result}`,
  
footerText: `𝐭𝐞𝐛𝐚𝐤 𝐜𝐨𝐢𝐧, 𝐬𝐚𝐥𝐚𝐡 𝐥𝐢𝐦𝐢𝐭 𝐛𝐞𝐫𝐤𝐮𝐫𝐚𝐧𝐠 4, 𝐦𝐞𝐧𝐚𝐧𝐠 𝐥𝐢𝐦𝐢𝐭 𝐝𝐢 𝐭𝐚𝐦𝐛𝐚𝐡 5`,

buttons: buttons, headerType: 1 }

  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break


					 case 'tebak4':
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup) return reply(mess.only.group)
					  tebak5 = [
					    "Wrong....., limitmu berkurang 4"
					    ]
					  tebak6 = tebak5[Math.floor(Math.random() * tebak5.length)]
					isLimit(sender, 4) 
					  Ramdani.sendMessage(from, tebak6, MessageType.text, {quoted: fgc})
              break
					case 'tebak7':
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup) return reply(mess.only.group)
					  tebak8 = [
					    "You Win limit mu bertambah5"
					    ]
					  tebak9 = tebak8[Math.floor(Math.random() * tebak8.length)]
					bayarLimit(sender, 5) 
						Ramdani.sendMessage(from, tebak9, MessageType.text, {quoted: fgc})
              break
				case 'tebak10':
				if (isBanned) return reply(mess.only.benned)    
				if (!isGroup) return reply(mess.only.group)
					  tebak11 = [
					    "Wrong...., limitmu berkurang 4"
					    ]
					  tebak12 = tebak11[Math.floor(Math.random() * tebak11.length)]
					isLimit(sender, 4) 
					  Ramdani.sendMessage(from, tebak12, MessageType.text, {quoted: fgc})
              break
					case 'bank':
					if (isBanned) return reply(mess.only.benned)    
				if (!isGroup) return reply(mess.only.group)
				const kantong = checkATMuser(sender)
				gwjsdph2wj = `
┏⊱ 「 ʙᴀɴᴋ 」⊰━┓*
┣⊱ *𝚗𝚊𝚖𝚊* : ${pushname}
┣⊱ *𝚗𝚘𝚖𝚎𝚛* : ${sender.split("@")[0]}
┣⊱ *𝚞𝚊𝚗𝚐* : ${uangkau}
┗━━━━━━━━━━`
Ramdani.sendMessage(from, gwjsdph2wj, MessageType.text, {quoted: fvideo})
				break


case 'mediafire':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgc})

break
case 'suit':
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender)) return
			        await limitAdd(sender)
  result =`Pilih gunting/batu/kertas`
  buttons = [{buttonId: `${prefix}suit3`,buttonText:{displayText: '𝙗𝙖𝙩𝙪'},type:1},{buttonId:`${prefix}suit2`,buttonText:{displayText:'𝙠𝙚𝙧𝙩𝙖𝙨'},type:1},{buttonId:`${prefix}suit1`,buttonText:{displayText:'𝙜𝙪𝙣𝙩𝙞𝙣𝙜'},type:1}]
  buttonsMessage = { contentText: `${result}`, footerText: `${namabot}`, buttons: buttons, headerType: 1 }
  prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
              break
case 'tourl':
if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Ramdani.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            
            break
          case 'shortlink':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(mess.wait)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
       case 'shortlink2':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(mess.wait)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break 
           case 'fox':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fgc})
                   break
       case 'dog':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fgc})
                   break
       case 'cat':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fgc})
                   break
       case 'panda':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fgc})
                   break
       case 'panda1':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fkontak})
                   break
       case 'bird':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fkontak})
                   break
      case 'koala':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak `, quoted: fkontak})
                   break
       case 'meme':  
                       if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: floc2})
                   break
                   case 'ssweb':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `Nieh`, quoted: freply})
                   break
      case 'smoke':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Ramdani*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `Nieh`, quoted: freply})
                   break 
       case 'rainbow':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Ramdani*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   Ramdani.sendMessage(from, anu, image, {caption: `Nieh`, quoted: freply})
                   break        
         case 'textfont':  
                     if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Ramdani`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'kapital':  
                     if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Ramdani`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
        case 'boomtext': 
        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Ramdani&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'jadian':
				   if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
        
            case 'limit':                
if (!isGroup) return reply(mess.only.group)
                    checkLimit(sender)
					break 
 
             case 'addstiker':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await Ramdani.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	Ramdani.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: fgc})
      				break
		        	case 'addvn':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await Ramdani.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	Ramdani.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: fgc}) 
			      	break
		         	case 'getvn':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	Ramdani.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: fgc})
			     	break
			        case 'getstiker':  
		        	case 'gets':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	Ramdani.sendMessage(from, result, sticker)
			     	break
                    case 'liststiker':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		Ramdani.sendMessage(from, teks.trim(), extendedText, {  quoted: fgc})
		      		break
		        	case 'listvn':  
	         		case 'vnlist':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		Ramdani.sendMessage(from, teks.trim(), extendedText, {  quoted: fgc})
		    		break
		        	case 'addimage':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await Ramdani.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		Ramdani.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: fgc})		     	 
		     		break
				
					case 'getimage':  
                    case 'getimg':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				Ramdani.sendMessage(from, buffer, image, {  quoted: fgc})
	      			break
		        	case 'imagelist':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	Ramdani.sendMessage(from, teks.trim(), extendedText, {  quoted: fgc})
			    	break
		        	case 'addvideo':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await Ramdani.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	Ramdani.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: fgc}) 
	     			break
			        case 'getvideo':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	Ramdani.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: fgc})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	Ramdani.sendMessage(from, teks.trim(), extendedText, {  quoted: fgc})
			      	break			
case 'allmenu':
				
				if(!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
				console.log(color(`[Menampilkan semua fitur bot]`,`blue`))
                result =`꧁${namabot}꧂
╔════════════⧐
┣➤ ${ucapanFakereply}
┗════════════⧐
*꧁Runtime: ${runtime(process.uptime())}꧂*`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '✧×𝐨𝐰𝐧𝐞𝐫×✧'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: `
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║═╣║║╔╣║║║║║═╣
║║║║═╣╚╣╚╣║║║║║═╣
╚══╩═╩═╩═╩═╩╩╩╩═╝
╔════════════⧐
║❥𝙝𝙖𝙧𝙞
┣➤ *${tampilHari}*
║❥𝙟𝙖𝙢
┣➤ *${tampilJam}*
╚════════════⧐
╔═══❰ 𝚒𝚗𝚏𝚘 𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝚊 ❱══⧐
║┣❥ *Nama: ${pushname}*
║┣❥ *Nomer: wa.me/${sender.split("@")[0]}*
║┣❥ *Role: ${role}*
║┣❥ *limit : ${limitawal}\day*
┗━═══❍════❍═══════❍⧐
╔═══❰ 𝚒𝚗𝚏𝚘 𝚐𝚛𝚘𝚞𝚙 ❱═════⧐
╠➤ 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 = ${antilinkgc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤2 = ${antilink2gc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐧𝐬𝐟𝐰 = ${nsfwgc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 = ${welcomegc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐥𝐞𝐯𝐞𝐥𝐢𝐧𝐠 = ${levelinggc ? "_[𝚖𝚎𝚗𝚢𝚊𝚕𝚊]_" : "_[𝚖𝚊𝚝𝚒]_"}
╠➤ 𝐬𝐭𝐚𝐭𝐮𝐬 = ${bangc ? "_[𝚋𝚊𝚗𝚌𝚑𝚊𝚝]_" : "_[𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝]_"}
╚════❍═════❍══════❍⧐
╔[]══════✧𝐪𝐮𝐨𝐭𝐞𝐬 ✧══════[]╗
✘[${yekan}]✘ 
╚[]══════✧ 𝐪𝐮𝐨𝐭𝐞𝐬✧══════[]╝
╔═❰ 『 𝚐𝚊𝚖𝚎 𝚖𝚎𝚗𝚞 』❱══❍⧐
┣❏ *${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ*
┣❏ *${prefix}ᴅᴇʟᴛᴛ*
┣❏ *${prefix}ꜱᴜɪᴛ*
┣❏ *${prefix}ɢᴇʟᴜᴅ*
┣❏ *${prefix}ᴅᴇʟɢᴇʟᴜᴅ*
┣❏ *${prefix}ᴛᴏᴅ*
┣❏ *${prefix}ꜱʟᴏᴛ*
┣❏ *${prefix}ᴀᴘᴀᴋᴀʜ*
┣❏ *${prefix}ʙɪꜱᴀᴋᴀʜ*
┣❏ *${prefix}ᴋᴀᴘᴀɴᴋᴀʜ*
┣❏ *${prefix}ʀᴀᴛᴇ*
┣❏ *${prefix}ᴛᴇʙᴀᴋ*
┗━═══❍════❍═════❍⧐
╔══❰ 『 𝚘𝚠𝚗𝚎𝚛 𝚖𝚎𝚗𝚞 』❱══⧐           
┣❏ *${prefix}ꜱᴇᴛᴄᴍᴅ*
┣❏ *${prefix}ᴅᴇʟᴄᴍᴅ*
┣❏ *${prefix}ʟɪꜱᴛᴄᴍᴅ*
┣❏ *${prefix}ꜱᴇᴛᴘʀᴇꜰɪx*
┣❏ *${prefix}ᴄʟᴇᴀʀᴀʟʟ*
┣❏ *${prefix}ᴄʟᴏɴᴇ*
┣❏ *${prefix}ʙᴀɴ*
┣❏ *${prefix}ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ/ᴏꜰꜰ*
┣❏ *${prefix}ᴀᴜᴛᴏᴄᴏᴍᴘᴏꜱɪɴɢ ᴏɴ/ᴏꜰꜰ*
┣❏ *${prefix}ᴜɴʙᴀɴ*
┣❏ *${prefix}ꜱᴇᴛʟɪᴍɪᴛ*
┣❏ *${prefix}ʙᴜɢɢᴄ*
┣❏ *${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ*
┣❏ *${prefix}ʙᴄᴠɴ*
┣❏ *${prefix}ʙᴄꜱᴛɪᴋ*
┣❏ *${prefix}ʙᴄᴠɪᴅᴇᴏ*
┣❏ *${prefix}ʙᴄɪᴍɢ*
┣❏ *${prefix}ʙʟᴏᴄᴋ*
┣❏ *${prefix}ᴜɴʙʟᴏᴄᴋ*
┣❏ *${prefix}ꜱᴇᴛʀᴇᴘʟʏ* 
┣❏ *${prefix}ꜱᴇᴛɴᴀᴍᴀʙᴏᴛ*
┣❏ =>
┣❏ >
┗━═══❍════❍════❍⧐
╔═❰ 『 𝚐𝚛𝚘𝚞𝚙 𝚖𝚎𝚗𝚞 』❱══⧐           
┣❏ *${prefix}ᴀᴅᴅ*
┣❏ *${prefix}ᴄᴀʀɪᴘᴇꜱᴀɴ*
┣❏ *${prefix}ᴄʟᴀɪᴍ*
┣❏ *${prefix}ᴅᴇʟᴠᴏᴛᴇ*
┣❏ *${prefix}ꜱᴇᴛᴇʟᴀɴ*
┣❏ *${prefix}ᴋɪᴄᴋ*
┣❏ *${prefix}ʟɪɴᴋɢᴄ*
┣❏ *${prefix}ᴋɪʀɪᴍ*
┣❏ *${prefix}ꜱɪᴅᴇʀ*
┣❏ *${prefix}ᴠᴏᴛɪɴɢ*
┣❏ *${prefix}ʀᴇꜱᴇᴛʟɪɴᴋ*
┣❏ *${prefix}ᴀɴᴛɪʟɪɴᴋ*
┣❏ *${prefix}ᴀɴᴛɪʟɪɴᴋ2*
┣❏ *${prefix}ᴡᴇʟᴄᴏᴍᴇ*
┣❏ *${prefix}ɴꜱꜰᴡ*
┣❏ *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
┣❏ *${prefix}ᴅᴇᴍᴏᴛᴇ*
┣❏ *${prefix}ʟᴠ*
┣❏ *${prefix}ꜱᴇᴛᴅᴇꜱᴄ*
┣❏ *${prefix}ꜱᴇᴛɴᴀᴍᴇ*
┣❏ *${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ*
┣❏ *${prefix}ʟᴇᴠᴇʟ*
╠═══❰ 『 𝚖𝚊𝚔𝚎𝚛 』❱════⧐
┣❏ *${prefix}ɴᴇᴏɴ1*
┣❏ *${prefix}ᴛ3ᴅ*
┣❏ *${prefix}ɢᴀʟᴀxʏ*
┣❏ *${prefix}ɢᴀᴍɪɴɢ*
┣❏ *${prefix}ᴄᴏʟᴏʀꜱ*
┣❏ *${prefix}ᴋʟɪɴɢ*
┣❏ *${prefix}ᴛᴀʜᴛᴀ*
┣❏ *${prefix}ɴᴇᴏɴ2*
┣❏ *${prefix}ᴡᴀʟʟ*
┣❏ *${prefix}ᴡᴏʟꜰ*
┣❏ *${prefix}ᴛꜰɪʀᴇ*
┣❏ *${prefix}ʏᴛɢᴏʟᴅ*
┣❏ *${prefix}ʏᴛꜱɪʟᴠᴇʀ*
┣❏ *${prefix}ᴛᴇxᴛ3ᴅ*
┣❏ *${prefix}ʟᴏɢᴏᴀ*
┣❏ *${prefix}ᴘᴏʀɴʜᴜʙ*
┣❏ *${prefix}ᴍᴀʀᴠᴇʟ*
┣❏ *${prefix}ʟᴇᴀᴠᴇꜱᴛ*
┣❏ *${prefix}ɴᴜʟɪꜱ*
┣❏ *${prefix}ꜱᴍᴏᴋᴇ* 
┣❏ *${prefix}ʀᴀɪɴʙᴏᴡ* 
╚════❍════❍════❍⧐
╔═❰ 『 𝚒𝚗𝚏𝚘 𝚖𝚎𝚗𝚞  』❱═⧐
┣❏ *${prefix}ᴡᴀᴍᴇ*
┣❏ *${prefix}q*
┣❏ *${prefix}ɪɴꜰᴏꜱᴛɪᴄᴋ*
┣❏ *${prefix}ᴏᴡɴᴇʀ*
┣❏ *${prefix}ɢʀᴏᴜᴘʟɪꜱᴛ*
┣❏ *${prefix}ᴄᴇᴋɢʀᴜᴘ*
╚════❍════❍════❍⧐
╔═❰ 『 𝚜𝚝𝚘𝚛𝚊𝚐𝚎 𝚖𝚎𝚗𝚞  』❱═⧐
┣❏ *${prefix}ᴛᴏᴍᴘ3*
┣❏ *${prefix}ᴅᴇᴛɪᴋᴠɴ*
┣❏ *${prefix}ᴘʀᴏꜰɪʟᴇ*
┣❏ *${prefix}ʀᴏʙᴏᴛ* 
┣❏ *${prefix}ɢᴇᴍᴜᴋ* 
┣❏ *${prefix}ʙᴀʟɪᴋ* 
┣❏ *${prefix}ᴛᴏᴍᴘ4*
┣❏ *${prefix}ꜱᴡᴍ*
┣❏ *${prefix}ᴛᴏɪᴍɢ*
┣❏ *${prefix}ᴛᴏᴠɴ*
┣❏ *${prefix}ꜱᴛɪᴄᴋᴇʀ*
┣❏ *${prefix}ᴅᴏɴᴀꜱɪ*
┣❏ *${prefix}ꜱᴇᴡᴀʙᴏᴛ*
┣❏ *${prefix}ᴀᴅᴅꜱᴛɪᴋᴇʀ* 
┣❏ *${prefix}ᴀᴅᴅᴠɴ* 
┣❏ *${prefix}ɢᴇᴛᴠɴ* 
┣❏ *${prefix}ɢᴇᴛꜱ* 
┣❏ *${prefix}ʟɪꜱᴛꜱᴛɪᴋᴇʀ* 
┣❏ *${prefix}ʟɪꜱᴛᴠɴ* 
┣❏ *${prefix}ᴀᴅᴅɪᴍᴀɢᴇ* 
┣❏ *${prefix}ɢᴇᴛɪᴍᴀɢᴇ* 
┣❏ *${prefix}ɪᴍᴀɢᴇʟɪꜱᴛ* 
┣❏ *${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ* 
┣❏ *${prefix}ɢᴇᴛᴠɪᴅᴇᴏ* 
┣❏ *${prefix}ᴠɪᴅᴇᴏʟɪꜱᴛ*
┣❏ *${prefix}ꜱᴘᴀᴍɪᴍɢ* 
┣❏ *${prefix}ꜱᴘᴀᴍᴀᴜᴅɪᴏ* 
┣❏ *${prefix}ꜱᴘᴀᴍꜱᴛɪᴋᴇʀ*
┗━══❍════❍════❍⧐     
╔═❰ 『 ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ 』❱═⧐                  
┣❏ *${prefix}ᴘʟᴀʏ*
┣❏ *${prefix}ʏᴛᴅʟ*
┣❏ *${prefix}ʏᴛᴍᴘ4*
┣❏ *${prefix}ʏᴛᴍᴘ3*
┣❏ *${prefix}ᴛɪᴋᴛᴏᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ*
┣❏ *${prefix}ɪɢᴅʟ*
┣❏ *${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ*
┣❏ *${prefix}ʟɪʀɪᴋ*
┣❏ *${prefix}ʏᴛꜱ*
┣❏ *${prefix}ᴄᴇʀᴘᴇɴ*
┣❏ *${prefix}ᴄᴇʀɪᴛᴀʜᴏʀᴏʀ*
┣❏ *${prefix}ᴄᴇʀꜱᴇx*
┣❏ *${prefix}ᴇᴍᴏᴊɪ*
┣❏ *${prefix}ɢᴏᴏɢʟᴇ*
┣❏ *${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ*
┣❏ *${prefix}ᴀᴛᴛᴘ*
┣❏ *${prefix}ᴛᴛᴘ*
┣❏ *${prefix}ꜱꜱᴡᴇʙ* 
┣❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ*
┣❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ2* 
┣❏ *${prefix}ᴅᴀꜰᴏɴᴛ*
┣❏ *${prefix}ꜰᴏɴᴛᴅᴏᴡɴ*
┣❏ *${prefix}xɴxx*
┣❏ *${prefix}xɴxxᴅᴏᴡɴ*
┣❏ *${prefix}ɴʜᴇɴᴛᴀɪᴘᴅꜰ*
┣❏ *${prefix}ʟᴏʟɪ*
┣❏ *${prefix}ᴡᴀɪꜰᴜ*
┣❏ *${prefix}ʜᴜꜱʙᴜ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚕𝚊𝚒𝚗𝚗𝚢𝚊 』❱══⧐                  
┣❏ *${prefix}ʙᴜᴄɪɴ*
┣❏ *${prefix}ɢᴀʟᴀᴜ*
┣❏ *${prefix}ʀᴜɴᴛɪᴍᴇ*
┣❏ *${prefix}ɢʀᴏᴜᴘʟɪꜱᴛ*
┣❏ *${prefix}ᴄɪᴛᴀᴄɪᴛᴀ*
┣❏ *${prefix}ꜱᴄ*
┣❏ *${prefix}ꜰᴏx* 
┣❏ *${prefix}ᴅᴏɢ* 
┣❏ *${prefix}ᴄᴀᴛ* 
┣❏ *${prefix}ᴘᴀɴᴅᴀ* 
┣❏ *${prefix}ᴘᴀɴᴅᴀ1* 
┣❏ *${prefix}ʙɪʀᴅ* 
┣❏ *${prefix}ᴋᴏᴀʟᴀ* 
┣❏ *${prefix}ᴍᴇᴍᴇ* 
┣❏ *${prefix}ᴛᴇxᴛꜰᴏɴᴛ* 
┣❏ *${prefix}ᴋᴀᴘɪᴛᴀʟ* 
┣❏ *${prefix}ʙᴏᴏᴍᴛᴇxᴛ* 
┣❏ *${prefix}ᴊᴀᴅɪᴀɴ*
┣❏ *${prefix}ʜᴜʀᴜꜰᴋᴇʙᴀʟɪᴋ*
┣❏ *${prefix}ᴍᴏʀᴇ* 
┣❏ *${prefix}ꜰɪᴛɴᴀʜ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚝𝚊𝚐 𝚖𝚎𝚗𝚞 』❱══⧐     
┣❏ *${prefix}ɢᴀɴᴛᴇɴɢ*
┣❏ *${prefix}ᴄᴀɴᴛɪᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀ*
┣❏ *${prefix}ᴊᴀɢᴏ*
┣❏ *${prefix}ʜᴇʙᴀᴛ*
┣❏ *${prefix}ꜱᴀᴅʙᴏʏ*
┣❏ *${prefix}ᴘᴀᴋɢɪʀʟ*
┣❏ *${prefix}ꜱᴀᴅɢɪʀʟ*
┣❏ *${prefix}ᴘᴀᴋʙᴏʏ*
┣❏ *${prefix}ʙᴇʙᴀɴ*
┣❏ *${prefix}ʙᴀɪᴋ*
┣❏ *${prefix}ᴊᴀʜᴀᴛ*
┗━══❍════❍════❍⧐     
╔══❰ 『 𝚌𝚎𝚔 𝚖𝚎𝚗𝚞 』❱══⧐     
┣❏ *${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ*
┣❏ *${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ*
┣❏ *${prefix}ᴊᴇʟᴇᴋᴄᴇᴋ*
┣❏ *${prefix}ᴘɪɴᴛᴇʀᴄᴇᴋ*
┣❏ *${prefix}ᴊᴀɢᴏᴄᴇᴋ*
┣❏ *${prefix}ʙᴇʙᴀɴᴄᴇᴋ*
┣❏ *${prefix}ʙᴀɪᴋᴄᴇᴋ*
┣❏ *${prefix}ᴊᴀʜᴀᴛᴄᴇᴋ*
┣❏ *${prefix}ᴘᴀᴋʙᴏʏᴄᴇᴋ*
┣❏ *${prefix}ᴘᴀᴋɢɪʀʟᴄᴇᴋ*
┣❏ *ᴄᴇᴋᴘʀᴇꜰɪx*
╠════❍════❍════❍⧐
╠═══❰ ꧁𝙩𝙝𝙭 𝙩𝙤𝙤꧂ ❱══⧐
║❥𝐫𝐚𝐦𝐝𝐚𝐧𝐢
║❥𝐟𝐫𝐚𝐧𝐤𝐲
┗━═══❍════❍════❍⧐`, buttons:  buttons, headerType: 1 }
     prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc2},{})
              Ramdani.relayWAMessage(prep)
              break


            
///*******//
default:
if (budy.includes(`${command}`)){
                    if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (isBanned) return   
				    namastc = `${command}`
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	Ramdani.sendMessage(from, result, sticker)
			     	} 
if (budy.includes("~")){
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.owner)
result =`${namabot}`
              buttons = [{buttonId: `${prefix}truey`,buttonText:{displayText: 'ʙᴀɴᴄʜᴀᴛ'},type:1},{buttonId:`${prefix}falsey`,buttonText:{displayText:'ᴜɴʙᴀɴᴄʜᴀᴛ'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: `꧁ʙᴀɴᴄʜᴀᴛ ᴏʀ ᴜɴʙᴀɴᴄʜᴀᴛ꧂ `, buttons: buttons, headerType: 1 }
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage}, {quoted: fgc},{})
              Ramdani.relayWAMessage(prep)
            } 
             
if (budy.startsWith('^')){
	if (!isOwner) return reply(mess.only.owner)
try {
	if (!isOwner) return reply(mess.only.owner)
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: fgc})
} catch(err) {
e = String(err)
reply(e)
}
}  

if (budy.startsWith('>')){
                if (!isOwner) return reply(mess.only.owner)
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return reply(bang)
                }
                try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
                } catch(e){
                 reply(String(e))
                }
                }

                        
					

				if (budy.includes("Cekprefix")){
				    reply(`BOT PREFIX ${prefix}`, {quoted: fvideo})
				    }
				if (budy.includes("assalamualaikum")){
				    reply(`Waalaikumsalam Warohmatullahi Wabarokatuh`, {quoted: fvideo})
				    }
				if (budy.includes("Assalamualaikum")){
				    reply(`Waalaikumsalam Warohmatullahi Wabarokatuh`, {quoted: fvideo})
				    }
				if (budy.includes("Assalamu'alaikum")){
				    reply(`Waalaikumsalam Warohmatullahi Wabarokatuh`, {quoted: fvideo})
				    }
			
if (fs.existsSync(`./tmp/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@]s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 


Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Ramdani.sendMessage(from, starGame, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Ramdani.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Ramdani.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Ramdani.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
 Ramdani.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `* Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Ramdani.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
if (budy.startsWith('=>')){
if (!isOwner) return reply(mess.only.owner)
try {
return Ramdani.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}

📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted: fkatalog})
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}

 
   			   		if (isGroup && isSimi && budy != undefined && body.startsWith(``)) {
				console.log(budy)
				muehe = await simih(budy)
				console.log(muehe)
				reply(muehe)
				} else {
				console.log(color('『𝐜𝐨𝐦𝐦𝐚𝐧𝐝 』','yellow'), (color('꧁[ꜱᴍɪʟᴇʙᴏᴛᴢ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʀᴀᴍᴅᴀɴɪ]꧂','orange')))
				}
				}
                } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   }
	})
	} 
starts()
