/*
Diberikan sebuah variabel numbers bertipe string yang berisi kumpulan angka. Buatlah sebuah program
 yang akan merubah angka-angka tersebut menjadi sebuah symbol dengan ketentuan sebagai berikut:

Jika terdapat empat angka semisalnya "3214" maka output symbol nya akan dibuat menjadi 4 baris
Setiap barisnya akan dibuat menjadi symbol # atau @.
Jika angka tersebut adalah angka ganjil maka symbol yang dibuat adalah # Jika angka tersebut
 adalah angka genap maka symbol yang dibuat adalah @
Symbol tersebut akan dibuat sebanyak angka yang didapatkan
Semisal kita memiliki angka 3 maka akan rubah menjadi # ( karena 3 angka ganjil ) sebanyak 3 kali ###
Jika hasil penjumlahan angka dengan angka sebelumnya adalah 5 keatas, maka tambahkan symbol $ di akhir
 baris tersebut.
Contoh 3214, pada baris dengan angka 2 hasil penjumlahan dengan angka sebelumnya adalah 5 ( 2 + 3) 
maka di baris tersebut akan ditambahkan symbol $ Jika tidak ada angka sebelum angka di baris tersebut 
maka proses ini tidak akan dijalankan.
Jika isi dari variable numbers bukanlah sebuah angka maka tampilkan: Input bukanlah angka 
*/
let numbers = "3114";
let simbol = Number(numbers);
let cek = "";

if (!simbol) {
  console.log("Input bukanlah angka");
} else {
  for (let i = 0; i <= numbers.length - 1; i++) {
    cek = "";

    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % 2 === 0) {
        cek += "@";
      } else {
        cek += "#";
      }
    }
    if (i > 0) {
      let cek2 = Number(numbers[i - 1]) + Number(numbers[i]);
      if (cek2 >= 5) {
        cek += "$";
      }
      //   console.log(cek);
      //   console.log(typeof cek);
      // if ()
    }
    console.log(cek);
  }
}
