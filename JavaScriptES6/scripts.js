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

// // 5 - templates literals
// const userName = "Patrick";
// const age = 30;

// console.log(`O nome do usuário é: ${userName} e ele tem:${age} anos.`);
//----------------------------------------------------------------------------------------------------------

// // 6 - Destructuring

// const fruits = ["Maçã", "Banana", "Mamão"]

// const [f1, f2, f3] = fruits

// console.log(f1)
// console.log(f3)

// const productsDetails = {
//     name: "Mouse",
//     price: 39.99,
//     category: "Periféricos",
//     color: "Cinza"
// }

// const { name: productName, price, category: productCategory, color } = productsDetails

// console.log(`O nome do produto é ${productName}, custa R$${price} pertence a categoria ${productCategory} e é da cor ${color}.`)
//----------------------------------------------------------------------------------------------------------

// // 7 - spread operator

// const a1 = [1, 2, 3]
// const b2 = [4, 5, 6]

// const a3 = [...a1, ...b2]

// console.log(a3)

// const a4 = [0, ...a1, 4]

// console.log(a4)

// const carName = { name: 'Gol' }
// const carBrand = { brand: 'VW' }
// const otherInfos = { km: 10000, price: "R$ 49.000,00" }

// const car = { ...carName, ...carBrand, ...otherInfos }

// console.log(car)
//----------------------------------------------------------------------------------------------------------

// 8 - classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Polo", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis azul", 100)
console.log(tenis.name)

console.log(tenis.productWithDiscount(20))

console.log(tenis.productWithDiscount(60))

//----------------------------------------------------------------------------------------------------------

// 9 - Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}



const hat = new ProductWithAttributes("Chapéu", 29.99, ["Azul", "Preto", "Rosa", "Branco", "Amarelo"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()