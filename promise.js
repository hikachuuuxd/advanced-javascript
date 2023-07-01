/* 
Promise 
Objet yang merepresentasikan keberhasilan/kegagalan sebuah event yang asych di masa yang akan datang
 callback : resolve (terpenuhi), reject (tidak terpenuhi), finally ()
 callback finally : biasa digunakan untuk ketika ada fitur loading finally akan dijalankan ketika loding selesai
 aksi : then (terpenuhi), catch (tidak terpenuhi)

*/

// contoh 1
const janji = false
const janji1 = new Promise((resolve, reject) => {
    janji ? resolve('ditepati') : reject('ingkar')
})

janji1.then(res => console.log(res)).catch(res => console.log(res))

// contoh 2
const janji2 = new Promise((resolve, reject) => {
    janji ? setTimeout(() => resolve('janji 2 ditepati'), 2000) : setTimeout(()=> reject('janji 2 diingkari'), 500)
})
console.log('mulai')
janji2.then(res => console.log(res)).catch(res => console.log(res))
console.log('selesai')

// Promise.all (ketika memiliki lebih dari dua promise)
const mhs = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                nama: 'Nisrina', 
                kelas: 4, 
                bidang: 'Programmer'
            }
        ])
    }, 1000)
})

const buku = new Promise(resolve => {
    setTimeout(()=>{
        resolve([
            {
                judul: 'NBA', 
                total: '699 halaman', 
                penulis: 'Myia', 
                rating: 6.0
            }
        ])
    }, 3000)
})

Promise.all([mhs, buku]).then(res => {
    const [mhs, buku] = res
    console.log(mhs[0])
    console.log(buku[0])
})