/*
callback
*/

// study case with JSON
const siswa = [
    {
        nama: "Nisrina", 
        kelas: 'XII RPL 1', 
        absen: 24
    }, 
    {
        nama: "Hikari", 
        kelas: 'XII RPL 3', 
        absen: 20
        
    },
    {
        nama: "Asagiri", 
        kelas: 'XII RPL 2', 
        absen: 28
    }
]

// sync 
console.log('mulai')
siswa.forEach(e => console.log(e.nama))
console.log('selesai')

// async callback
console.log('mulai lagi')
$.ajax({
    url: 'data/siswa.json',
    success: (siswa) => {
        siswa.forEach(e => console.log(e.nama))
    },
    error: (e) => {
        console.log(e.responseText)
    }
})