function init(){
   return function (nama){
        console.log(nama)
    }
}

let coba = init()
coba('nisrina')

//contoh 

function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Selamat ${waktu} ${nama}`)
    }
}

let pagi = ucapkanSalam('pagi')
let siang = ucapkanSalam('siang')

pagi('Nisrina')
siang('Hikari')


// contoh 2
let add = (() => {
    let counter = 0
    return function count(){
        return ++counter
    }
})()


