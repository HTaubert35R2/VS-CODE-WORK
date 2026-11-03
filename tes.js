const prompt = require("prompt-sync")();
let menu=null
let harga=0;
let jumlah=0;
let total=0;

menu = (prompt("Masukkan Nama Menu: "));
harga = parseInt(prompt("Masukkan Harga: "));
console.log("Menu Yang Dipilih ",menu, "harga ",harga);
jumlah = parseInt(prompt("Masukkan Jumlah Porsi: "));

console.log("Daftar Harga ", menu)
for (let i = 0; i < jumlah; i++) {
    total +=harga;
    console.log((i+1), "porsi: ",total);
}