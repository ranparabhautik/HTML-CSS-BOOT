const arr = [2,6,4,9,5]

function double(x){
    return x*2;
}
function triple(x){
    return x*3
}
function fourtimes(x){
    return x*4;
}
const output = arr.map(double)
console.log(output)//                   double


console.log(arr.map(triple))//          triple

const result = arr.map((x)=>{
    return x*4;
})
console.log(result)//                   four times                

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  Filter


const array = [5,8,6,3,7,4]

const res1 = array.filter((x)=>{
    return x % 2;
})
console.log(res1)//                      for odds

function isEven(x){
    return x % 2 ===0;
}
const res2 = array.filter(isEven)    
console.log(res2)//                      for evens




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  Reduce

const vals = [2,5,7,3,6,8,10,9]


// function sum(vals){
//     let sum=0;
//     for(let i=0;i<vals.length;i++){
//         sum+=vals[i]
//     }                                        finding sum through functions.
//     return sum;
// }
// console.log(sum(vals))






// finding sum using reduce
const res3 = vals.reduce(function(acc,curr){// acc= accumulator, curr = current, in finding total sum, sum= acc, arr[i] = curr
    acc = acc+curr
    return acc;
},0);// here 0 is used for initialising the value of accumulator acc , such as we used to define the value of sum in finding the sum of values.                                  
console.log(res3)






//  finding max through functions.
// function maxval(vals){
//     let max=0;
//     for(let i=0;i<vals.length;i++){
//         if(vals[i] > max){
//             max = vals[i]
//         }
//     }
//     return max
// }
// console.log(maxval(vals))


// finding max using reduce

const res4 = vals.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0)
console.log(res4)



// using map performing a real life example

const data = [
    {fname:"Bhautik",lname:"Ranpara"},
    {fname:"Loy",lname:"Doe"},
    {fname:"Sam",lname:"Roy"},
    {fname:"John",lname:"Sam"}
];



const userlist = data.map((x)=>{
   return x.fname + " " + x.lname;
})
console.log(userlist)


