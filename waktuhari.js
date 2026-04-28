const prompt = require(`prompt-sync`)({ sigin: true });

// Konversi waktu dari hari

let hari = Number(prompt("input waktu dalam hari: "));

let jam = hari * 24
let menit = jam * 60
let detik = menit * 60

console.log(`${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik`)