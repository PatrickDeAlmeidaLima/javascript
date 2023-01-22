// // 1 - var, let e const
// var x = 10
// var y = 15

// if (y > 10) {
//     x = 5
//     console.log(x);
// }
// console.log(x)
// let a = 10
// let b = 15
// if (b > 10) {
//     let a = 5
//     console.log(a)
// }
// console.log(a)
// let i = 100;
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i)

// function logName() {
//     const name = "Patrick"
//     console.log(name)
// }

// const name = "Pedro"
// logName()

// console.log(name)

//----------------------------------------------------------------------------------------------------------
// // 2 arrow function

// const sum = function sum(a, b) {
//     return a + b
// }

// const arrowSum = (a, b) => a + b

// console.log(sum(4, 5))
// console.log(arrowSum(5, 5))

// const greeting = (name) => {
//     if (name) {
//         return "Olá " + name + "!"
//     } else {
//         return "Olá não sei seu nome."
//     }
// }



// console.log(greeting("patrick"))
// console.log(greeting())

// const testArrow = () => console.log("Estou testando a arrow function!")

// testArrow()

// const user = {
//     // javascript antigo
//     name: "Mateus",
//     sayUserName() {
//         var self = this
//         setTimeout(function () {
//             console.log(self)
//             console.log("UserName: " + self.name)
//         }, 500)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log("UserName: " + this.name)
//         }, 700)
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow()

//----------------------------------------------------------------------------------------------------------

// 3 -Filter

// const arr = [1, 2, 3, 4, 5]
// console.log(arr);
// const highNumbers = arr.filter((n) => {
//     if (n >= 3) {
//         return n
//     }
// })

// console.log(highNumbers)


// const users = [{ name: "Patrick", available: true },
// { name: "Mateus", available: true },
// { name: "Luciano", available: false },
// { name: "Yuri", available: false }]

// // const availableUsers = users.filter((user) => {
// //     if (user.available === true) {
// //         return user
// //     }
// // })

// const availableUsers = users.filter((user) => user.available)
// const notAvailableUsers = users.filter((user) => !user.available)

// console.log(availableUsers)
// console.log(notAvailableUsers)

//----------------------------------------------------------------------------------------------------------

// // 4 - Map

// const products = [
//     { name: 'Camisa', price: 10.99, category: 'Roupas' },
//     { name: 'Calça', price: 30.99, category: 'Roupas' },
//     { name: 'Chaleira', price: 20.99, category: 'Utensílios' },
//     { name: 'Fogão', price: 50.99, category: 'Móveis' }
// ]

// products.map((product) => {
//     if (product.category === "Roupas") {
//         product.onSale = true //adicionando dentro do array com o map
//     }
// })
// console.log(products)

//----------------------------------------------------------------------------------------------------------

// 5 - templates literals
const userName = "Patrick";
const age = 30;

console.log(`O nome do usuário é: ${userName} e ele tem:${age} anos.`);
