const prompt = require('prompt-sync')({ sigint: true });

console.log('-------Tanggal, Bulan, Tahun Pertama--------');
const tgl1 = Number(prompt('Masukkan Tanggal Pertama : '));
const bln1 = Number(prompt('Masukkan Bulan Pertama : '));
const thn1 = Number(prompt('Masukkan Tahun Pertama : '));

console.log('\n-------Tanggal, Bulan, Tahun Kedua--------');
const tgl2 = Number(prompt('Masukkan Tanggal Kedua : '));
const bln2 = Number(prompt('Masukkan Bulan Kedua : '));
const thn2 = Number(prompt('Masukkan Tahun Kedua : '));


const date1 = new Date(thn1, bln1 - 1, tgl1);
const date2 = new Date(thn2, bln2 - 1, tgl2);


const selisihMilidetik = Math.abs(date2 - date1);
const satuHari = 1000 * 60 * 60 * 24;
let selisihHari = Math.floor(selisihMilidetik / satuHari);


const tahun = Math.floor(selisihHari / 365);
selisihHari %= 365;
const bulan = Math.floor(selisihHari / 30);
const hari = selisihHari % 30;

console.log(`\nTahun : ${tahun}\nBulan : ${bulan}\nHari  : ${hari}`);