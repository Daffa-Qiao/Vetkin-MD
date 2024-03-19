require('./settings')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const chalk = require('chalk');
const { modul } = require('./module');
const { os, axios, baileys, cheerio, child_process, crypto, cookie, FormData, fetch, fs, fsx, Jimp, jsobfus, PhoneNumber, process, util,lookup } = modul;
const moment = require('moment-timezone');
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const uploadImage = require('./lib/uploadFile')
const ffstalk = require('./scrape/ffstalk')
const { sticker } = require('./lib/sticker')
const uploadFile = require('./lib/uploadFile')
const { webp2png } = require('./lib/webp2mp4')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const { remini } = require('./scrape/remini')
const kirleys = require('@adiwajshing/baileys')
const { mediafiredl } =  require ('@bochilteam/scraper')
const {
    fromBuffer
} = require('file-type')
require('typescript')

const {
    exec
} = require("child_process")
const {
    smsg,
    fetchJson,
    getBuffer,
    getGroupAdmins,
    msToDate,
    isUrl,
    sleep,
    clockString,
    hitungmundur,
    checkBandwidth,
    runtime,
    getRandom,
} = require('./lib/simple')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { JSDOM } = require('jsdom')
const jimp_1 = require('jimp')
const { toPTT, toAudio } = require('./lib/converter')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/store'); 
const OpenAI = require("openai");
let setting = require("./key.json");
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const openai = new OpenAI({ apiKey: setting.keyopenai });
const {
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome
} = require("./lib/store")
const similarity = require('similarity');
const { metadata } = require('figlet');
const threshold = 0.72
const cron = require('node-cron')

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
premium: {},
banned: {},
group: {},
settings: {},
donate: {},
others: {},
sticker: {},
...(global.db || {})
}

module.exports = alpha = async (alpha, m, chatUpdate, store, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_open, set_close, _welcome, _left,mentionedJidList) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alpha.decodeJid(alpha.user.id)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll")
        const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz("Asia/Jakarta").locale('id').format('a')
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const quoted = m.quoted ? m.quoted : m
        const from = m.chat
        const qmsg = (quoted.msg || quoted)
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPrem = prem.includes(m.sender)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
        const isWelcome = _welcome.includes(m.chat)
        const isLeft = _left.includes(m.chat)
        const delay = time => new Promise(res => setTimeout(res, time))
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const reply = (text) => {
            alpha.sendFakeLink(m.chat, text, salam, footer_text, pp_bot, myweb, pushname, m)
        }
        const getStyle = (style, style2) => {
            let listt = `*${style2} yang kamu masukkan salah*\n\n_berikut list ${style2} yang benar, Total_ *${style}* _${style2}_\n\n`
            no = 0
            for (var i = 0; i < style.length; i++) {
                no += 1
                listt += no.toString() + '.  ' + style[i] + '\n'
            }
            reply(listt)
        }
        async function getGcName(groupID) {
            try {
                let data_name = await alpha.groupMetadata(groupID)
                return data_name.subject
            }
            catch (err) {
                return '-'
            }
        }
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            const limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        try {
            const isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPrem ? global.limitawal.premium : global.limitawal.free
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
            }
            } catch (err) {
            console.error(err)
            }
            for (let jid of mentionUser) {
                let user = global.db.users[jid]
                if (!user) continue
                let afkTime = user.afkTime
                if (!afkTime || afkTime < 0) continue
                let reason = user.afkReason || ''
                m.reply(`dia sedang ${reason ? + reason : 'AFK'} selama ${clockString(new Date - afkTime)}`.trim())
                }
            if (db.users[m.sender].afkTime > -1) {
                let user = global.db.users[m.sender]
                m.reply(`Kamu berhenti AFK ${user.afkReason ? 'setelah ' + user.afkReason : ''} selama ${clockString(new Date - user.afkTime)}
                `.trim())
                user.afkTime = -1
                user.afkReason = ''
                    }
                    async function replyprem(text) {
                        m.reply(`maaf kak, tapi fitur Ini khusus *user premium* atau *group yang ada bot* ini\n\nmau jadi user premium?\nketik .premium`)
                        }
        if (m.message) {
            alpha.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', m.chat))
        }
        if (isAntiLink) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
                if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
                let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`untung link gc sendiri`)
                if (isAdmins) return reply(`admin coy, mana bisa dikick`)
                if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await alpha.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (isAntiLink2) {
            if (budy.match(`chat.whatsapp.com`)) {
                if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
                let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
                if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
                if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await alpha.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
            }
        }
        if (isAntiWame) {
            if (budy.match(`wa.me/`)) {
                reply(`*「 ANTI WA ME 」*\n\nterdeteksi wa.me, kamu akan di kick !`)
                if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
                if (isAdmins)return reply(`Upsss... gajadi, kasian adminnya klo di kick`)
                if (isCreator)return reply(`Upsss... gajadi, kasian owner ku klo di kick`)
                if (m.key.fromMe)return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await alpha.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,

                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (isAntiWame2) {
            if (budy.match(`wa.me/`)) {
                if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
                if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
                if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await alpha.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,

                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
            }
        }
        // if (isAntiLFP) {
        //     if (budy.match(`wa.me/`)) {
        //         reply(`*「 ANTI WA ME 」*\n\nterdeteksi wa.me, kamu akan di kick !`)
        //         if (!isBotAdmins) reply(`Upsss... gajadi, bot bukan admin`)
        //         if (isAdmins)reply(`Upsss... gajadi, kasian adminnya klo di kick`)
        //         if (isCreator) reply(`Upsss... gajadi, kasian owner ku klo di kick`)
        //         if (m.key.fromMe) reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        //         await alpha.sendMessage(m.chat, {
        //             delete: {
        //                 remoteJid: m.chat,

        //                 fromMe: false,
        //                 id: m.key.id,
        //                 participant: m.key.participant
        //             }
        //         })
        //         alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        //     }
        // }
        
 
        if(isCmd && !isCreator && grup_only){
          reply("Bot hanya bisa digunakan dalam grup")
          return
        }

        switch (command) {
            //menu
            case 'bot':{
                reply('BOT SUDAH ON')

            }
            break
            case 'sc':{
                reply('SC Script bot ini dari : https://github.com/Daffa-Qiao/Vetkin-MD')
            }break
            case 'bokep':
            case 'hentai':{
                reply ('Surat Al-Isra ayat 32 menjelaskan, janganlah kalian mendekati zina dengan melakukan hal-hal yang mengarah kepadanya. Sebab zina adalah perbuatan keji yang sangat jelas keburukannya. Jalan itu adalah merupakan jalan yang paling buruk')
            }break
            case 'thanks':
                {reply("u'r welcome")}
                break
            case 'makasi':{ 
                reply('sama-sama cuy')
            }break
            case 'owner':
            case 'developer':
            case 'dev':
            case 'creator': {
                alpha.sendContact(m.chat, global.owner, m)
            }
            break
            case 'm':
            case 'main':
            case 'menu':
            case 'help': {
                //bulan,tanggal
                var mundur = await hitungmundur(4, 10)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.menu(pushname, salam, mundur,namaowner, namabot, jam, tanggal, runtime(process.uptime()), prefix)
                }, {
                    quoted: m
                })
            }
            break
            case 'prem': {
                //bulan,tanggal
                if(!isPrem)return replyprem(mess.premium)
                var mundur = await hitungmundur(4, 10)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.menuprem(pushname, salam, mundur,namaowner, namabot, jam, tanggal, runtime(process.uptime()), prefix)
                }, {
                    quoted: m
                })
            }
            break
            case 'grup':{
                //bulan,tanggal
                if(!m.isGroup)return reply(mess.group)
                var mundur = await hitungmundur(4, 10)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.group(pushname, salam, mundur,namaowner, namabot, jam, tanggal, runtime(process.uptime()), prefix)
                }, {
                    quoted: m
                })
            }
            break
            case 'random':{
                //bulan,tanggal
                var mundur = await hitungmundur(4, 10)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.random(pushname, salam, mundur,namaowner, namabot, jam, tanggal, runtime(process.uptime()), prefix)
                }, {
                    quoted: m
                })
            }
            break
            case 'own':{
                if(!isCreator)return reply(mess.owner)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.owner(pushname, salam, prefix)
                }, {
                    quoted: m
                })
            }
            break            
            case 'info':{
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: info.info(pushname, salam)
                }, {
                    quoted: m
                })
            }
            break
            case 'anime':{
                //bulan,tanggal
                var mundur = await hitungmundur(4, 10)
                alpha.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: help.anime(pushname, salam, mundur,namaowner, namabot, jam, tanggal, runtime(process.uptime()), prefix)
                }, {
                    quoted: m
                })
            }
            break
            //stiker
            case 'sgif':
                case 'stikerin':
                case 's':
                case 'sticker':
                case 'stiker': {
                   if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
                   if (/image/.test(mime)) {
                      let media = await quoted.download()
                      let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                         packname: global.packname,
                         author: global.author
                      })
                      await fs.unlinkSync(encmedia)
                   } else if (/video/.test(mime)) {
                      if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
                      let media = await quoted.download()
                      let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                         packname: global.packname,
                         author: global.author
                      })
                      await fs.unlinkSync(encmedia)
                   } else {
                      reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
                   }
                }
                break
            //group
            case 'welcome': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (args[0] === "on") {
                    if (isWelcome) return reply(`Udah on`)
                    _welcome.push(m.chat)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                    reply('Sukses mengaktifkan welcome di grup ini')
                }
                else if (args[0] === "off") {
                    if (!isWelcome) return reply(`Udah off`)
                    let anu = _welcome.indexOf(m.chat)
                    _welcome.splice(anu, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                    reply('Sukses menonaktifkan welcome di grup ini')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
            break
            case 'left':
            case 'goodbye': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (args[0] === "on") {
                    if (isLeft) return reply(`Udah on`)
                    _left.push(m.chat)
                    fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                    reply('Sukses mengaktifkan goodbye di grup ini')
                }
                else if (args[0] === "off") {
                    if (!isLeft) return reply(`Udah off`)
                    let anu = _left.indexOf(m.chat)
                    _left.splice(anu, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                    reply('Sukses menonaktifkan goodbye di grup ini')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
            break
            case 'setwelcome': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
                if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
                addSetWelcome(text, m.chat, set_welcome_db)
                reply(`Successfully set welcome!`)
            }
            break
            case 'changewelcome': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
                if (isSetWelcome(m.chat, set_welcome_db)) {
                    changeSetWelcome(q, m.chat, set_welcome_db)
                    reply(`Sukses change set welcome teks!`)
                }
                else {
                    addSetWelcome(q, m.chat, set_welcome_db)
                    reply(`Sukses change set welcome teks!`)
                }
            }
            break
            case 'delsetwelcome': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`Belum ada set welcome di sini..`)
                removeSetWelcome(m.chat, set_welcome_db)
                reply(`Sukses delete set welcome`)
            }
            break
            case 'setleft': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
                if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
                addSetLeft(q, m.chat, set_left_db)
                reply(`Successfully set left!`)
            }
            break
            case 'changeleft': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
                if (isSetLeft(m.chat, set_left_db)) {
                    changeSetLeft(q, m.chat, set_left_db)
                    reply(`Sukses change set left teks!`)
                }
                else {
                    addSetLeft(q, m.chat, set_left_db)
                    reply(`Sukses change set left teks!`)
                }
            }
            break
            case 'delsetleft': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
                if (!isSetLeft(m.chat, set_left_db)) return reply(`Belum ada set left di sini..`)
                removeSetLeft(m.chat, set_left_db)
                reply(`Sukses delete set left`)
            }
            break
            case 'antiwame': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
                if (args[0] === "on") {
                    if (isAntiWame) return reply(`Udah aktif`)
                    antiwame.push(m.chat)
                    fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                    reply('Successfully Activate Antiwame In This Group')
                }
                else if (args[0] === "off") {
                    if (!isAntiWame) return reply(`Udah nonaktif`)
                    let anu = antiwame.indexOf(m.chat)
                    antiwame.splice(anu, 1)
                    fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                    reply('Successfully Disabling Antiwame In This Group')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
            break
            case 'antiwame2': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
                if (args[0] === "on") {
                    if (isAntiWame2) return reply(`Udah aktif`)
                    antiwame2.push(m.chat)
                    fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                    reply('Successfully Activate antiwame2 In This Group')
                }
                else if (args[0] === "off") {
                    if (!isAntiWame2) return reply(`Udah nonaktif`)
                    let anu = antiwame2.indexOf(m.chat)
                    antiwame2.splice(anu, 1)
                    fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                    reply('Successfully Disabling antiwame2 In This Group')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
            break
            case 'open':
            case 'buka': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot bukan admin")
                alpha.groupSettingUpdate(m.chat, 'not_announcement')
                const textOpen = await getTextSetOpen(m.chat, set_open);
                reply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
            }
            break
            case 'antilink': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot harus menjadi admin")
                if (args[0] === "on") {
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(m.chat)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                    reply('Successfully Activate Antilink In This Group')
                }
                else if (args[0] === "off") {
                    if (!isAntiLink) return reply(`Udah nonaktif`)
                    let anu = antilink.indexOf(m.chat)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                    reply('Successfully Disabling Antilink In This Group')
                }
                else {

                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
            break
            case 'antilink2': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot harus menjadi admin")
                if (args[0] === "on") {
                    if (isAntiLink2) return reply(`Udah aktif`)
                    antilink2.push(m.chat)
                    fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                    reply('Successfully Activate antilink2 In This Group')
                }
                else if (args[0] === "off") {
                    if (!isAntiLink2) return reply(`Udah nonaktif`)
                    let anu = antilink2.indexOf(m.chat)
                    antilink2.splice(anu, 1)
                    fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                    reply('Successfully Disabling antilink2 In This Group')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }

            }
            break
            case 'close':
            case 'tutup': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot bukan admin")
                alpha.groupSettingUpdate(m.chat, 'announcement')
                const textClose = await getTextSetClose(m.chat, set_close);
                reply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
            }
            break
            case 'revoke':{
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                alpha.groupRevokeInvite(m.chat)
                reply('berhasil mengganti tautan grup')
            }   
            break
            case 'h':
            case 'hidetag': {
                if (!m.isGroup) return reply("Khusus grup")
                if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
                let tek = m.quoted ? quoted.text : (text ? text : "")
                alpha.sendMessage(m.chat, {
                    text: tek,
                    mentions: participants.map(a => a.id)
                }, {})
            }
            break
            case 'buang':
            case 'kick':{
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin blok!')            
                if (!isBotAdmins) return reply("Bot bukan admin")
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await alpha.groupParticipantsUpdate(m.chat, [users], 'remove')
                    reply("babai binatang")
                }  
                break
            case 'tagall': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botNotAdmin)
                me = m.sender
                let teks = `*👥 Tag all dari :*  @${me.split('@')[0]}\n*🗞️Pesannya : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                alpha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
            case 'admin':
            case 'promote':{
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot bukan admin")
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await alpha.groupParticipantsUpdate(m.chat, [users], 'promote')
                    reply("berhasil menjadikan admin")
                }
                break
            case 'memb': 
            case 'demote':{
                    if (!m.isGroup) return reply('Fitur Khusus Group!')
                    if (!isAdmins) return reply('Fitur Khusus admin!')
                    if (!isBotAdmins) return reply("Bot bukan admin")
                    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await alpha.groupParticipantsUpdate(m.chat, [users], 'demote')
                        reply("berhasil menurunkan menjadi member")
                    }    
            break
            case 'afk': {
                if (!m.isGroup) return reply(mess.group)
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`@${m.sender.split`@`[0]} telah AFK ${text ? '\nalasan : ' + text : 'tanpa alasan'}`)}
            break
            case 'delete': 
            case 'del': {
                if (!m.isGroup)return reply (mess.group)
                if (!isAdmins) return reply (mess.admin)
                if (!m.quoted) throw false
                let { chat, fromMe, id } = m.quoted
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
                reply(mess.done)
            }
                break
                case 'addlist':
                    if (!m.isGroup) return reply(mess.group)
                    if (!isAdmins && !isCreator) return reply(mess.botNotAdmin)
                    var args1 = q.split("@")[0]
                    var args2 = q.split("@")[1]
                    if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${prefix+command} tes@apa`)
                    if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
                    addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                    reply(`Berhasil menambah List menu : *${args1}*`)
                break
                case 'dellist':{
                    if (!m.isGroup) return reply(mess.group)
                    if (!isAdmins && !isCreator) return reply(mess.botNotAdmin)
                    if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
                    var arr_rows = [];
                    for (let x of db_respon_list) {
                    if (x.id === m.chat) {
                    reply(`Mau Delete Yang Mana?\n\n${x.key}`)
                }}
                }
                break     
         case 'add':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
            if (!isAdmins) return reply('Fitur Khusus admin!')
            if (!isBotAdmins) return reply("Bot bukan admin")
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'add')
            reply('berhasil mengembalikan binatang kembali ke habitat')
            }    
            break
            //anime
            case "akira":
            case "anna":
            case "asuna":
            case "ayano":
            case "ayuzawa":
            case "bocchi":
            case "chisato":
            case "elaina":
            case "ikuyo":
            case "kaela":
            case "kaguya":
            case "kaori":
            case "kotori":
            case "loli":
            case "miku":
            case "sakura":
            case "sasuke":
            case "shinka":
            case "shizuka":
            case "shota":
            case "takina":
            case "waifu":
            case "yotsuba":
            case "yumeko":{               
                if(m.isGroup) return reply(mess.private)
                reply(mess.wait)
                alpha.sendMessage(m.chat, { image: { url: `https://api.koi.pics/api/sfw/${command}?apikey=${apikeykoi}` }, caption: mess.done }, { quoted: m })
            }
            break 
            case 'premium': 
            case 'donasi':
            case 'sewa':
            case 'donate':{
                const donate =`*「 Donasi Untuk Vetkin-BOT 」*

*Hai Kak ${pushname}*         
Kamu ingin menjadi premium/sewa bot ini?\ncaranya cukup mudah, yaitu dengan donasi ke owner.\nKeuntungan menjadi premium:\n1.Akan mendapatkan fiture premium\n2.Bot bisa diundang ke dalam group kamu dengan cara memberikan link ke owner.

*hanya cukup bayar 5k/bulan*

❏──「 *PAYMENT* 」
│• *DANA:* 085894861350 an 
│daffajiab
❏──────────────\\
\njika sudah bayar cukup kirim buktinya ke owner dengan mengirim format bukti pembayaran + nomor/link groupnya.\nuntuk nomor owner bisa ketik .owner`
                alpha.sendMessage(m.chat, { image: fs.readFileSync('./image/dana.jpeg'), caption: donate }, { quoted : m })
            }    
            break
            //premium
            case 'ppcp':
            case 'ppcouple':
            case 'couple': {
                if (m.isGroup) return reply('Fitur Khusus Chat Pribadi!');
                if (!isPrem)return replyprem(mess.premium)
                let data = fs.readFileSync('./lib/ppcp.js');
                let jsonData = JSON.parse(data);
                let randIndex = Math.floor(Math.random() * jsonData.length);
                let json = jsonData[randIndex];
                let randCowo = await getBuffer(json.cowo)
                alpha.sendMessage(m.chat, {
                image: randCowo,
                caption: '*Boy*',
                quoted: m
                })
                let randCewe = await getBuffer(json.cewe)
                alpha.sendMessage(m.chat, {
                image: randCewe,
                caption: '*Girl*',
                quoted: m
                })
            }
            break
            case "ai": 
            case "openai": 
            case "chatgpt": 
            case "ask":
                try {
                    if(!m.isGroup&&!isPrem)return replyprem(mess.premium)
                    //bisa digunakan dalam grup walaupun tidak premium
                    if (!m.isGroup||isPrem){
                    if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Bagaimana bumi berputar`);
                    reply('jawaban sedang diproses, tunggu beberapa detik')
                    const chatCompletion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: q }],
                    model: 'gpt-3.5-turbo'
                    });
                    await m.reply(chatCompletion.choices[0].message.content);}
                if (m.isGroup||!isPrem){
                if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Bagaimana bumi berputar`);
                reply('jawaban sedang diproses, tunggu beberapa detik')
                const chatCompletion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: q }],
                    model: 'gpt-3.5-turbo'
                });
                
                await m.reply(chatCompletion.choices[0].message.content);}
                } catch (error) {
                if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
                } else {
                console.log(error);
                m.reply("Maaf, sepertinya ada yang error :"+ error.message);
                }
            }
                break;
        //   case "img": 
        //   case "ai-img": 
        //   case "image": 
        //   case "images": 
        //   case "dall-e": 
        //   case "dalle":
        //     try {
        //       // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
        //       if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
        //       if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
        //       const image = await openai.images.generate({ 
        //         model: "dall-e-3",
        //         prompt: q, 
        //         n: 1,
        //         size: '1024x1024' 
        //         });
        //       //console.log(response.data.data[0].url) // see the response
        //       alpha.sendImage(from, image.data[0].url, text, mek);
        //       } catch (error) {
        //     if (error.response) {
        //       console.log(error.response.status);
        //       console.log(error.response.data);
        //       console.log(`${error.response.status}\n\n${error.response.data}`);
        //     } else {
        //       console.log(error);
        //       m.reply("Maaf, sepertinya ada yang error :"+ error.message);
        //     }
        //   }
        //     break
            case 'hd':
            case 'remini': {
                //return reply(mess.perbaikan)
                if (m.isGroup) return reply(mess.private)
                if (!quoted) return reply(`Fotonya Mana?`)
                if (!isPrem)return replyprem(mess.premium)
                if (/video/.test(mime)) return reply(`hanya untuk foto!`)
                if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let proses = await remini(media, "enhance");
                alpha.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
                //ini menggunakan rest api
                // try {
                //     if (isMedia) {
                //         let media = await alpha.downloadAndSaveMediaMessage(quoted)
                //         let encmedia = await TelegraPh(media)
                //         await 
                //         alpha.sendMessage(m.chat, { image: { url: `https://rest-api.akuari.my.id/ai/remini3?urlimg=${encmedia}` }, caption: mess.done }, { quoted: m })
                //     } 
                // } catch {
                //     m.reply("Proses Gagal :(");
                //     // delete conn.unblur[m.sender]
                // }
            }
                break
                //random stiker                
                case "patrick":
                case "popoci":
                case "sponsbob":
                case "kawan-sponsbob":
                case "awoawo":
                case "chat":
                case "benedict":
                case "dbfly":
                case "dino-kuning":
                case "doge":
                case "gojosatoru":
                case "hope-boy":
                case "jisoo":
                case "kr-robot":
                case "kucing":
                case "lonte":
                case "manusia-lidi":
                case "menjamet":
                case "meow":
                case "nicholas":
                case "tyni": {
                    if(m.isGroup)reply (mess.private)
                    if (!isPrem)return replyprem(mess.premium)
                    reply(mess.wait)
                    let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
                    if (!res.ok) throw await res.text()
                    let img = await res.buffer()
                    let savestik = await alpha.sendImageAsSticker(m.chat, img, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(savestik)
                }
                break
                case 'wm':{
                    if(!isPrem)return replyprem(mess.premium)
                    const swn = args.join(" ")
                    const pcknm = swn.split("|")[0];
                    const atnm = swn.split("|")[1];
            if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
            if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: pcknm,
                  author: atnm
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
            }
                }break
                case 'emojimix': {
                    if (!isPrem) return replyprem(mess.premium)
                    let [emoji1, emoji2] = text.split`+`
                    if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
                    if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
                    reply(mess.wait)
                    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                    for (let res of anu.results) {
                        let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, {
                            packname: global.packname,
                            author: global.author,
                            categories: res.tags
                        })
                        await fs.unlinkSync(encmedia)
                    }
                    
                }
                break
                case 'igstalk': {
                if (!isPrem)return replyprem(mess.premium)
                if (args.length == 0) return reply(`${prefix+command} username\nExample: ${prefix + command} daffa.reivan`)
                    reply(mess.wait)
                    try{let api = await fetch(`https://toxicdevilapi.vercel.app/stalk/instagram?username=${args[0]}`)
                    let response = await api.json()
                    if (response.status) {
                        let userInfo = response.result
                        let caption = `▢ *Username*: ${userInfo.username}\n▢ *Full Name*: ${userInfo.name}\n▢ *Biography*: ${userInfo.bio}\n▢ *Posts*: ${userInfo.posts}\n▢ *Followers*: ${userInfo.followers}\n▢ *Following*: ${userInfo.following}`
                        return alpha.sendFile(m.chat, userInfo.profile.hd, 'pp.png', caption, m)
                    } else {
                        reply('Sistem Sedang Bermasalah!')
                    }} catch (e) {
                        console.log(e)
                        m.reply('Sistem Sedang Bermasalah!')
                    }
                    }
                    break
                    case 'wikipedia':      
                    case 'wiki': {
                        if (!isPrem)return replyprem(mess.premium)
                        if (args.length == 0) return reply(`Example: ${prefix + command} Tempe`)
                        reply(mess.wait)
                        kueri = args.join(" ")
                        drut = await fetchJson(`https://toxicdevilapi.vercel.app/search/wikipedia?query=${kueri}&lang=id`)
			            ini_teks = `[ *WIKIPEDIA SEARCH FOR ${kueri}* ]\n\n`
			            ini_teks += `${drut.result.info}`
			            reply(ini_teks)
                        }
                        break
            //downloader
                case "tiktoknowm":
                case "tiktok": { 
                    if (m.isGroup) return reply (mess.private)
                    if (!isPrem)return replyprem(mess.premium)
                    if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`)
                    if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`)
                        reply(mess.wait)
                        let anu = await fetchJson(global.api('koi', '/api/downloader/tiktok', {
                            url: args[0]
                        }, 'apikey'))
                        var result = await anu
                        var result = result.result
                        alpha.sendMessage(from, {
                            video: {
                                url: result.no_watermark
                            },
                            mimetype: "video/mp4",
                            caption: mess.done
                        }, {
                            quoted: m
                        })
                    }
                    break
                    case "ig":
                    case "igreels":
                    case "igvideo":
                    case "instagram": {
                        if (m.isGroup) return reply (mess.private)
                        if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link instagram video\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/CJ8XKFmJ4al/`)
                        if (!isPrem)return replyprem(mess.premium)
                        if (!isUrl(args[0]) && !args[0].includes("instagram.com")) return reply(`Kirim perintah:\n${prefix+command} https://www.instagram.com/p/CJ8XKFmJ4al/`)
                        reply(mess.wait)
                        let anu = await fetchJson(global.api('koi', '/api/downloader/instagram', {
                            url: args[0]
                        }, 'apikey'))
                        alpha.sendMessage(from, {
                            video: {
                                url:anu.data[0].url
                                },
                                mimetype: "video/mp4",
                                caption: mess.done
                                }, {
                                quoted: m
                                })
                            }
                         break
                    case "fb": {
                        if (m.isGroup) return reply (mess.private)
                        if (!isPrem)return replyprem(mess.premium)
                        if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link facebook video\n\nContoh penggunaan:\n${prefix+command} https://www.facebook.com/daff485/videos/1186147718868165`)
                        if (!isUrl(args[0]) && !args[0].includes("facebook.com")) return reply(`Kirim perintah:\n${prefix+command} https://www.facebook.com/daff485/videos/1186147718868165`)
                        reply(mess.wait)
                        let anu = await fetchJson(global.api('koi', '/api/downloader/instagram', {
                            url: args[0]
                        }, 'apikey'))
                        alpha.sendMessage(from, {
                            video: {
                                url:anu.data[0].url
                                },
                            mimetype: "video/mp4",
                                caption: mess.done
                                }, {
                                quoted: m
                                    })
                                }
                             break
                    case "youtube-mp4":
                    case "ytmp4": 
                    case "yt": {
                        if (m.isGroup) return reply (mess.private)
                        if (!isPrem)return replyprem(mess.premium)
                        if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link youtube video\n\nContoh penggunaan:\n${prefix+command} https://www.youtube.com/watch?v=lpq211-wXiM`)
                        if (!isUrl(args[0]) && !args[0].includes("youtube.com")) return reply(`Kirim perintah:\n${prefix+command} https://www.youtube.com/watch?v=lpq211-wXiM`)
                        reply(mess.wait)
                        let anu = await fetchJson(global.api('koi', '/api/downloader/youtube-video', {
                            url: args[0]
                        }, 'apikey'))
                        alpha.sendMessage(m.chat, { video: {url: anu.data.url }, caption: `*Title:* ${anu.data.title}
                        \n*Channel:* ${anu.data.channel}
                        \n*Upload:* ${anu.data.published}
                        \n*Viewers:* ${anu.data.views}` },{ quoted:m })
                            }
                         break
                         case 'yta':  
                         case 'ytmp3': 
                         case 'ytaudio': {
                             if (m.isGroup) return reply (mess.private)
                             if (!isPrem)return replyprem(mess.premium)
                             if (!text) return reply(`Example : ${prefix + command} https://youtube.com/channel/UC_5iLk7KvfsHW4CIWFyzas`)
                             reply(mess.wait)
                             let anu = await fetchJson(`https://api.koi.pics/api/downloader/youtube-audio?url=${text}&apikey=${apikeykoi}`)
                             await alpha.sendMessage(m.chat, { audio: { url: anu.data.url }, mimetype: 'audio/mp4',caption:mess.done }, { quoted: m })
                             reply (mess.done)
                         }
                         break
                
                    //random
                    case 'toimage': 
                    case 'toimg': {
                        if (!m.quoted) reply(`Balas stiker dengan caption *${prefix + command}*`);
                        if (!/webp/.test(mime)) throw `Balas stiker dengan caption *${prefix + command}*`;
                        let media = await m.quoted.download();
                        let out = Buffer.alloc(0);
                        if (/webp/.test(mime)) {
                          out = await uploadImage(media);
                        }
                        await alpha.sendMessage(m.chat, { image: { url: out }, caption: '*DONE*' }, { quoted: m });
                      
                    }
                    break
                    case 'smeme':{
                        if (m.isGroup)return reply(mess.private)
                        let [atas, bawah] = text.split`|`
                        let q = m.quoted ? m.quoted : m
                        let mime = (q.msg || q).mimetype || ''
                        if (!mime) reply(`balas gambar dengan perintah\n\n${prefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`)
                        if (!/image\/(jpe?g|png)/.test(mime)) reply(`_*Mime ${mime} tidak didukung!*_`)
                        let img = await q.download()
                        let url = await uploadImage(img)
                        let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
                        alpha.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })
                    }
                    break 
                    case 'menfes': 
                    case 'confess':{
                        if (m.isGroup)  return reply(mess.private)
                        alpha.menfess = alpha.menfess ? alpha.menfess : {}
                        if (!text) return reply( `*Cara penggunaan :*\n\n${prefix + command} nomor|pesan\n\n*Contoh:* ${prefix + command} ${m.sender.split`@`[0]}|Hai.\n\n*NOTED:* no harus 62\nPesan yang dikirim tidak bisa dihapus!\n dan hanya bisa untuk confess!`);
                        let [jid, pesan] = text.split('|');
                        if ((!jid || !pesan)) return reply (`*Cara penggunaan :*\n\n${prefix + command} nomor|pesan\n\n*Contoh:* ${prefix + command} ${m.sender.split`@`[0]}|Hai.`);
                        jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                        let data = (await alpha.onWhatsApp(jid))[0] || {};
                        if (!data.exists) return reply ('Nomer tidak terdaftar di whatsapp.');
                        if (jid == m.sender) return reply ('tidak bisa mengirim pesan menfess ke diri sendiri.')
                        var nomor = m.sender
                        let mf = Object.values(alpha.menfess).find(mf => mf.status === true)
                        if (mf) return !0
                        let id = + new Date
                        let teks = `Hai @${data.jid.split("@")[0]}, saya bot Whatsapp. Seseorang mengirimin kamu pesan lewat fitur menfess..\n\nDari: *ANONYMOUS*\nPesan:${pesan}\n\ntidak bisa membalas pesan yang dikirim`.trim();
                        await alpha.relayMessage(data.jid, {
                            extendedTextMessage:{
                                text: teks, 
                                    contextInfo: {
                                        mentionedJid: [data.jid],
                                        externalAdReply: {
                                            title: 'M E N F E S S',
                                            mediaType: 1,
                                            previewType: 0,
                                            renderLargerThumbnail: true,
                                            thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyz1dMPkZuNleUyfXPMsltHwKKdVddTf4-A&usqp=CAU',
                                            sourceUrl: ''
                                            }
                                        }
                                }}, {})
                                lidt = `Sukses Mengirim Pesan\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nKe : wa.me/${jid.split("|")[0].replace(/[^0-9]/g, '')}\nPesan kamu : ${pesan}\n\n\n*NOTED*: Pesan yang sudah dikirim tidak bisa dihapus,dan hanya bisa disampaikan!`
                                return reply(lidt)
                                        return !0                                     
                }
                break          
                case 'ml':
                case 'heroml': {
                    if (m.isGroup) return reply(mess.private)
                    if (!q) return reply(`Example ${prefix+command} Gusion`)
                    reply(mess.wait)
                    let anu = await fetchJson(`https://api.koi.pics/api/others/heroml?q=${q}&apikey=${apikeykoi}`)
                    teks = `*Desc:* ${anu.data.desc}
                    *Release:* ${anu.data.release}
                    *Role:* ${anu.data.role}
                    *Specialty:* ${anu.data.specialty}
                    *Lane:* ${anu.data.lane}
                    *Price:* ${anu.data.price}
                    *Durability:* ${anu.data.gameplay_info.durability}
                    *Offense:* ${anu.data.gameplay_info.offense}
                    *Control:* ${anu.data.gameplay_info.control_effect}
                    *Difficulty:* ${anu.data.gameplay_info.difficulty}
                    
                    *Alias:* ${anu.data.story_info_list.Alias}
                    *Origin:* ${anu.data.story_info_list.Origin}
                    *Species:* ${anu.data.story_info_list.Species}
                    *Gender:* ${anu.data.story_info_list.Gender}
                    *Affiliation:* ${anu.data.story_info_list.Affiliation}
                    *Weapons:* ${anu.data.story_info_list.Weapons}
                    *Abilities:* ${anu.data.story_info_list.Abilities}
                    *Height:* ${anu.data.story_info_list.Height}
                    \n
                    `
                    for (let v of anu.data.attributes) {
                        teks += `*Attribute* : ${v.attribute}\n`
                        teks += `*Level* : ${v.level_1}\n`
                        teks += `*Growth* : ${v.growth}\n\n───────────────\n\n`
                    }
                    alpha.sendMessage(m.chat, { image: { url: anu.data.hero_img },  caption: teks }, { quoted: m })
                }
                break
                case 'schat': {
                    if(m.isGroup)return reply(mess.private)
                    const { quote } = require('./lib/quote.js')
                    if (!q) return ('Masukan Text')
                    let ppnyauser = await await alpha.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                    const rest = await quote(q, pushname, ppnyauser)
                    reply(mess.wait)
                    alpha.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
                    }
                    break
                case 'sertitolol': {
                    if (m.isGroup) return reply(mess.private)
                    if (!q) return reply(`Example ${prefix+command} Doni`)
                    reply(mess.wait)
                    alpha.sendMessage(m.chat, { image: { url: `https://api.koi.pics/api/maker/tolol?text=${q}&apikey=${apikeykoi}` }, caption: mess.done }, { quoted: m })
                    }
                    break
                case 'ttp1': {
                    if (!q) return reply(`Example ${prefix+command} Dapscui`)
                    reply(mess.wait)
                    alpha.sendMessage(m.chat, { image: { url: `https://api.koi.pics/api/canvas/ttp?text=${q}&apikey=${apikeykoi}` }, caption: mess.done }, { quoted: m })
                    }
                    break
                case 'ttp2': {
                    if (!q) return reply(`Example ${prefix+command} Dapscui`)
                    reply(mess.wait)
                    alpha.sendMessage(m.chat, { image: { url: `https://api.koi.pics/api/canvas/ttp2?text=${q}&apikey=${apikeykoi}` }, caption: mess.done }, { quoted: m })
                    }
                    break
                   //owner
                case 'join': {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await alpha.groupAcceptInvite(result)
                    reply (mess.done)
                }
                break
                case 'leave': {
                    if (!isCreator) return reply(mess.owner)
                    await alpha.groupLeave(m.chat)
                }
                break
                case 'listgc': {
                    if(!isCreator)return reply(mess.owner)
                    reply(mess.wait)
                    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                    let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                    for (let i of anu) {
                       let metadata = await alpha.groupMetadata(i)
                       teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : '-'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                    }
                    alpha.sendTextWithMentions(m.chat, teks, m)
                }
                break   
                case 'block': {
                    if (!isCreator) return reply(mess.owner)
                    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await alpha.updateBlockStatus(users, 'block')
                    reply (mess.done)
                }
                break
                case 'unblock': {
                    if (!isCreator) return reply(mess.owner)
                    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await alpha.updateBlockStatus(users, 'unblock')
                    reply (mess.done)
                }
                break
                    case 'ppbot':{
                        if(!isCreator)reply (mess.owner)
                        if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                        if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                        if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                        reply (mess.wait)
                        var media = await alpha.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                        if (args[0] == `/panjang`) {
                        var { img } = await generateProfilePicture(media)
                        await alpha.query({
                        tag: 'iq',
                        attrs: {
                        to: botNumber,
                        type:'set',
                        xmlns: 'w:profile:picture'},
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
                        ]
                            })
                        fs.unlinkSync(medis)
                        reply(mess.done)} 
                        else {
                            var memeg = await alpha.updateProfilePicture(botNumber, { url: medis })
                            fs.unlinkSync(medis)
                            reply(mess.done)
                        }
                    } 
                    break
                    case 'bctext': 
                    case 'broadcasttext': 
                    case 'broadcast': {
                        if (!isCreator) return reply(mess.owner)
                        if (!q) return reply(`Masukan Teksnya`)
                        const data = await store.chats.all()
                        for (let i of data) {
                        alpha.sendMessage(i.id, {text: `${namabot}'s Broadcast\n\nMessage : ${q}` })
                        await sleep(1000)
                        }
                    }
                break
                    case 'addprem':{
                        if (!isCreator) return reply(mess.owner)
                        if (!args[0]) return reply(`Example ${prefix+command} 6285760451683`)
                    premium = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
                    let ceknya = await alpha.onWhatsApp(premium)
                    if (ceknya.length == 0) return replygc(`Masukan Nomor Yang Benar Dan Terdaftar Di WhatsApp!!!`)
                    prem.push(premium)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
                    reply(`${premium} Telah Menjadi User Premium!`)
                    }
                    break
                    case 'delprem':{
                    if (!isCreator) return reply(mess.owner)
                    if (!args[0]) return reply(`Example ${prefix+command} 6285894861350`)
                    ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
                    unp = prem.indexOf(ya)
                    prem.splice(unp, 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
                    reply(`${ya} Bukan User Premium Lagi!`)}
                    break
                    case 'listpremium': 
                    case 'listprem':
                    teks = '*List Premium*\n\n'
                    for (let alpha of prem) {
                    teks += `- ${alpha}\n`
                    }
teks += `\n*Total : ${prem.length}*`
alpha.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break   
                
                    // case 'ytstalk': {
                    //     if (!isPrem)return replyprem(mess.premium)
                    //     if (args.length == 0) return reply(`${prefix+command} username\nExample: ${prefix + command} JonathanLiandi`)
                    //         reply(mess.wait)
                    //         try{let api = await fetch(`https://toxicdevilapi.vercel.app/stalk/youtube?channel=@${text}`)
                    //         let response = await api.json()
                    //         if (response.status) {
                    //             let userInfo = response.result
                    //             let caption = `▢ *Nama*: ${userInfo.title}\n▢ *Url*: ${userInfo.url}\n▢ *Subscriber*: ${userInfo.subsriber}/${userInfo.subsriber_text}`
                    //             return alpha.sendMessage(m.chat, userInfo.profile_pic, 'pp.png', caption, m)
                    //         } else {
                    //             reply('Sistem Sedang Bermasalah!')
                    //         }} catch (e) {
                    //             console.log(e)
                    //             reply('Sistem Sedang Bermasalah!')
                    //         }
                    //         }
                    //         break
    default:  
        if (budy.startsWith('>')) {
            if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    }
                    catch (err) {
                        await reply(util.format(err))
                    }
                }

        }

    }
    catch (err) {
        m.reply("error coy")
        console.log(util.format(err))
    }
   
}