const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("masukkan nilai a: "));
let b = Number(prompt("masukkan nilai b: "));

// Proses pertukaran 1 baris
[a, b] = [b, a];

console.log("Setelah ditukar:");
console.log("A =", a);
console.log("B =", b);