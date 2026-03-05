const btn = document.getElementById("addbtn")
const right = document.getElementById("rightdiv")
const input = document.getElementById("inputText");
const container = document.getElementById("container")
btn.addEventListener("click",()=>{
    let inputNum = Number(input.value);
    // console.log(inputNum)
    if(inputNum <=0 ){
        alert("Enter Correct Number")
        return;
    }

    let width = right.clientWidth;

    console.log(width)
    if(width % inputNum !==0){
        alert("Cant divide in equal parts");
        return;
    }

    right.innerHTML = ""

    let partwidth = width/inputNum;


    for(let i=0;i<inputNum;i++){
        const div = document.createElement("div")
        div.style.width = partwidth+"px"
        // div.textContent = i+1
        div.classList.add("partwidth")
        right.appendChild(div)
    }

})