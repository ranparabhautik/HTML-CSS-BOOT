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


const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

let expression = "";

function updateExpressionDisplay() {
    expressionDisplay.innerHTML = expression || "0";
}

function updateResultDisplay(value) {
    resultDisplay.innerHTML = value;
}


function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

document.addEventListener("click", function(e) {
    const btn = e.target.closest(".calc-btn");
    if (!btn) return; 

    const val = btn.dataset.value;

    switch (val) {
        case "=":
            try {
                let result = eval(expression);
                updateResultDisplay(result);
                // expression = result.toString(); 
            } catch {
                updateResultDisplay("Error");
                expression = "";
            }
            updateExpressionDisplay();
            break;

        case "C":
            expression = "";
            updateExpressionDisplay();
            updateResultDisplay(0);
            break;

        case "backspace":
            expression = expression.slice(0, -1);
            updateExpressionDisplay();
            console.log(expression)
            break;

        case "Math.abs(":
        case "Math.exp(":
        case "Math.log10(":
        case "Math.log(":
            expression += val; 
            updateExpressionDisplay();
            break;

        case "factorial":
            const match = expression.match(/(\d+)$/);
            if (match) {
                const num = parseInt(match[0]);
                const fact = factorial(num);
                expression = expression.slice(0, match[0].length) + fact;
                updateExpressionDisplay();
            }
            break;

        default:
            // For numbers, operators, parentheses, decimal, mod
            expression += val;
            updateExpressionDisplay();
            break;
    }
});