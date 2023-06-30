// Destructuring Array
// Mengubah nilai dari setiap index pada array dan setiap properti pada objec menjadi variable  
const hobi = ['Membaca', 'Menulis', 'Berengan', 'Bersepeda', 'Ngoding', 'Nonton anime']
const [membaca, menulis, berenang, bersepeda, ngoding, anime] = hobi
console.log(membaca)

// skip item
const [baca,  ,  , sepeda,  ,  ] = hobi
console.log(sepeda)

// swap item atau menukar isi variable
let a = 1
let b = 0
console.log(a); 
[a, b] = [b, a] // Sebelum di deklarasikan line sebelumnya harus diberi titik koma
console.log(a)

// return value pada function
function coba(){
    return [1, 2, 3]
}

const [satu, dua, tiga] = coba()
console.log(tiga)

//Rest Parameter
let jurusan = ['RPL', 'MM', 'TKJ', 'KI', 'KA', 'BDP', 'OTKP', 'AKL']
const [rpl, mm, tkj, ...lainnya] = jurusan
console.log(lainnya)

// Destructuring Object
const mhs = {
    id: 1,
    nama: 'Nisrina', 
    umur: 17
}
const {nama, umur} = mhs
console.log(umur);

// Assigment tanpa deklarasi object
(
    {aku, kamu, email = "nisrina@gmail"} = {
        aku: "Nisrina", 
        kamu: "Hikari" });

console.log(kamu);

//default value
console.log(email);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
function getId({id}){
    return id
}

console.log(getId(mhs))

// Destructuring function
// return value
function operasi(a, b){
    return [a + b, a * b]
}
const [tambah, kali] = operasi(4, 6)
console.log(tambah);

// function argumen
const abal = {
    nilai: 1, 
    akreditasi: 'A', 
    lokasi: 'Surabaya',
    mahasiswa: {
        satu: 'Lalapoo',
        dua: 'Tingki', 
        tiga: 'Dipsi'
    }
}

function cetakAbal({akreditasi, lokasi, mahasiswa:{satu, dua, tiga}}){
    return `abal ini terakreditasi ${akreditasi}, dan berlokasi di ${lokasi} dam memiliki mahasiswa yaitu ${satu}, ${dua}, ${tigag}`
};

console.log(cetakAbal(abal));