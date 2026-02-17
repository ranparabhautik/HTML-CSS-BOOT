let data = `{
  "employees": [
    {
      "firstname": "Amit",
      "lastname": "Sharma",
      "city": "Delhi",
      "DOB": "2002-12-23"
    },
    {
      "firstname": "Priya",
      "lastname": "Verma",
      "city": "Mumbai",
      "DOB": "2002-12-23"
    },
    {
      "firstname": "Rahul",
      "lastname": "Patel",
      "city": "Ahmedabad",
      "DOB": "2002-12-23"
    },
    {
      "firstname": "Sneha",
      "lastname": "Reddy",
      "city": "Hyderabad",
      "DOB": "2002-12-23"
    },
    {
      "firstname": "Vikram",
      "lastname": "Singh",
      "city": "Jaipur",
      "DOB": "2002-12-23"
    }
  ]
}`

const object = JSON.parse(data)
document.getElementById("employeedata").innerHTML = object.employees[1].firstname + " " + object.employees[1].city

const dob = (object.employees[1].DOB)

const date = (object.birth = new Date(dob))
console.log(typeof date)

console.log(JSON.stringify(data))

const div = document.createElement("div")
document.body.append(div)
document.querySelector("div").innerHTML = data



const array = ['abc','def','mno','pqr','xyz']
const jsonarray = JSON.stringify(array)
document.getElementById("employee").innerHTML += jsonarray