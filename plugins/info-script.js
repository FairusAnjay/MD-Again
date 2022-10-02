import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `_Jika Kalian Ingin Script Bot Ini Bisa Kunjungi YouTube *WH MODS DEV*_

Join Grup Bot Gw: https://chat.whatsapp.com/G8Ofqsp0oIl19GPE5FI8Kk`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/G8Ofqsp0oIl19GPE5FI8Kk",
    mediaType: "VIDEO",
    description: "JOIN AJG", 
    title: 'FaiRuzz MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
