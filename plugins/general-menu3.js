let handler = async (m, { conn, text, usedPrefix, command }) => {
   let ar = ['Owner', 'Donasi']
   let ras = `Halo @${m.sender.split('@')[0]}`
    let sel = `Silahkan Pilih Sub Menu Di Bawah Ini`
    let rs = `Click Here`
const sections = [ {
	title: `Pilih Salah Satu Menu `,
	rows: [
	   {title: `⚡ Speed`, rowId: `#speed `},//, description: ``},
        {title: `⚡ Speedtest`, rowId: `#speedtest `},//, description: ``},
        {title: `📔 Script`, rowId: `#sc `},//, description: ``},
         {title: `❣️Owner` , rowId: `#creator `},//, description: ``},
         {title: `🏢 Group Official`, rowId: `#gcbot `},//, description: ``},
         {title: `🌐 Website Official`, rowId: `#web `},//, description: ``},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['info'].map((v) => v + ' <opsi>')
handler.tags = ['main']
handler.command = /^(Info)$/i

module.exports = handler
