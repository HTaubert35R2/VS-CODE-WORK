
// Soal 1
function Perkenalan(Nama, Kelas, Hobi) {
    console.log('Nama : ' + Nama)
    console.log('Kelas : ' + Kelas)
    console.log('Hobi : ' + Hobi)
}

Perkenalan('Hafidz', 'XR2', 'Gaming')
Perkenalan('Raffa', 'ICP PG', 'Scrolling')
Perkenalan('Amos', 'XR2', 'Gym')


// Soal 2
function LuasPersegiPanjang(panjang, lebar) {
    return panjang*lebar
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar)
}

let luas = LuasPersegiPanjang(10, 4);
let keliling = kelilingPersegiPanjang(10, 4);

console.log('Luas: '+luas)
console.log("Keliling: "+keliling)


// Soal 3
function RataRapor(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

function PredikatRapor(Rata) {
    let Predikat;
    switch (true) {
        case (Rata >= 85):
            Predikat = "A";
            break
        case (Rata >= 75 && Rata <= 84):
            Predikat = "B";
            break
        case (Rata >= 60 && Rata <= 74):
            Predikat = "C"
            break
        case (Rata < 60):
            Predikat = "D"
            break
    }
    return Predikat
}

function CetakRapor(nama, n1, n2, n3) {
    let Rata = RataRapor(n1, n2, n3)
    console.log('Nama: ' + nama)
    console.log('Rata-Rata: ' + Rata)
    console.log('Predikat: ' + PredikatRapor(Rata))
}

CetakRapor('Hafidz', 80, 90, 90)