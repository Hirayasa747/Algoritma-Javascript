const prompt = require ("prompt-sync")({ sigint: true})

let diulang = 'y'
do { console.log ('8')
    console.log ('9')
    console.log ('10')
    console.log ('11')
    

let pilihan = Number(prompt('pilih 8 - 11 : '))
if (pilihan === 8){console.log('Agustus jumlah hari 31 hari')}
else if (pilihan === 9){console.log('September jumlah hari 30 hari')}
else if (pilihan === 10){console.log('Oktober jumlah hari 31 hari')}
else if (pilihan === 11){console.log('November jumlah hari 30 hari')}
else {console.log('pilihan tidak tersedia atau salah')}
diulang = prompt('ulangi (y/n) ? ')}
while (diulang === 'y')