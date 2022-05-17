## Automate whatsapp messages
From an Excel file, automate the sending of messages through Whatsapp web.

### Instructions:

Create your .xlsx file, for example:
```bash

| F Name | L Name    | Date       | Phone      |
|--------|-----------|------------|------------|
| Lenny  | Gomez     | 05-12-2020 | 1234567890 |
| Carl   | Perez     | 12-07-2021 | 0987654321 |
| Homer  | Rodriguez | 19-08-2021 | 1112223334 |
| Moe    | Smith     | 01-02-2022 | 5556667778 |
| Fred   | Rock      | 11-10-2022 | 9990001234 |
```
Install dependencies
```bash
npm i
```
Customize the message
```bash
const text = "This is a automated wapp message"
```
Start the app
```bash
npm start
```
Scan the Whatsapp QR with your phone

The messages will be sent automatically