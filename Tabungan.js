const prompt = require("prompt-sync")();
let target = parseInt(prompt("Masukkan target tabungan:"));
let totalTabungan = 0;
let hari = 0;

while (totalTabungan < target) {

    let tabunganHariIni = parseInt(prompt("Masukkan jumlah uang yang ditabung hari ini:"));
    totalTabungan += tabunganHariIni;
    hari++;

    console.log("Total tabungan saat ini: Rp" + totalTabungan);

    
    console.log("Hari menabung ke-" + hari);
}

console.log("Selamat! Target tabungan telah tercapai.");
console.log("Jumlah hari yang dibutuhkan: " + hari + " hari.");