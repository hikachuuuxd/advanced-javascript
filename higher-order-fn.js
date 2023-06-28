// Membuat function sebagai argumen 
// callback function yang disimpan sebagai argumen
// function yang memiliki callback disebut higher order function
// function yang mereturn function jg disebuat higher order function


// Tujuan 
// 1. Abstraksi = program dipisahkan dalam function  - function 
// 2. Pendekatan paradigma functional Programming
// contoh

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}

repeat(5, console.log)


// Map, Filter, Reduce

let bahan = ['roti', 'timun', 'tomat', 'kubis', 'bawang']
console.log(bahan.filter((e) => e == 'timun'))   
console.log(bahan.map((e) => `ini adalah ${e}`))                    

// Reduce 
let angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
console.log(angka.reduce((total, num) => total + num, 1)) // 1 adalah nilai awal, jika tidak di set maka default nya 0

// Method Chaning
let hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((e, i) => e + i)
console.log(hasil)

// Study Kasus