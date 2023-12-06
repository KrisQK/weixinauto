
//import { WechatyBuilder } from 'wechaty'
const { WechatyBuilder } = require('wechaty');

const wechaty = WechatyBuilder.build({
    name: 'kris-autoreply-puppet'
}) // get a Wechaty instance
wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => {
    console.log(`收到Message: ${message}`); 
    if(message.text() === 'hi' || message.text() === '你好') {
        message.say('Hello, I am a bot!')
    }
    else if(message.text() === '狗狗' || message.text() === '狗宝'){
        message.say('狗娃, 我爱你!')
    }
  })
wechaty.start() 