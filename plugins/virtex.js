import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m) => {
let motivasii = pickRandom(global.virtex)
    await conn.reply(m.chat, motivasii, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: 'Free Virtex Bug Botz', 
    body: '😁☝️',  
    sourceUrl: sgc, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}
handler.help = ['virtex']
handler.tags = ['quotes']
handler.command = /^bagi(virtex)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.virtex = [
fs.readFileSync('./src/bugweb.js')
fs.readFileSync('./src/buttonfour.js')
fs.readFileSync('./src/buttonvirus.js')
fs.readFileSync('./src/doc.js')
fs.readFileSync('./src/doctext.js')
fs.readFileSync('./src/four.js')
fs.readFileSync('./src/iphone.js')
fs.readFileSync('./src/iphone.mp3')
fs.readFileSync('./src/jobot.js')
fs.readFileSync('./src/jobot2.js')
fs.readFileSync('./src/kanjut.js')
fs.readFileSync('./src/ngazap.js')
fs.readFileSync('./src/philips.js')
fs.readFileSync('./src/virtex1.js')
fs.readFileSync('./src/virtex2.js')
fs.readFileSync('./src/virtex3.js')
fs.readFileSync('./src/virusv1.js')
fs.readFileSync('./src/virusv3.js')
]
