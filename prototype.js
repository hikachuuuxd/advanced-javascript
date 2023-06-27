function Mahasiswa(nama, usia, energi){
    this.nama = nama
    this.usia = usia
    this.energi = energi
}

Mahasiswa.prototype.makan = function (porsi){
    this.energi += porsi
    return this.energi
}

let nisrina = new Mahasiswa('Nisrina', 29, 0 )

// bisa untuk melihat fungsi di suatu array
let array = [1, 2, 4]

//Object with Class konsep
class Siswa{
    constructor(nama, usia, energi){
        this.nama = nama
        this.usia = usia
        this.energi = energi
    }

    makan(porsi){
        this.energi += porsi
        return this.energi
    }
}

let hikari = new Siswa('Hikari', 13, 0)