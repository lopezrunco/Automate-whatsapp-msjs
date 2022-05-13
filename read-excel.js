const xlsx = require('xlsx')
const workbook = xlsx.readFile('data/test.xlsx') // Read the excel file
let worksheet = workbook.Sheets[workbook.SheetNames[0]] // Read the first worksheet 

// Convert Excel date serial number to date
const excelDateToJSDate = date => {
    return new Date(Math.round((date - 25569)*86400*1000))
}

// Loop over the records
for (let index = 2; index < 7; index++) {
    // Start with 2 beacause first row are the columns
    // Read the elements by Cell index
    const firstName = worksheet[`A${index}`].v
    const lastName = worksheet[`B${index}`].v
    const date = excelDateToJSDate(worksheet[`C${index}`].v)
    console.log({ firstName, lastName, date })
}
