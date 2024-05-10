// memanggil modul yang telah dibuat
let kotak = require('./modul');

// Menghitung luas persegi
console.log(`Luas persegi yang memiliki sisi 5 cm adalah ${kotak.luasPersegi(5)} cm`);
console.log('\n');

// Menhitung keliling persegi
console.log(`keliling persegi yang memiliki sisi 5 cm adalah ${kotak.kelilingPersegi(5)} cm`);
console.log('\n');

// Menghitung luas persegi panjang
console.log(`Luas persegi panjang yang memiliki panjang 10 cm dan lebar 15 adalah ${kotak.luasPersegiPanjang(10, 15)} cm`);
console.log('\n');

// Menghitung keliling persegi panjang
console.log(`Luas persegi panjang yang memiliki panjang 10 cm dan lebar 15 adalah ${kotak.kelilingPersegiPanjang(10, 15)} cm`);
console.log('\n');