// let name = []
// console.log(typeof(name))

// const phi = 3.14
// console.log(phi)

// let ipk = 4.0;
// console.log(ipk)
// let isSuccess = true
// console.log(isSuccess)

// let fakultas = ["Fakultas Ilmu Komputer", "Fakultas Hukum", "Fakultas Teknik"]
// console.log(fakultas[1])

// const hukum = fakultas[1]
// console.log(hukum)

// const [fakul1,fakul2,fakul3] = fakultas
// console.log(fakul3)

// fakultas.push("Fakultas Kedokteran")
// console.log(fakultas)

// fakultas.pop()
// console.log(fakultas)

// fakultas.shift()
// console.log(fakultas)

// fakultas.unshift("Fakultas Ilmu Padi")
// console.log(fakultas)

// let result = 18 < 2
// console.log(result)

// let namaDepan = "Fauzan"
// let namaTengah = "Ario"
// let namaBelakang = "Bagaskoro"
// let namaLengkap = namaDepan + " " + namaTengah.concat(" " + namaBelakang)
// console.log(namaLengkap)

// let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"];
// console.log(male)

// let female = ["Lilis Puspitasari","Ririn Noviyanti","Putri Wijaya"];
// console.log(female)

// let students = [...male,...female];
// console.log(students)

// let orang = {
//     nama:"Ario",
//     kelas: ["4e","informatika"],
//     npm:2210631170069
// }
// console.log(orang.nama)
// console.log(orang["kelas"])
// console.log(orang["npm"])

// let nilai;
// nilai = 100
// nilai = + nilai
// console.log(typeof(nilai))
// if (nilai == 100){
//     console.log("sempurna")
// }

// let nomor = [1, 2, 3, 4, 5]
// for(let i of nomor){
//     console.log(i)
// }

function nama(number1, number2){
    console.log(number1+number2)
}
nama(1,2)

const hello = () =>{
    console.log("Hello World")
}
hello()

const urutan = (...nomor) => {
    console.log(...nomor)
}
urutan(1, 2, 3, 4, 5, 6, 7, 8)

const average = (...index) =>{
    let sum = index.length
    let result = 0
    for( const i of index){
        result += i
    }
    return result/sum
}
console.log("rata-ratanya adalah " + average(2,3,4,5,6,7,8,9,10,11,12,13,14))

const iyah = () => "iya dong"
const penambahan = (number1, number2) => {
    return number1 + number2
}
const pengurangan = (number1, number2) => number1 - number2
let result = penambahan(10,20)
let result2 = pengurangan(15,5)
console.log(result2)
console.log(result)