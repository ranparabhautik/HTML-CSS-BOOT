
// // console.log(x)
// getName()
// // fetchName()
// x=10
// // console.log(getName)
// function getName(){
//     console.log("Hello World")
// }


// // getName()
// // console.log(x)


// var fetchName = () =>{
//     console.log("Message from fetchName")
// }
// ----------------------------------------------until ep 4--------------------------------------


// console.log(x)
// var x = 1
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10
//     console.log(x);
// }
// function b() {
//     var x = 100
//     console.log(x);
// }

// -------------------------------------------------------------------------------- ------------------------

// let abc = 130
// console.log(typeof (abc))

// abc = "Bhautik Ranparaaaaa!!!!"
// console.log(typeof (abc))

// abc = true
// console.log(typeof (abc))

// let counter;
// console.log(counter)

// console.log(typeof (counter))

// counter = 100
// console.log(typeof counter)

// let num = 0o56;
// console.log(num)

// num = 0o20
// console.log(num)

// num = 0x90bb
// console.log(num)

// num = 100_100_100_000;
// console.log(num)

// let number;
// if (number === undefined) {
//     number = null;
// }
// console.log(number)





// ------------------------------------------------------------------------------------
// for binary parsing

// let z = parseInt('110', 2)
// console.log(z)

// z = 0b11010
// console.log(z)


// let zz;
// console.log(zz)




// ---------------------------------------------------------------------------------------------

//lexical scope chain


// function a1() {         //
//     var c = 10;         //
//     b1();               //  <-----|
//     function b1() {     //        ^
//         console.log(c); //--->----|
//     }                   //
// }                       //
//                         //
// a1()                    //
// console.log("-"*50)




//------------------STRINGS------------------------------------------------------------------------------------

// let str1 = "Helloo"
// console.log(str1)

// console.log(str1[4])
// console.log(str1.length)
// console.log(str1[str1.length-1])

// let namee = "Bhautik"
// console.log(str1+" "+namee)

// let boool = false
// str1 = boool.toString()
// console.log(str1)
// console.log(Boolean(str1))


// let ans = "a" < "b"
// console.log(ans)

// ans = "A" > "B"
// console.log(ans)


// --------------------------------------------------------------------------------------------------------


// let person = {
//     fname:"Bhautik ",
//     lname:"Ranpara",
//     'mob no': 10202020
// }

// console.log(person.fname[3])
// console.log(person['lname'])
// console.log(person["mob no"])

// -----------------------------------------------------------------------Temporal dead zone------------------------------

// console.log(temp1)
// console.log(temp2)

// let temp1=10;  
// var temp2=9;


// ------------------------------------------------------Block scope---------------------------------------------------------------------

// var a=500
// let b=320
// {
//     var a=10
//     let b=20
//     const c=50
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)
// console.log(b)



// ------



// const a=20
// {
//     const a=40
//     {
//         const a=60
//         console.log(a)
//     }
// }



// ---------------------------------------------------------Closures--------------------------

// function x() {
//     var a = 100;
//     function b() {
//         console.log(a)
//     }
//     a=500;
//     return b;
// }
// var result =    x();
// console.log(result)
// result()


// --------------------------------------------------------------------------------------------------


// function print(){
//     setTimeout(() => {
//         console.log("Hello BHautik!!")
//     }, 4000);
//     console.log("before 4 seconds")
// }
// print()


// // using let , using var here leads to fully updation of value of i , ie= 6 then prints 5 times
// function one(){
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     }
//     console.log("Printing 1 to 5");
// }
// one()


// using var
// function one(){
//     for(var i=1;i<=5;i++){
//         function print(x){
//             setTimeout(() => {
//                 console.log(x)
//             }, i*1000);
//         }
//         print(i)
//     }
//     console.log("printing i using var ")
// }

// one()



// closure demo

// function outest() {
//         var y = 4742
//     function outer(x) {
//         var a = 100;
//         function inner() {
//             console.log(a,b,y,x)
//         }
//         return inner;
//     }
//     return outer;
// }
// b=12112
// outest()("Helloo")()
// // console.log(outer()) 

// --------------------------------------------------------------------------------------------------------------



// function count() {
//     let count = 0;

//     document.getElementById("clickme").addEventListener('mouseover', function abc() {
//         console.log("Button Clicked", ++count);
//     });
// }
// count();





// console.log("Start")

// document.getElementById("clickme").addEventListener("click", function button_click_callback(){
//     console.log("Button Clicked just Now ");
// });

// console.log("End")









// console.log("Start")

// setTimeout(function cbT(){
//     console.log("Call back set time out.")
// },6000)

// fetch("https://api.data.gov/").then(function cbN(){
//     console.log("Netflix API called")
// })

// console.log("End")






// -----------------------------------------------------------------Simulating main thread delay-------------------------------------------

// console.log("Start")
// setTimeout(function ab(){
//     console.log("Hello World after 5 sec.")
// },5000);
// console.log("End")

// let startdate = new Date().getTime()
// let enddate = startdate;
// while(enddate < startdate + 1e4){
//     enddate = new Date().getTime()
// }
// console.log("After 10000 ms")










// another way to use settimeout

// console.log("Start")
// function cb(){
//     console.log("CB function")
// }
// setTimeout(cb,2500);
// console.log("End")








// calculating the radius using high order function.===> higher order functions are the functions which are passed as argument in another function

const radius = [10,5,6,3];
// const area = function (radius){
//     const output = [];
//     for(let i=0;i<4;i++)
//     {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// const result = area(radius)
// console.log(result)
// console.log(result[2]);
// console.log(area(radius));


const area = function(radius){
    return Math.PI*radius*radius;
}

const circum = function(radius){
    return Math.PI*2*radius
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}


console.log(calculate(radius,area));    
console.log(calculate(radius,circum));    
console.log(calculate(radius,diameter));