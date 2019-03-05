/*1.memilih id wrap
 2.metode innerHTML = nulis konten
*/

// deklarasi Variable
// var x = 1723645;
// var tabungan = 120000;
// document.getElementById("wrap").innerHTML = tabungan;

//deklarasi variable

// 1.nama dimulai dengan huruf atau $ atau _
// 2.Nama boleh mengandung huruf,angka,underscore _ dan $ dolar
// 3. Nama itu case sensitive
// 4. Ada 'reserved words' yang tidak boleh dipakai
// var tabungan = 10;
// var Tabungan = 100;

//tipe data string
// var text = "sekolah koding";
// var text2 = " yang baru";

//tipe data angka/number
var angka = 1000;
var angka2 = 123;

//kiri = nama -> kanan = nilai
text2 = " yang lama";


//operator matematika + - / * %
// var angka_baru = angka / angka2;
// var angka_baru = angka + angka2;
// angka_baru++; //increment //menjumlahkan dengan 1
angka--;     //decrement //mengurangi dengan 1

// var angka2 = angka2 + angka; 
angka2 += angka;

document.getElementById("wrap").innerHTML = angka2;