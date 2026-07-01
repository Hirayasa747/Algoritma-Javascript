const prompt = require("prompt-sync")({ sigint: true });


let bilangan = Number(prompt("Masukkan sebuah bilangan bulat: "));


if (bilangan > 0) {
   
    console.log(`\nBilangan ${bilangan} adalah bilangan POSITIF.`);
} else if (bilangan < 0) {
   
    console.log(`\nBilangan ${bilangan} adalah bilangan NEGATIF.`);
} else {
   
    console.log(`\nBilangan tersebut adalah NOL.`);
}