const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// grandparent.addEventListener("click", e => {
//     // console.log(e.target)
//     console.log("Grandparent 1")
// },
//     { capture: true }
// )
// parent.addEventListener("click", e => {
//     // console.log(e.target)
//     console.log("Parent 1")
// },
//     {capture :true}
// )
// child.addEventListener("click", e => {
//     // console.log(e.target)
//     console.log("Child 1")
// })
// document.addEventListener("click", e => {
//     console.log("Document 1")
// })

// bubbling means from bottom to top
// capture means from top to bottom

document.addEventListener("click", e => {
    console.log("Document Capture 1 ")
}, { capture: true })
document.addEventListener("click", e => {
    
    console.log("Document Bubble 1")
})

grandparent.addEventListener("click", e => {
    console.log("Grandparent Capture 1")
}, { capture: true })
grandparent.addEventListener("click", e => {

    console.log("Grandparent Bubble 1")
})

parent.addEventListener("click", e => {
    console.log("parent Capture 1")
}, { capture: true })
parent.addEventListener("click", e => {

    console.log("parent Bubble 1")
})

child.addEventListener("click", e => {
    console.log("child Capture 1")
}, { capture: true })
child.addEventListener("click", e => {
    // e.stopPropagation()
    console.log("child Bubble 1")

},{once:true})


// {once : true } it renders the element only one time and removes itself , adter that we click anothe time that particular event will not be called
// e.stopPropogation() will stop the further calling of event even if its capture event or bubbly event.

// when we wants an event to run 4 times and then remove , then stopPropogation and once , will not work, we need to use removeEventListner() 