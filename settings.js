const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6282188187905'] //ur owner number
global.ownernomer = "6282188187905" //ur owner number2
global.ownername = "Rulzz Bot" //ur owner name
global.ytname = "YT:  -" //ur yt chanel name
global.socialm = "GitHub: -" //ur github or insta name
global.location = "Indonesia, Medan, Sumatera Utara" //ur location

//new
global.botname = "Rulzz Botツ MD"
global.ownernumber = '6282188187905'
global.ownername = 'Rulzz'
global.ownerNumber = ["6282188187905@s.whatsapp.net"]
global.ownerweb = "https://pornhub.com"
global.websitex = "-"
global.wagc = "https://chat.whatsapp.com/G4xTIM8ThcDDezUIxMfJKE"
global.themeemoji = '🗿'
global.wm = "Rulzz Botツ MD."
global.botscript = 'Minta Ke Owner wa.me/6282188187905' //script link
global.packname = "Sticker By"
global.author = "Rulzz Botツ\n\n\nA whatsapp bot developed by\nRulzz \n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : 62895613103580"
global.creator = "6282188187905@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih kak!',
    admin: 'Fitur khusus admin grup kak!',
    botAdmin: 'Bot nya jadiin admin dulu!',
    premime: 'Fitur khusus pengguna premium',
    owner: 'Fitur nya khusus owner aku kak 🐣',
    group: 'Pakai fitur ini di dalam grup aja kak!',
    private: 'Fitur khusus private chat!',
    bot: 'Biar saya aja kak yg pake command nya >_<',
    wait: 'In process...',
    linkm: 'Link nya?',
    endLimit: 'Limit nya habis, coba lagi tahun depan',
    nsfw: 'Fitur nsfw belum aktif!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
