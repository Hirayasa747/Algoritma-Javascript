const prompt = require("prompt-sync")({ sigint: true });


let tahun = Number(prompt("Masukkan tahun masehi: "));


if (tahun % 4 === 0) {
    console.log(`${tahun} adalah TAHUN KABISAT (Februari memiliki 29 hari).`);
} else {
    console.log(`${tahun} BUKAN tahun kabisat (Februari memiliki 28 hari).`);
}