const fruits = ["kiwi","apple","banana","grapes"]
fruits.push("pineapple")
// console.log(fruits)





fruits.push("Chiku","Oranges")

for( let x of fruits){
    console.log(x)
}

let deletedfruit = fruits.pop()
console.log(fruits.toString())
console.log(deletedfruit)

let veggeis = ["tomato","carrot","potato","spinach"]
let grains = ["wheat","rice","millet","ragi"]

let foodItems = fruits.concat(veggeis,grains)
console.log(foodItems)



fruits.unshift("guava") // adding element in front of the array.
console.log(fruits.toString())





// using push() and shift() lead us to queue for array as shift() removes element from front.



// slice() in array
console.log(foodItems)
console.log(foodItems.slice(2,6).toString())


// splice() in array

let arr = [1,2,3,4,5,6,7,8]
arr.splice(3,2,400,500) // this demonstrates the deleting updating the array.
// console.log(arr)

let arr1 = [1,2,3,4,5,6,7,8]
arr1.splice(2,0,11,12,13) // this added 11 12 13 elements in the 2nd index of array and then shifted other elements to right.


let arr2 = [1,2,3,4,5,6,7,8]
console.log(arr2)
arr2.splice(2,2) // this deletes 2 elements at index two







// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// veggeis.sort() // this will leads to the permanent sorting of the array
// veggeis.toSorted() // this sorts the array and creates a new array , so original array stays unchanged.

// veggeis.reverse() // this reverses array and make it permanent ,it changes the original array
// veggeis.toReversed() // here the original array remains untouched

let points = [10,3,90,43,55,71,55,20]
console.log(points.sort(function(a,b){
    return a-b;
}))









// localStorage.setItem("Name","Bhautik")
// localStorage.setItem("City","Ahmedabad")
// localStorage.setItem("ID","111")



// let id = localStorage.getItem("ID")
// console.log(id)
// let city = localStorage.getItem("City")
// console.log(city)

// localStorage.removeItem("City")
// console.log(city)