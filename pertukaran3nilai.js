const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("masukkan nilai a: "));
let b = Number(prompt("masukkan nilai b: "));
let c = Number(prompt("masukan nilai c: "));

// Proses pertukaran 1 baris
[a, b, c] = [b, c, a];


console.log("Setelah ditukar:");
console.log("A =", a);
console.log("B =", b);
console.log("C =", c);
