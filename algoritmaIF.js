const prompt = require ("prompt-sync")({ sigint: true})

let diulang = 'y'
do { console.log('1')
console.log('2')
console.log('3')
console.log('4')

let pilihan = Number(prompt('pilih 1 - 4 : '))
if (pilihan === 1){console.log('satu')}
else if (pilihan === 2){console.log('dua')}
else if (pilihan === 3){console.log('tiga')}
else if (pilihan === 4){console.log('empat')}
else {console.log('pilihan tidak tersedia atau salah')}
diulang = prompt('ulangi (y/n) ? ')
} while (diulang === 'y')