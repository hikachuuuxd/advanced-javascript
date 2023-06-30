/* 
Fungsi :
Membuat function sebagai argumen 
callback function yang disimpan sebagai argumen
function yang memiliki callback disebut higher order function
function yang mereturn function jg disebuat higher order function
*/ 


/* Tujuan 
 1. Abstraksi = program dipisahkan dalam function  - function 
 2. Pendekatan paradigma functional Programming
*/
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
const videos = Array.from(document.querySelectorAll('[data-duration]'))
let js = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
        .map(duration => duration.dataset.duration).map(time => {
            const parts = time.split(':').map(part => parseFloat(part))
            return (parts[0] * 60) + parts[1]
        }).reduce((total, detik) => total + detik)

const jam = Math.round(js / 3600)
js = js - jam * 3600
const menit = Math.round(js / 60)
const detik = js - menit * 60

const durasi = document.querySelector('.total-durasi')
durasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`
const jmlVideo  = document.querySelector('.jumlah-video')
const total = videos.filter(data => data.innerHTML.includes('JAVASCRIPT LANJUTAN')).length
jmlVideo.innerHTML = `${total} vidio`