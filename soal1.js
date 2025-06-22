// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let resultOne = 0;
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    resultOne += numbers[i];
  }
}
console.log("1. Total angka genap = ", resultOne);

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0;
for (let i = 0; i < numbersTwo.length; i++) {
  if (numbersTwo[i] % 2 !== 0) {
    resultTwo += numbersTwo[i];
  }
}
console.log("2. Total angka ganjil = ", resultTwo);

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"];
let resultThree = [];

for (let index = 0; index < students.length; index++) {
  let newString = students[index].toUpperCase();
  resultThree.push(newString);
}
console.log("3. ", resultThree);

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
  { name: "Andi", age: 17 },
  { name: "Tito Alexsta", age: 20 },
  { name: "Bostang", age: 22 },
  { name: "Cicil", age: 17 },
];

let resultFour = [];
for (let index = 0; index < people.length; index++) {
  const nameLength = people[index].name;
  const peopleAge = people[index].age;
  if (nameLength.length >= 5 && peopleAge >= 18) {
    resultFour.push(nameLength);
  }
}
console.log("4. ", resultFour);
// Hitung total harga semua barang
const items = [
  { name: "Book", price: 10000 },
  { name: "Pen", price: 5000 },
  { name: "Pencil", price: 3000 },
];

let totalPrice = 0;
for (let index = 0; index < items.length; index++) {
  listPrice = items[index].price;
  totalPrice += listPrice;
}
console.log("5. Total Harga = ", totalPrice);

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

let temp = 0
let resultSix = []

for (let i = 0; i < numbersThree.length; i++) {
  if (temp != numbersThree[i]) {
    temp = numbersThree[i]
    resultSix.push(temp)
  }
}
console.log("6.", resultSix);

// Ambil nama produk dengan harga tertinggi
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Phone", price: 8000000 },
  { name: "Monitor", price: 3000000 },
];

let tempPrice = 0
let resultSeven = ""

for (let i = 0; i < products.length; i++) {
  if (products[i].price > tempPrice) {
    tempPrice = products[i].price;
    resultSeven = products[i].name;
  }
}
console.log("7.", resultSeven);

// Buat kalimat dari array kata.
const words = ["Belajar", "array", "itu", "menyenangkan"];
resultEight = "";

for (let i = 0; i < words.length; i++) {
  resultEight +=  words[i] + " ";
}
console.log("8.", resultEight);

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ["Aldo", "Budi", "Caca", "Dinda", "Eka", "Fajar"];
let resultNine = [];

for (let i = 0; i < names.length; i++) {
  const nameLowerCase = names[i].toLocaleLowerCase();

  if (nameLowerCase.includes("a") && resultNine.length < 3) {
    resultNine.push(names[i]);
  }
}

console.log("9.", resultNine);

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ["Ani", "Budi", "Citra"]; // 12 karakter

let resultTen = 0;

for (let i = 0; i < namesTwo.length; i++) {
  resultTen += namesTwo[i].length;
}
console.log("10. Total karakter =", resultTen);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
  { name: "Tono", age: 22 },
  { name: "Tini", age: 19 },
  { name: "Tara", age: 25 },
];

let resultEleven = [];

for (let i = 0; i < peopleTwo.length; i++) {
  const name = peopleTwo[i].name;
  const age = peopleTwo[i].age;
  if (age > 21) {
    resultEleven.push(`${name} (${age})`);
  }
}
console.log("11.", resultEleven);
