const prompt = require("prompt-sync")({ sigint: true });


let meter = Number(prompt("Masukkan panjang benda (meter): "));


let yard = meter / 0.9144;
let kaki = meter / 0.3048;
let inchi = meter / 0.0254;


console.log(`\nHasil Konversi dari ${meter} meter:`);
console.log(`- Yard : ${yard.toFixed(2)} yard`);
console.log(`- Kaki : ${kaki.toFixed(2)} kaki`);
console.log(`- Inchi: ${inchi.toFixed(2)} inchi`);