const fetch = require('node-fetch');

let handler = async (m, { client, text, prefix, command }) => {
 if (!text || !text.includes('|')) {
 return client.sendMessage(m.chat, {
 text: `Contoh : ${prefix + command} https://ngl.link/bayuror|3|wiwokdetok`
 }, { quoted: fquoted.packSticker });
 }

 let [link, jumlahStr, ...pesanArr] = text.split('|');
 let jumlah = parseInt(jumlahStr);
 let pesan = pesanArr.join('|').trim();

 if (!link.startsWith('https://ngl.link/')) {
 return client.sendMessage(m.chat, {
 text: '❌ Link harus diawali dengan https://ngl.link/'
 }, { quoted: fquoted.packSticker });
 }
 if (!pesan) {
 return client.sendMessage(m.chat, {
 text: '❌ Pesan tidak boleh kosong.'
 }, { quoted: fquoted.packSticker });
 }
 if (isNaN(jumlah) || jumlah < 1) {
 return client.sendMessage(m.chat, {
 text: '❌ Jumlah harus angka dan minimal 1.'
 }, { quoted: fquoted.packSticker });
 }

 const username = link.split('https://ngl.link/')[1];
 if (!username) {
 return client.sendMessage(m.chat, {
 text: '❌ Username tidak ditemukan di link.'
 }, { quoted: fquoted.packSticker });
 }

 const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

 await client.sendMessage(m.chat, {
 text: '⏳ Mengirim spam NGL...'
 }, { quoted: fquoted.packSticker });

 try {
 for (let i = 0; i < jumlah; i++) {
 await fetch('https://ngl.link/api/submit', {
 method: 'POST',
 headers: {
 'accept': '*/*',
 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
 },
 body: `username=${username}&question=${encodeURIComponent(pesan)}&deviceId=1`
 }).catch(() => {});

 await delay(200);
 }

 await client.sendMessage(m.chat, {
 text: `✅ Selesai mengirim ${jumlah} pesan ke @${username}`
 }, { quoted: fquoted.packSticker });

 } catch (err) {
 await client.sendMessage(m.chat, {
 text: `❌ Gagal mengirim pesan: ${err.message || err}`
 }, { quoted: fquoted.packSticker });
 }
}

handler.help = ['spamngl2 <link>|<jumlah>|<pesan>'];
handler.tags = ['tools'];
handler.command = ['spamngl2'];

module.exports = handler;