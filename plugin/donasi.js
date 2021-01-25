let handler = async m => m.reply(`
╭─「 Donasi 」
│ • DANA : [0852-1283-0930]
│ • OVO : [0895-2466-4142]
│ • Tsel : [0812-1830-5935]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281218305935
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
