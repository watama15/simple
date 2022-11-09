/** Menu Untuk Whatsapp List Ringan 
 Udah gua buat biar ringan cuma gak manggil semua menu

Note:
Ini ada menu payment tujuan nya biar kalo lu run panel atau 
Run di platform yang kecil disk nya ( penyimpanan )
Agar terap bisa di gunakan dan tidak ada kendala seperti
[Error: ENOENT: no such file or directory, open ''] 
**/ 

    let handler = async (m, { conn, text, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*© BOTCAHX*`
    let tmb = `CLICK HERE ⎙`
    const sections = [ {
	title: `Aktif Selama ${uptime} || Waktu ${time} WIB`,
	rows: [
	{title: ` All Menu`, rowId: `.allmenu `}, description: `Menampilkan Semua command BOT`},
        {title: ` Sewa Bot`, rowId: `#sewa `}, description: `Menampilkan list harga sewa BOT`},
        {title: ` Script`, rowId: `#sc `}, description: `Source Code Anya Bot`},
        {title: ` Group Official`, rowId: `#gcbot `}, description: `Menampilkan Grub Bot`},
        {title: ` Website Official`, rowId: `#web `}, description: `Menampilkan Website Owner`},
        {title: `Speed`, rowId: `#speed `}, description: `Menampilkan Kecepatan Bot`},
        {title: ` Info`, rowId: `#info `}, description: `Menampilkan Info Bot`},
        {title: ` Creator`, rowId: `#owner `}, description: `Owner Anya Bot`},
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  buttonText: tmb,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.register = false

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
