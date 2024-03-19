const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
   koi:  'https://api.koi.pics',
   

}

// Apikey
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'apikeynya',
   'https://api.koi.pics':'apikeynya',
}
global.apikeykoi='apikeykoi'

global.namabot = " Vetkin BOT"
global.namaowner = "@daffa.reivan"
global.packname = "Follow IG @daffa.reivan"
global.author = namabot
global.myweb = "https://www.facebook.com/daff485"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/hd.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285894861350']
global.pairingNumber = "62xxxx" //pairing number to install bot 
global.sessionName = 'session'
global.background = "https://telegra.ph/file/b73055ee65248e1a0e67b.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_*Fitur admin group blok*_',
    botNotAdmin: '_Bot belum admin_',
    owner: 'Dikira lu ownernya !',
    group: '_Fitur Khusus Dalam Group_',
    private:'Fitur khusus chat pribadi!',
    perbaikan: 'Fitur sedang dalam perbaikan!',
    premium:'Fitur khusus pengguna premium',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.limitawal = {
   premium: "Infinity",
   free: 25,
}
global.help = {
menu(pushname, salam, mundur, ownerName, botName, jam, tanggal, runtime, prefix){
  return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*

*HITUNGAN MUNDUR IDUL FITRI 🕌☪️*
*${mundur}*

╭┈┈┈┈┈⟬ *INFO-BOT* ⟭───
┆Creator : ${ownerName}
┆Bot Name : ${botName}
┆Time : ${jam}
┆Date : ${tanggal}
┆Runtime : ${runtime}
┆Contact Creator: ${owner}
╰──────────◇

⟬ *MAIN MENU* ⟭

╭┈┈┈┈┈⟬ *STIKER* ⟭
┆${prefix}stiker
┆${prefix}stikerin
┆${prefix}s
┆${prefix}sticker
┆${prefix}sgif
╰──────────◇

╭┈┈┈┈┈⟬ *OTHER MENU* ⟭
┆${prefix}prem
┆${prefix}grup
┆${prefix}random
┆${prefix}own
┆${prefix}anime
╰──────────◇
`},
menuprem(pushname, salam, mundur, ownerName, botName, jam, tanggal, runtime, prefix){
   return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
 
 *HITUNGAN MUNDUR IDUL FITRI 🕌☪️*
 *${mundur}*
 
 ╭┈┈┈┈┈⟬ *INFO-BOT* ⟭───
 ┆Creator : ${ownerName}
 ┆Bot Name : ${botName}
 ┆Time : ${jam}
 ┆Date : ${tanggal}
 ┆Runtime : ${runtime}
 ┆Contact Creator: ${owner}
 ╰──────────◇

 ╭┈┈┈⟬ *ONLY PREMIUM* ⟭
 ┆${prefix}remini
 ┆${prefix}ppcp
 ┆${prefix}ai
 ┆${prefix}wm
 ┆${prefix}emojimix (emote1+emote2)
 ┆${prefix}smeme
 ┆${prefix}igstalk
 ┆${prefix}wiki
 ╰──────────◇
 
 ╭┈┈┈⟬ *DOWNLOADER* ⟭
 ┆${prefix}igreels
 ┆${prefix}igvideo
 ┆${prefix}tiktok
 ┆${prefix}fb
 ┆${prefix}yt
 ┆${prefix}yta
 ╰──────────◇
 `},
 group(pushname, salam, mundur, ownerName, botName, jam, tanggal, runtime, prefix){
   return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
 
 *HITUNGAN MUNDUR IDUL FITRI 🕌☪️*
 *${mundur}*
 
 ╭┈┈┈┈┈⟬ *INFO-BOT* ⟭───
 ┆Creator : ${ownerName}
 ┆Bot Name : ${botName}
 ┆Time : ${jam}
 ┆Date : ${tanggal}
 ┆Runtime : ${runtime}
 ┆Contact Creator: ${owner}
 ╰──────────◇

 ╭┈┈┈┈┈⟬ *GROUP* ⟭
 ┆${prefix}setwelcome
 ┆${prefix}changewelcome
 ┆${prefix}delsetwelcome
 ┆${prefix}setleft
 ┆${prefix}changeleft
 ┆${prefix}delsetleft
 ┆${prefix}antiwame (on/off)
 ┆${prefix}open
 ┆${prefix}close
 ┆${prefix}antilink (on/off)
 ┆${prefix}hidetag
 ┆${prefix}promote
 ┆${prefix}demote
 ┆${prefix}kick
 ┆${prefix}afk
 ┆${prefix}tagall
 ┆${prefix}del
 ┆${prefix}revoke
 ╰──────────◇
 `},
 random(pushname, salam, mundur, ownerName, botName, jam, tanggal, runtime, prefix){
   return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
 
 *HITUNGAN MUNDUR IDUL FITRI 🕌☪️*
 *${mundur}*
 
 ╭┈┈┈┈┈⟬ *INFO-BOT* ⟭───
 ┆Creator : ${ownerName}
 ┆Bot Name : ${botName}
 ┆Time : ${jam}
 ┆Date : ${tanggal}
 ┆Runtime : ${runtime}
 ┆Contact Creator: ${owner}
 ╰──────────◇

 ╭┈┈┈⟬ *RANDOM* ⟭
 ┆${prefix}sertitolol
 ┆${prefix}ttp
 ┆${prefix}ttp2
 ┆${prefix}heroml
 ┆${prefix}confess (just confess)
 ┆${prefix}schat (text)
 ┆${prefix}smeme text atas|text bawah
 ┆${prefix}toimage
 ╰──────────◇
 `},
 owner(pushname, salam, prefix){
   return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
 
 ╭┈┈┈⟬ *OWNER* ⟭
 ┆${prefix}join 
 ┆${prefix}leave 
 ┆${prefix}addprem 
 ┆${prefix}delprem 
 ┆${prefix}broadcast
 ┆${prefix}ppbot
 ┆${prefix}block
 ┆${prefix}unblock
 ┆${prefix}listgc
 ╰──────────◇
 `},
 anime(pushname, salam, mundur, ownerName, botName, jam, tanggal, runtime, prefix){
   return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
 
 *HITUNGAN MUNDUR IDUL FITRI 🕌☪️*
 *${mundur}*
 
 ╭┈┈┈┈┈⟬ *INFO-BOT* ⟭───
 ┆Creator : ${ownerName}
 ┆Bot Name : ${botName}
 ┆Time : ${jam}
 ┆Date : ${tanggal}
 ┆Runtime : ${runtime}
 ┆Contact Creator: ${owner}
 ╰──────────◇
 ╭┈┈┈┈┈⟬ *ANIME* ⟭
 ┆${prefix}akira
 ┆${prefix}anna
 ┆${prefix}asuna
 ┆${prefix}ayano
 ┆${prefix}ayuzawa
 ┆${prefix}bocchi
 ┆${prefix}chisato
 ┆${prefix}elaina
 ┆${prefix}ikuyo
 ┆${prefix}kaela
 ┆${prefix}kaguya
 ┆${prefix}kaori
 ┆${prefix}kotori
 ┆${prefix}loli
 ┆${prefix}miku
 ┆${prefix}sakura
 ┆${prefix}sasuke
 ┆${prefix}shinka
 ┆${prefix}shizuka
 ┆${prefix}shota
 ┆${prefix}takina
 ┆${prefix}waifu
 ┆${prefix}yotsuba
 ┆${prefix}yumeko
 ╰──────────◇
 
 `},
}
global.info ={
   info(pushname, salam){
      return `*${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}*
\nBerikut adalah informasi develepor BOT ini\n╭┈┈┈┈┈⟬ *INFO* ⟭───\n┆Nama: Daffa Reivan\n┆Facebook: Daffa Reivan\n┆Instagram: @daffa.reivan\nSC BOT:https://github.com/Daffa-Qiao/Vetkin-MD\n╰──────────◇
      `
   }
}