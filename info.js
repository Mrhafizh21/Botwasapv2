let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec : Drawl Nag
╠➥ Script : @Nurotomo <Script Ori>
╠➥ Script : @Mrhafizh21 <Script Modif>
║
╠➥ Github: https://github.com/Mrhafizh21/Botwasapv2
╠➥ Instagram: @hafizh.021y
╠➥ YouTube: Doraemon Bot Official
║
╠═〘 Thanks To 〙 ═
╠➥ Allah SWT
╠➥ Orang Tua
╠➥ Nurotomo
╠➥ MfarelS
╠➥ Hafizh Ganz
╠➥ Hafizh Team
╠➥ Dan kawan yang lain :)
╠➥ PERINGATAN : *Thx to,donasi,credit jangan dihapus ya >_<*
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa Axis : 0857-4105-6111
╠➥ Pulsa Indosat : 0838-2170-5664
╠➥ Dana : 0857-4105-6111
╠➥ Gopay : 0857-4105-6111
║
║>Request? Wa.me/6285741056111
║
╠═〘 Dora Bot〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

