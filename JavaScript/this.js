console.log("Good Morning")

const video ={
    title:10,
    play(){
        console.log(this);
    }
};
video.play();   

video.stop = function(){
    console.log(this)
}
video.stop()

// behaviour this keyword is based on strict / non strict mode




console.log(this)
function x(){
    'use strict';
    console.log(this)
}
x()

console.log(window.x()) // if we call x() with reference , like here we used with window so it run.


// if non strict mode => this substitution.
 // this substitution.:-- 
// If the value of "this" keyword is undefined or null, then this keyword will be replaced by global object only in non-strict mode.
// hence 

// in above example the value of "this" inside the function is same as it is in non strict mode so it applys this substitution , global will be substituted.






const student={
    fname:"John",
    lname:"Doe",
    printName : function(){
        console.log(this.fname+this.lname)
    }
}
student.printName();

const student2={
    fname:"Barney",
    lname:"stinson"
}

student.printName.call(student2)// we used call() function , it will reuse the code and call the printName() of the student , here in the call parameter , pass **student2 as this**.   



//===========================================================CALL===============================================
// in call the many arguments are passed comma separated

let person={
    age:30,
    city:"rajkot",
    pname:"Ajay"
}

let printInfo = function(lastname,contact){
    console.log("Name is "+this.pname +", age : "+this.age+" last name : "+lastname+" Contact : "+contact)
}
printInfo.call(person,"JOHNJOHN",9998887771)


let person2={
    age:40,
    city:"ahmedabad",
    pname:"Roy"
}

printInfo.call(person2,"TANTAN",1472583690)


// ==================================================APPLY================================================================
// key differnce is just teh difference between passing arguments. here the second argument is the arraylist of the parametes.


printInfo.apply(person2,["Sharma",8529637410])


//=============================================================BIND============================================================
// bind does not invoke the method , it just creates exact same copy of the method which is executable.

let showInfo = printInfo.bind(person2,"Verma",1234567890)
console.log(showInfo)
showInfo()





//=============================================================THIS IN ARROW FUNCTION============================================================
// here in arrow function , this keyword acts differently , arrow function doesnot have their own this keyword , so it will enclose to their own lexical context , that means their lexical object will be return. Here in this example const "a" is global so it will print global ie window
const a={
    x:100,
    y:()=>{
        console.log(this)
    },    
};
a.y()

// now we will nest the arrow function in a function


const b={
    m:120,
    p:function(){
        const n=()=>{
            console.log(this)
        }
        n();
    }
}
b.p()


// const b={
//     m:1212,
//     p:function(){
//         console.log(this)
//     }
// }
// b.p()



// this inside DOM = reference to HTML document.
