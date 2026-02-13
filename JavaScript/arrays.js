const fruits = ["kiwi","apple","banana","grapes"]
fruits.push("pineapple")
console.log(fruits)




localStorage.setItem("Name","Bhautik")
localStorage.setItem("City","Ahmedabad")
localStorage.setItem("ID","111")



let id = localStorage.getItem("ID")
console.log(id)
let city = localStorage.getItem("City")
console.log(city)

localStorage.removeItem("City")
console.log(city)