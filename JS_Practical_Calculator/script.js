document.querySelector("#scientific-calc").classList.add("d-none")
document.getElementById("scientific-deg").classList.add("d-none")
document.getElementById("scientific-trigo").classList.add("d-none")
document.querySelector("#offcanvas-standard").addEventListener("click",()=>{
    document.getElementById("scientific-calc").classList.add("d-none")
    document.getElementById("scientific-deg").classList.add("d-none")
    document.getElementById("scientific-trigo").classList.add("d-none")
    document.getElementById("standard-calc").classList.remove("d-none")
})

document.querySelector("#offcanvas-scienctific").addEventListener("click",()=>{
    document.getElementById("scientific-calc").classList.remove("d-none")
    document.getElementById("scientific-deg").classList.remove("d-none")
    document.getElementById("scientific-trigo").classList.remove("d-none")
    document.getElementById("standard-calc").classList.add("d-none")
})

const darkui = document.getElementById("darkModeToggle")
if(localStorage.getItem("darkMode")=== "enabled"){
    document.body.classList.add("dark-mode")
    darkui.checked  = true;
}
darkui.addEventListener("change",function(){
    if(this.checked){
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode","enabled");
    }else{
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode","disabled")
    }
})


