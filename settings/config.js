const fs = require('fs')

const config = {
    owner: "628895307489",
    botNumber: "6283829711614",
    setPair: "K1UU1212",
    thumbUrl: "https://img1.pixhost.to/images/7145/621080337_sibayu.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "𝗦𝗶𝗯𝗮𝘆𝘂𝗫𝗱 𝗕𝗼𝘁",
        packname: 'Sibayu WaBot',
        description: "BayuSigma",
        author: 'https://sibayudeploy.vercel.app',
        footer: "SibayuOffc"
    },
    newsletter: {
        name: "Bay,u ok?",
        id: "120363420155594472@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@BayuCrasher",
        GitHub: "https://github.com/bayuasli",
        Telegram: "https://t.me/bayuror",
        ChannelWA: "https://whatsapp.com/channel/0029VbAamF2CxoAvtSV3iq1z"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
