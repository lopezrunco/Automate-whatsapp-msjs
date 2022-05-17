const xlsx = require('xlsx')
const workbook = xlsx.readFile('data/test.xlsx') // Read the excel file
let worksheet = workbook.Sheets[workbook.SheetNames[0]] // Read the first worksheet

const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')
const client = new Client({ authStrategy: new LocalAuth() })

let phonesToSend = []

// Loop over the records. Start with 2 because first row are the columns. Read the elements by Cell index
for (let index = 2; index < 7; index++) {
    const phone = worksheet[`D${index}`].v
    phonesToSend.push(phone)
}

// Generate QR to login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
})

// Send messages
client.on('ready', () => {
    console.log('Client is ready!')
    console.log('Sending to the numbers: ', phonesToSend)
    const text = "This is a automated wapp message"

    phonesToSend.map(element => {
        const chatId = element + "@c.us"
        client.sendMessage(chatId, text);
    })
    console.log('Done!')
})

client.initialize()