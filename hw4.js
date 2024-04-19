let arkos = [];
let bilran;

for (let i = 1; i <= 100; i++) {
    bilran = Math.floor(Math.random() * 50 + 1); // menghasilkan bilangan random dalam rentang 0 hingga 49
    arkos.push(bilran); // menambahkan bilran ke dalam array arkos
}

console.log(arkos); // mencetak array arkos ke konsol


console.log('');
console.log('====================================');
console.log('Membagi array berdasarkan indeks');
console.log('=====================================');
console.log('');
// Membagi array menjadi 2 berdasarkan indeks ganjil dan genap
let ganjil = [];
let genap = [];

for(let j = 0; j <= arkos.length; j++){
    if(j % 2 === 0){
        genap.push(arkos[j])
    }else{
        ganjil.push(arkos[j])
    }
}

console.log('Ini adalah array indeks ganjil: \n' + ganjil + '\n');
console.log('Ini adalah array indeks genap: \n' + genap + '\n');


// menentukan nilai minimal dan maximal pada array indeks ganjil
console.log('');
console.log('=============================================================');
console.log('menentukan nilai minimal dan maximal pada array indeks ganjil');
console.log('=============================================================');
let min = ganjil[0];
let max = ganjil[0];

for(let k = 0; k <= ganjil.length; k++){
    if(ganjil[k] < min){
        min = ganjil[k];
    }else if(ganjil[k] > max){
        max = ganjil[k];
    }
}
console.log('');
console.log('nilai minimal adalah = ' + min);
console.log('nilai maximal adalah = ' + max);
console.log('');

// menentukan nilai genap pada array indeks genap
console.log('============================================================');
console.log('menentukan nilai minimal dan maximal pada array indeks genap');
console.log('============================================================');
let mingen = genap[0];
let maxgen = genap[0];

for(let l = 0; l <= genap.length; l++){
    if(genap[l] < mingen){
        mingen = genap[l];
    }else if(genap[l] > maxgen){
        maxgen = genap[l];
    }
}
console.log('');
console.log('nilai minimal adalah = ' + mingen);
console.log('nilai maximal adalah = ' + maxgen);
console.log('');


console.log('============================================================');
console.log('menentukan nilai total pada array indeks ganjil dan genap');
console.log('============================================================');
console.log('');
// menentukan total nilai dari array ganjil dan genap
let totalGanjil = 0;
let totalGenap = 0;
for(let m = 0; m < ganjil.length; m++){
    totalGenap += genap[m];
    totalGanjil += ganjil[m];
}

console.log('total ganjil = ' + totalGanjil);
console.log('total genap = ' + totalGenap);


console.log('=============================================================');
console.log('menentukan nilai rata-rata pada array indeks ganjil dan genap');
console.log('=============================================================');
console.log('');
rataGanjil = totalGanjil / ganjil.length;
console.log('nilai rata-rata ganjil = ' + rataGanjil);
rataGenap = totalGenap / ganjil.length;
console.log('nilai rata-rata genap = ' + rataGenap);

// membandingkan nilai minimal, maximal, total dan rata2 antara array ganjil dan array genap

// compare nilai minimal
console.log('');
console.log('=============================================================');
console.log('Membandingkan nilai minimal array ganjil dan array genap');
console.log('=============================================================');
console.log('');
if(min < mingen){
    console.log('nilai minimal ganjil lebih kecil dari nilai minimal genap');
}else if(min === mingen){
    console.log('nilai minimal ganjil sama dengan nilai minimal genap');
}else if(min > mingen){
    console.log('nilai minimal ganjil lebih besar dari nilai minimal genap');
}else{
    console.log('undefined');
}

// compare nilai maximal
console.log('');
console.log('=============================================================');
console.log('Membandingkan nilai maximal array ganjil dan array genap');
console.log('=============================================================');
console.log('');
if(max < maxgen){
    console.log('nilai maximal ganjil lebih kecil dari nilai maximal genap');
}else if(max === maxgen){
    console.log('nilai maximal ganjil sama dengan nilai maximal genap');
}else if(max > maxgen){
    console.log('nilai maximal ganjil lebih besar dari nilai maximal genap');
}else{
    console.log('undefined');
}

// compare nilai total
console.log('');
console.log('=============================================================');
console.log('Membandingkan nilai total array ganjil dan array genap');
console.log('=============================================================');
console.log('');
if(totalGanjil < totalGenap){
    console.log('nilai total ganjil lebih kecil dari nilai total genap');
}else if(totalGanjil === totalGenap){
    console.log('nilai total ganjil sama dengan dari nilai total genap');
}else if(totalGanjil > totalGenap){
    console.log('nilai total ganjil lebih besar dari nilai total genap');
}else{
    console.log('undefined');
}

// compare nilai rata2
console.log('');
console.log('=============================================================');
console.log('Membandingkan nilai rata-rata array ganjil dan array genap');
console.log('=============================================================');
console.log('');
if(rataGanjil < rataGenap){
    console.log('nilai rata-rata ganjil lebih kecil dari nilai rata-rata genap');
}else if(rataGanjil === rataGenap){
    console.log('nilai rata-rata ganjil sama dengan nilai rata-rata genap');
}else if(rataGanjil > rataGenap){
    console.log('nilai rata-rata ganjil lebih besar dari nilai rata-rata genap');
}else{
    console.log('undefined');
}