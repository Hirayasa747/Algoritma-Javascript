const prompt = require("prompt-sync")({ sigint: true });


let jumlahUang = Number(prompt("Masukkan jumlah uang (Rp): "));


const daftarPecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

console.log(`\n--- Rincian Pecahan untuk Rp${jumlahUang} ---`);


for (let i = 0; i < daftarPecahan.length; i++) {
    let pecahan = daftarPecahan[i];
    
   
    let jumlahLembar = Math.floor(jumlahUang / pecahan);
    
    
    if (jumlahLembar > 0) {
        let jenis = pecahan >= 1000 ? "lembar/koin" : "koin";
        console.log(`Rp${pecahan} \t: ${jumlahLembar} ${jenis}`);
        
        
        jumlahUang %= pecahan; 
    }
}


if (jumlahUang > 0) {
    console.log(`\nSisa uang yang tidak ada pecahannya: Rp${jumlahUang}`);
}