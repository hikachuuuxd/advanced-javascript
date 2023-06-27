const tampilNama = (nama) => {
    console.log(nama)
}
tampilNama('Nisrina')

// Jika parameter hanya satu tidak perlu kurung buka tutp dalam penulisan parameter
const nama = nama => {
    return nama
}
console.log(nama('Hikari'))

// Jika hanya menampilkan 1 return saja perintah retrun tidak perlu di tulis
const halo = nama => `halo ${nama}`
console.log(halo('Hikari Mizu'))

// Map 
let Mahasiswa = [1, 2, 3, 4, 5, 6, 7, 8]
let coba = Mahasiswa.map((e, i) => {return `index ke ${i}, angka ${e}`})
console.table(coba)

// Mengembalikan array dalam object 
let mahasiswa = ['Nisrina', 'Hikari', 'Mizu', 'Asagiri']
let mhs = mahasiswa.map(nama => ({ nama : nama, length : nama.length }))
console.table(mhs)

// 