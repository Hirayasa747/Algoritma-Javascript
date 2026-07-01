const prompt = require("prompt-sync")({ sigint: true });


let x = Number(prompt("Masukkan jarak perjalanan semut (cm): "));


let km = Math.floor(x / 100000);
let sisa = x % 100000; 


let m = Math.floor(sisa / 100);
let cm = sisa % 100; 


console.log(`\nSemut menempuh jarak sejauh ${km} km + ${m} m + ${cm} cm.`);