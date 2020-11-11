// //variabel

// //let & const
// let _umur = 25;
// let nilai = 95.5;
// let sudahMenikah = false;
// let nama = "wine doe";
// console.log(_umur);
// console.log(nama);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2001;
// console.log(tahunLahir);

// //Operator

// //Arithmatic Operator ( +,-,*,/ )

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1 + angka2);

// let umur = 17;
// let namaDepan = "wine";
// let namaBelakang = "wide";
// console.log("Nama saya" + namaDepan + " " + namaBelakang + "umur saya adalah" + umur + "tahun");

// //Operator Perbandingan

// let angka5 = 10;
// let angka6 = 9;

// console.log(angka5 <= angka6);

// //ternary operator

// let angka9 = 5;
// let hasil = angka9 <= 0 ? "Negatif" : "Positif";
// console.log(hasil);

// //Operator Logika

// let kondisi1 = 1 < 2;
// let kondisi2 = true;
// console.log(kondisi1 || kondisi2);

// console.log(!kondisi1);

let namaDepan = prompt("Masukan Nama Depan: ");
let namaBelakang = prompt("Masukan Nama Belakang :");
let umur = prompt("Masukan Umur: ");
let berat = prompt("Masukan Berat Badan Anda: ");
let tinggi = prompt("Masukan Tinggi Badan Anda: ");
let bmi = berat / (tinggi * tinggi);
console.log("Nama saya " + namaDepan + " " + namaBelakang + " Umur saya adalah " + umur + " tahun " + "Berat saya " + berat + " kg " + "Tinggi saya " + tinggi + " cm " + "Dan BMI saya adalah " + bmi);