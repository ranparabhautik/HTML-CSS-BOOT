// --- Toggle calculators ---
document.querySelector("#scientific-calc").classList.add("d-none");
document.getElementById("scientific-deg").classList.add("d-none");
document.getElementById("scientific-trigo").classList.add("d-none");

document.querySelector("#offcanvas-standard").addEventListener("click", function () {
    document.getElementById("scientific-calc").classList.add("d-none");
    document.getElementById("scientific-deg").classList.add("d-none");
    document.getElementById("scientific-trigo").classList.add("d-none");
    document.getElementById("standard-calc").classList.remove("d-none");
});

document.querySelector("#offcanvas-scienctific").addEventListener("click", function () {
    document.getElementById("scientific-calc").classList.remove("d-none");
    document.getElementById("scientific-deg").classList.remove("d-none");
    document.getElementById("scientific-trigo").classList.remove("d-none");
    document.getElementById("standard-calc").classList.add("d-none");
});

// --- Dark Mode ---
const darkModeToggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// --- Calculator display ---
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
let expression = "";

function updateExpression() {
    expressionDisplay.innerText = expression || "0";
}

function updateResult(value) {
    resultDisplay.innerText = value;
}

// --- Factorial function ---
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// --- Button click handler ---
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".calc-btn");
    if (!btn) return;

    const val = btn.dataset.value;

    switch (val) {
        // --- Numbers ---
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            expression += val;
            updateExpression();
            break;

        // Decimal
        case ".":
            expression += ".";
            updateExpression();
            break;

        // --- Basic operators ---
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            expression += val;
            updateExpression();
            break;


        case "=":
            try {
                let result = eval(expression);
                updateResult(result);
                addToHistory(expression, result)
                expression = result.toString();
                updateExpression();
            } catch (error) {
                updateResult("Error");
                expression = "";
                updateExpression();
            }
            break;

        case "C":
            expression = "";
            updateExpression();
            updateResult(0);
            break;


        case "backspace":
            expression = expression.slice(0, -1);
            updateExpression();
            break;

        case "(":
            expression += "(";
            updateExpression();
            break;
        case ")":
            expression += ")";
            updateExpression();
            break;

        case "Math.PI":
            expression += Math.PI;
            updateExpression();
            break;
        case "Math.E":
            expression += Math.E;
            updateExpression();
            break;

        case "Math.sqrt(":
            if (expression.length > 0) {
                let lastNumber = "";
                for (let i = expression.length - 1; i >= 0; i--) {
                    if ("0123456789.".includes(expression[i])) {
                        lastNumber = expression[i] + lastNumber;
                    } else {
                        break;
                    }
                }
                if (lastNumber.length > 0) {
                    expression = expression.slice(0, expression.length - lastNumber.length);
                    expression += "Math.sqrt(" + lastNumber + ")";
                } else {
                    expression += "Math.sqrt(";
                }
            } else {
                expression += "Math.sqrt(";
            }
            updateExpression();
            break;

        case "1/x":
            if (expression.length > 0) {
                let lastNumber = "";
                for (let i = expression.length - 1; i >= 0; i--) {
                    if ("0123456789.".includes(expression[i])) {
                        lastNumber = expression[i] + lastNumber;
                    } else {
                        break;
                    }
                }
                if (lastNumber.length > 0) {
                    expression = expression.slice(0, expression.length - lastNumber.length);
                    expression += "(1/" + lastNumber + ")";
                }
            }
            updateExpression();
            break;

        case "**2":
            if (expression.length > 0) {
                let lastNumber = "";
                for (let i = expression.length - 1; i >= 0; i--) {
                    if ("0123456789.".includes(expression[i])) {
                        lastNumber = expression[i] + lastNumber;
                    } else {
                        break;
                    }
                }
                if (lastNumber.length > 0) {
                    expression = expression.slice(0, expression.length - lastNumber.length);
                    expression += "(" + lastNumber + "**2)";
                }
            }
            updateExpression();
            break;

        case "**":
            expression += "**";
            updateExpression();
            break;

        case "2**":
            expression += "2**";
            updateExpression();
            break;

        case "10**":
            expression += "10**";
            updateExpression();
            break;


        case "Math.log10(":
            expression += "Math.log10(";
            updateExpression();
            break;
        case "Math.log(":
            expression += "Math.log(";
            updateExpression();
            break;

        case "Math.abs(":
            expression += "Math.abs(";
            updateExpression();
            break;


        case "Math.exp(":
            expression += "Math.exp(";
            updateExpression();
            break;

        case "factorial":
            if (expression.length > 0) {
                let lastNumber = "";
                for (let i = expression.length - 1; i >= 0; i--) {
                    if ("0123456789".includes(expression[i])) {
                        lastNumber = expression[i] + lastNumber;
                    } else {
                        break;
                    }
                }
                if (lastNumber.length > 0) {
                    let fact = factorial(parseInt(lastNumber));
                    expression = expression.slice(0, expression.length - lastNumber.length);
                    expression += fact;
                }
            }
            updateExpression();
            break;

        default:
            break;
    }
});

// History section

let historyData = [];

function addToHistory(inputval, outputval) {
    const historyObject = {
        input: inputval,
        output: outputval
    };
    historyData.push(historyObject);
    localStorage.setItem("calc-history", JSON.stringify(historyData));
    displayHistory();
}

function loadHistory() {
    const storedHistory = localStorage.getItem("calc-history");
    if (storedHistory) {
        historyData = JSON.parse(storedHistory)
        displayHistory();
    }
}
loadHistory();

function displayHistory() {

    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    for (let i = historyData.length - 1; i >= 0; i--) {

        const li = document.createElement("li");

        li.textContent = historyData[i].input + " = " + historyData[i].output;

        historyList.appendChild(li);
    }
}

const delHistory = document.getElementById("deleteHistory");
delHistory.addEventListener("click", function () {
    clearHistory();
})

function clearHistory() {
    historyData = [];
    localStorage.removeItem("calc-history");
    displayHistory();
}