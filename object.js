// Object Literal

let mahasiswa1 = {
    nama : 'Nisrina Shofwah Firdaus',
    usia : '18 tahun',
    energi : 0,
    makan : function(makan){
        this.energi = this.energi + makan;
        console.log(`energi anda bertambah ${this.energi}! `)
    }
}

let mahasiswa2 = {
    nama : 'Hikari Mizu',
    usia : '20 tahun',
    energi : 0,
    makan : function(makan){
        this.energi = this.energi + makan;
        console.log(`energi anda bertambah ${this.energi}! `)
    }
}

//kekuarangan menggunakan Object Literal adalah jika object yang dibuat banyak maka semakin banyak variable yang dibuat beserta property dan method yang sama akan diulang 

// Function declaration
function mahasiswa (nama, usia, energi){
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.usia = usia
    mahasiswa.energi = energi
    mahasiswa.makan = function (porsi){ 
        this.energi += porsi;
        console.log(`energi anda bertambah ${this.energi}`)
    }
    return mahasiswa
}

let nisrina = mahasiswa('nisrina', 18, 0)
let hikari = mahasiswa('hikari', 19, 0)

// Constructor Function
function Mahasiswa(nama, usia, energi){
    this.nama = nama
    this.usia = usia
    this.energi = energi 
    this.makan = (porsi) => {
        this.energi += porsi
        console.log(`energi anda bertambah ${this.energi}`)
    }
}
let asagiri = new Mahasiswa('Asagiri Hikari', 16, 0) 

