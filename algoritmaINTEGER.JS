const prompt = require ("prompt-sync")({ sigint: true})

let diulang = 'y'
do {console.log('8')
console.log('9')

let pilihan = Number(prompt('pilih 8 - 9 : '))
if (pilihan === 8){console.log('Agustus')}
else if (pilihan === 9){console.log('September')}
else {console.log('pilihan tidak tersedia atau salah')}
diulang = prompt('ulangi (y/n) ? ')
} while (diulang === 'y')