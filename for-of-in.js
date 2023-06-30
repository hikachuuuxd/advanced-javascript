//for of untuk data iteratarable seperti string, arguments, nodelist
const coba = 'Coba'
for(n of coba){
    console.log(n)
}

function angka(){
    for(n of arguments){
        console.log(n)
    }
}

angka(1, 2, 3, 4, 6)

const li = document.querySelectorAll('ul li')
for(n of li){
    console.log(n.innerHTML)
}

//for in untuk data non iterable atau numerable seperti object

const object = {
    nama: 'Nisrina', 
    kelas: 'XII RPL 1'
}

for(n in object){
    console.log(object[n])
}