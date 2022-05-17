const { phonesToSend } = require('./read-excel')
console.log('phonesToSend: ', phonesToSend)

const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({ authStrategy: new LocalAuth() })

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
})

client.on('ready', () => {
    console.log('Client is ready!')
    const numbers = []
    const text = "Esto es un mensaje probando la automatizacion de wapp. Tranqui."

    numbers.map(element => {
        const chatId = element.substring(1) + "@c.us"
        client.sendMessage(chatId, text);
    })
})

client.initialize()