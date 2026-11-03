const prompt = require('prompt-sync')();

console.log('Daftar Menu');
console.log("1. Soto Ayam : 10.000");
console.log("2. Bakso : 7.000");
console.log("3. Mie Goreng : 10.000");

let menu = 0;
let harga = 0;
let total = 0;

do{
    console.log("Pilih Menu: ");
    menu = parseInt(prompt('sesuai Menu(1-3) atau 0 untuk selesai: '));

    switch(menu){
        case 1:
            harga = 10000;
            console.log('Anda memillih Soto Ayam');
            break;
        case 2:
            harga = 7000;
            console.log('Anda memillih Bakso');
            break;
        case 3:
            harga = 10000;
            console.log('Anda memillih Mie Goreng');
            break;
        case 0:
            harga = 0;
            console.log('pesanan selesai');
            break;
        default:
            harga = 0;
            console.log('Menu tidak tersedia');
            break;
    }

    total = total + harga;

    if (menu != 0){
        console.log('Harga: Rp' + harga);
        console.log('Total sementara: Rp' + total);
    }

} while (menu != 0);

console.log('================================');
console.log('Total pembayaran: Rp' + total);

let Membayar = parseInt(prompt('Masukkan jumlah uang yang dibayarkan: '));
let Kembalian = Membayar - total;

if (Membayar < total) {
    console.log('Uang yang dibayarkan kurang');
} else {
    console.log('Uang yang dibayarkan: Rp' + Membayar);
    console.log('Kembalian: Rp' + Kembalian);
}