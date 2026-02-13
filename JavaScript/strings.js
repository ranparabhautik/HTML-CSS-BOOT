// let str = "JavaScript is Awsome"
// console.log(str)
// // Length
// console.log(str.length)

// // to upperCase
// let s1 = str.toUpperCase()
// console.log(s1)

// // to lowercase

// let s2 = str.toLowerCase()
// console.log(s2)

// // slice, slice has 2 params, start end , -> start= starting index , end -> endign index excluding end ,

// let s3 = str.slice(0,5)
// console.log(s3)
// let s4 = str.slice(4)
// console.log(s4)
// let s5 = str.slice(-6)
// console.log(s5)

// // Substring , here negatives are not allowed , it considers as 0, substring takes 2 params.
// // it automatically swaps , if we does like this (4,0) , it considers as (0,4)
// let s6 = str.substring(0,5);
// let s7 = str.substring(8,0);
// console.log(s6)
// console.log(s7)


// // replace() function takes 2 params, search value and replace value , search value can be string or regular expression , replace value can be string or function.

// let s8 = str.replace("Awsome", "Nicee");
// console.log(s8)
// let demo = "Hello Hello Hello Hello"
// console.log(demo)
// console.log(demo.replaceAll("Hello","Hi"))


// let demo2 = "a,b,c,d,e,f"
// console.log(demo2.split(","))
// console.log(demo2.split(",",3))

// let demo3 = "    Helloo     "
// console.log(demo3.trim()) // trimStart()  trimEnd()


// // -------------------------------------------------------------------------------------------------------------------------------------------------------------

// let price = 100
// let interest = 8
// console.log(`the amount will be ${(price*8/100)+price}`)


// let five = "5"
// console.log(five.padStart(6,"x"))

// let greet = "Good Morning!"
// console.log(greet.repeat(3))




// x= sumvalues(10,20,10,10,60,90,60,40,80,30,100)

// function sumvalues(){
//     let max=0;
//     for(let i=0;i<arguments.length;i++)
//     {
//         max +=arguments[i]
//     }
//     return max;
// }
// console.log(x)


// y= values(10,20,10,10,60,90,60,40,80,30,100)

// function values(...args){
//     let sum=0
//     for(let arg of args){
//         sum+=arg
//     }
//     return sum
// }
// console.log(y)























































// -------------------------------------------------------------


const person= {
    fname:"Bhautik",
    lname:"Ranpara",
    age:23,
    id:2060,
    address:{
        city:"rajkot",
        pin:360002,
        scooter:{
            w2:"Activa",
            w4:"i20"
        }
    },
    getID:function(){
        return this.id
    }

}
person.contact=10203020
console.log(person.fname+person.lname+person.city)
delete person.city;
// console.log(person.city)
// console.log(person.contact)
// delete person.contact
// console.log(person.contact)

console.log(person.fname,person.age,person.address["city"],person.address.scooter.w4,person.getID())
let aaa = person
console.log(aaa)

for (let x in person){
    console.log(person[x])
}

const myarray = Object.values(person)
console.log(myarray.toString())

console.log(JSON.stringify(person))












function Car(color, tyre , engine , height){
    this.color = color;
    this.tyre = tyre;
    this.engine = engine;
    this.height = height;
    this.price = 2000 
}
const VWpolo = new Car("Blue","CEAT","V8",150)
const MGcomet = new Car("Black","Appolo","Electric",120)

console.log(Object.values(VWpolo))
console.log(Object.values(MGcomet))















