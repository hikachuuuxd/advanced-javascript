/*
 Spread operator 
 1. menggabungkan 2 array bisa 
 2. Meng-copy array tanpa mengubah array original saat array copy an di manipulasi
 3. Mengubah variable non array menjadi array
 */

const it = ['RPL', 'MM', 'TKJ']
const kimia = ['KA', 'KI']
const jurusan = [...it, 'OTKP', 'BDP', 'AKL' ,...kimia]
console.log(jurusan)

const original = [1, 2, 4, 5, 6, 5]
const copy = [...original]
copy[0] = 60
console.log(copy)

const text = document.querySelector('.nama')
const single = [...text.textContent].map(e => `<span>${e}</span>`).join('')
text.innerHTML = single
console.log(single)

