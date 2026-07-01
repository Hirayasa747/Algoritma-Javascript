const prompt = require("prompt-sync")({ sigint: true });


let tinggi = Number(prompt("Masukkan tinggi badan Anda (cm): "));


let hasilPertama = tinggi - 100;


let beratIdeal = hasilPertama - (10 / 100 * hasilPertama);


console.log(`\nBerat badan ideal untuk tinggi ${tinggi} cm adalah: ${beratIdeal} kg`);