

//Variables(10)

let namaProduk = "Laptop";
let kategori = "Elektronik";
let harga = 10000000;
let berat = 2;
let garansi = true;
let rating = 4.5;
let warna = 'Hitam';
let diskon = false;
let Deskripsi = "Laptop ini memiliki spesifikasi tinggi dan cocok untuk gaming serta pekerjaan berat.";

let Produk = {
    Nama: namaProduk,
    Kategori: kategori,
    Harga: harga,
    Berat: berat,
    Garansi: garansi,
    Rating: rating,
    Color: warna,
    Diskon: diskon,
    Deskripsi: Deskripsi
};


let nilaiA = 40;
let nilaiB = 20;
let jumlah = nilaiA + nilaiB;
let kali = nilaiA * nilaiB;
let bagi = nilaiB / nilaiA;
let modulus = nilaiB % nilaiA;

console.log('Nilai A + Nilai B =', jumlah); 
console.log('Nilai A * Nilai B =', kali);
console.log('Nilai B / Nilai A =', bagi);
console.log('Nilai B % Nilai A =', modulus);

let isEven = (nilaiA % 2 === 0);
console.log('Apakah Nilai A genap?', isEven);