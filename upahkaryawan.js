const prompt = require("prompt-sync")({ sigint: true });

let jamKerja = Number(prompt("Masukkan jumlah jam kerja seminggu: "));


const TARIF_NORMAL = 2000;
const TARIF_LEMBUR = 3000;
const BATAS_JAM_NORMAL = 48;

let totalUpah = 0;


if (jamKerja > BATAS_JAM_NORMAL) {
  
    let jamLembur = jamKerja - BATAS_JAM_NORMAL;
    
    let upahNormal = BATAS_JAM_NORMAL * TARIF_NORMAL;
    let upahLembur = jamLembur * TARIF_LEMBUR;
    
    totalUpah = upahNormal + upahLembur;
} else {
   
    totalUpah = jamKerja * TARIF_NORMAL;
}


console.log(`\nTotal upah mingguan karyawan: Rp${totalUpah}`);