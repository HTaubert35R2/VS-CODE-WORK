// let counter = 0;
// do{
//     console.log("Coba perulangan do while");
//     counter++;
// } while(counter <= 1);

let saldo = 0;
let hari = 1;
let nominal = 5000;

do{
    saldo += nominal
    console.log('Hari ',hari, 'Saldo: ',saldo);
    hari++;
}while(saldo < 50000);