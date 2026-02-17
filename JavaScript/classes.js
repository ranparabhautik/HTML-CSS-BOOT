// class Car{
//     start(){
//         console.log("-------------------Starting the car")
//     }
//     stop(){
//         console.log("Stopping the car")
//     }
//     constructor(name,torq){
//         this.name = name;
//         this.torq = torq;
//         console.log(`Car name is ${name}`)
//         console.log(`Torq is : ${torq}`)
//     }
// }
// let obj1 = new Car("BMW",120)
// obj1.start();
// obj1.stop()

// let maruti = new Car("Vitara",90)
// maruti.start()
// maruti.stop()


class Orders {
    constructor(customerName) {
        this.customerName = customerName;
        this.items = []
    }
    addItem(product, price) {
        this.items.push({ product, price });
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
let customer1 = new Orders("Bhautik")
customer1.addItem("Macbook M4", 90000)
customer1.addItem("S25 Ultra", 125000)

console.log(customer1.getTotal())




//--------------------------------------------------------------------------- Getters and Setters-----------------------------


// const Person ={
//     // firstName : "Bhautik",
//     // lastName : "Ranpara",
//     get fullName(){
//         return `${this.firstName}  ${this.lastName}`
//     },
//     set fullName(value){
//         const parts = value.split(" ")
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// };
// Person.fullName = "Bhautik Ranparaa"
// console.log(Person)

class Person {
    constructor(a, b, c) {
        this.firstname = a
        this.lastname = b;
        this.age = c;
    }
    set firstname(fname) {
        if (typeof fname === "string" && fname.length > 0) {
            this._firstname = fname;
        } else {
            console.error("It must be string")
        }
    }
    set lastname(lname) {
        if (typeof lname === "string" && lname.length > 0) {
            this._lastname = lname;
        } else {
            console.error("It must be string")
        }
    }
    set age(age) {
        if (typeof age === "number" && age > 0) {
            this._age = age;
        } else {
            console.error("Age must be positive number")
        }
    }

    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get age() {
        return this._age;
    }

    display(){
        console.log(`${this.firstname}${this.lastname}${this.age}`)
    }


}

let p1 = new Person("John", "Doe", 20)
console.log(p1.firstname)
console.log(p1.lastname)
console.log(p1.age)
p1.display()
