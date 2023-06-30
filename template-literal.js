// contoh penggunaan 
// ternary operator
let x = 11
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil' }`)

// Html Fragments
const mahasiswa ={
    nama : "Nisrina", 
    umur : 25,
    hobi : ['manulis', 'ngoding', 'membaca', 'nonton anime']

}
function hobi(hobi){
    return `
    <ol> 
        ${hobi.map((e, i)=> `<li>${e}</li>` ).join('')}</ol>
    `
}

const element = `<div class="mahasiswa">
<ul>

<li>Nama : ${mahasiswa.nama}</li>
<li>Usia : ${mahasiswa.umur}</li>
<li>Hobi :  ${hobi(mahasiswa.hobi)}</li>     
</ul></div>`

const body = document.body
body.innerHTML  = element

// Tag templae
const nama = 'Hikari'
const usia = 19
function templae(str, ...mhs){
    return str.reduce((total, item, i) => {
         return `${total}${item}<span class="h1">${mhs[i] || ''}</span> `
        }, '')
}
const str = templae`halo ${nama} usia saya ${usia} tahun`
console.log(str)
body.innerHTML = str