let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://github.com/koncit'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Lop U Too',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Follow Github Gua',
'body':'© Anya Bot',
'thumbnail':await(await fetch('https://i.ibb.co/vzrsS1w/thumbnail.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan pilih opsi di bawah ini
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _15k/grup (1 bulan)_
┊⫹⫺ *Standar:* _30k/grup (2 bulan)_
┊⫹⫺ *Pro:* _40k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _130k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _5k (1 minggu)_
┊⫹⫺ *Normal:* _20k (1 bulan)_
┊⫹⫺ *Pro:* _40k (4 bulan)_
┊⫹⫺ *Vip:* _50k (8 bulan)_                                               
┊⫹⫺ *Jual script bot:* = _200k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Telkomsel:* [081364444859]
• *Dana:* [081261973803]
• *Gopay:* [081364444859]
• *Ovo:* [081364444859]
• *Link Aja:* [-]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌',
'footer':'© KoncitOfc',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|belibot)$/i

module.exports = handler
