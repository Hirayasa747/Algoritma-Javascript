const prompt = require("prompt-sync")({ sigint: true });


let x = Number(prompt("Masukkan nilai x: "));
let y = Number(prompt("Masukkan nilai y: "));


if (x > 0 && y > 0) {
    
    console.log(`\nTitik P(${x}, ${y}) terletak di Kuadran I`);
} else if (x < 0 && y > 0) {
    
    console.log(`\nTitik P(${x}, ${y}) terletak di Kuadran II`);
} else if (x < 0 && y < 0) {
    
    console.log(`\nTitik P(${x}, ${y}) terletak di Kuadran III`);
} else if (x > 0 && y < 0) {
    
    console.log(`\nTitik P(${x}, ${y}) terletak di Kuadran IV`);
} else {
    
    console.log(`\nTitik P(${x}, ${y}) tidak terletak di kuadran manapun (berada di garis sumbu atau titik pusat)`);
}