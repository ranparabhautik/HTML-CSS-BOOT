

const body = document.body
// const div = document.createElement("div")
// div.innerHTML= "<em><h2>Helloooo </h2></em>"
// body.append(div)



// // but rendering direct html from JS is not good practice and harmful so instead use this 


// const em = document.createElement('em')
// em.innerText="Bhautik Ranpara"
// body.append(em)


const div= document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanWorld = document.querySelector("#world")

spanWorld.remove()
div.append(spanWorld)

console.log(spanWorld.setAttribute("id",'asdadsads'))

// console.log(spanHi.getAttribute('title'))
console.log(spanHi.id)

console.log(spanHi.setAttribute('id',"newID"))
console.log(spanHi.title = "This is the new title")

console.log(spanHi.removeAttribute("title"))


const x = document.getElementById("main")
const y = x.getElementsByTagName('p')

document.getElementById("demo").innerHTML += ", This is added text , "+ y[0].innerHTML;

// ================================================================================================

const a = document.getElementsByClassName("intro")
document.getElementById("mainclass").innerHTML += "abc " + a[0].innerHTML;

// ===============================================================================================

const sometext = document.querySelector(".putsometext") // query selector returns the only first match 
sometext.innerHTML = "Helloo world using <mark> QUERYSELECTOR</mark>"

//=============================================================================================
const t1 = document.querySelector("#text1")
console.log(t1.dataset.demo)
console.log(t1.dataset.name)

t1.dataset.newproperty = "this is new Property"

//=================================================================================
// adding new class list in the element

const CL  =document.querySelector("#id1")
CL.classList.add("C3")
CL.classList.remove("C2")

const textred = document.querySelector("#text2")
textred.style.color = "red"
textred.style.backgroundColor="yellow"


// +=============================================================================================

//form data
const formdata = document.forms["form1"]
let text = ""
for(let i=0;i<formdata.length;i++)
{
    text += formdata.elements[i].value+"<br>"
}
document.getElementById("formdata").innerHTML = text
const xy = document.getElementById("formdata")
xy.style.color="green"
xy.style.fontSize="50px"


// ==========================================================================================

document.getElementById("linkcount").innerHTML = "Link counter : "+document.anchors.length;
// ========================================================================================


// document.getElementById("allcontent").innerHTML = document.body.innerHTML 

// ==========================================================================================

document.documentElement.style.backgroundColor = "lightyellow"
// ==========================================================================================

console.log(document.embeds.length)
console.log(document.embeds[0].src)

console.log(document.images.length)


// =============================================================================================
// changing the src of the image , changing the attribute

document.getElementById("myimg").src = "rightarrow.webp"

// =============================================================================================

document.getElementById("date").innerHTML = Date()

// =============================================================================================

const deftext = document.getElementById("defaulttext")
const btn = document.getElementById("redbutton")

btn.addEventListener("click",function(){
    deftext.style.color="blue"
    deftext.backgroundColor="red"
})

const para = document.getElementById("lorem");
const hide = document.getElementById("hidebtn")
const show = document.getElementById("showbtn")

hide.addEventListener("click",()=>{
    para.style.visibility="hidden"
    console.log("Text Hidden")
})

show.addEventListener("click",()=>{
    para.style.visibility="visible"
    console.log("Text shown")
})

// =============================================================================================


function check(){
    let x = document.forms['myform']["fname"].value;
    if(x =="" || (x>10 || x<0 )){
        alert("This field should not be empty. or values between 1-10")
        console.log("empty field")
        return false;
    }
    else{
        console.log(x)
    }

}

const fnameinput = document.getElementById("fname")
fnameinput.addEventListener("blur",()=>{
    fnameinput.style.backgroundColor="cyan"
})
