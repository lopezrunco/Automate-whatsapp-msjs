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
    client.getChats().then(chats => {
        const myGroup = chats.find(
            (chat) => chat.name === 'Wapp automation test'
        )
        setTimeout(() => {
            client.sendMessage(
                myGroup.id._serialized,
                'Esto se enviara despues de 20 segundos'
            )
        }, 20000)
    })
})

client.initialize()