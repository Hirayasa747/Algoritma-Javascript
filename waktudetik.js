const prompt = require ("prompt-sync")({ sigint: true})

let diulang = true
do {
    
    let waktu = Number(prompt('Inputkan waktu (detik) : '))
    let jam = parseInt (waktu / 3600)
    let sisa = waktu % 3600
    let menit = parseInt (sisa / 60)
    let detik = sisa % 60

    
    
    console.log(`${waktu} detik = ${jam} jam, ${menit} menit, ${detik} detik`)

    jawab = prompt('Apakah kamu ingin mengulang? (y/n): ')
diulang = (jawab === 'y' || diulang === 'Y') ? true : false}
while (diulang === true)