
let expression = '';       
let result     = '0';      

let justEvaled = false;    
let isScientific = false;  


const expressionEl  = document.getElementById('expression');
const resultEl      = document.getElementById('result');
const historyList   = document.getElementById('history-list');


function updateDisplay() {
  expressionEl.textContent = expression;
  resultEl.textContent     = result;
}


function factorial(n) {
  n = parseInt(n);
  if (n < 0)  return NaN;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}


function safeEval(expr) {
  
  expr = expr.replace(/factorial\(([^)]+)\)/g, (_, num) => factorial(eval(num)));
  expr = expr.replace(/1\/x/g, `1/(${result})`);
  return eval(expr);
}

function showError(msg) {
  result     = msg;
  expression = '';
  justEvaled = true;
  updateDisplay();
}


function hasDivisionByZero(expr) {
  return /\/\s*0(?![.\d])/.test(expr);
}

function isEmptyExpression(expr) {
  return expr.trim() === '';
}

function addToHistory(expr, res) {
  const entry = document.createElement('div');
  entry.classList.add('mb-2', 'border-bottom', 'pb-1');
  entry.innerHTML = `<small class="text-muted">${expr}</small><br><strong>${res}</strong>`;
  historyList.prepend(entry);
  localStorage.setItem("Calc-History",JSON.stringify({expr,res}));
}

function handleOperation(value) {
  switch (value) {

    // ── Clear ──
    case 'C':
      expression = '';
      result     = '0';
      justEvaled = false;
      break;

    // ── Backspace ──
    case 'backspace':
      if (justEvaled) {
        expression = '';
        result     = '0';
        justEvaled = false;
      } else {
        expression = expression.slice(0, -1);
        if (expression === '') result = '0';
      }
      break;

    // ── Equals ──
    case '=':
      if (isEmptyExpression(expression)) break;
      if (hasDivisionByZero(expression)) {
        showError('Cannot divide by zero');
        break;
      }
      try {
        const evalResult = safeEval(expression);
        if (!isFinite(evalResult)) { showError('Cannot divide by zero'); break; }
        if (isNaN(evalResult))     { showError('Error');                 break; }
        addToHistory(expression, evalResult);
        result     = String(evalResult);
        expression = '';
        justEvaled = true;
      } catch {
        result     = 'Error';
        expression = '';
        justEvaled = true;
      }
      break;

    // ── Percentage / Modulo ──
    case '%':
      if (expression === '' && result !== '0') {
        // convert current result to percentage
        result = String(parseFloat(result) / 100);
      } else {
        expression += '%';
      }
      break;

    // ── Square ──
    case '**2':
      if (justEvaled) {
        expression = `(${result})**2`;
        justEvaled = false;
      } else {
        expression += '**2';
      }
      break;

    // ── Square root ──
    case 'Math.sqrt(':
      if (justEvaled) {
        expression = `Math.sqrt(${result})`;
        justEvaled = false;
      } else {
        expression += 'Math.sqrt(';
      }
      break;

    // ── 1/x (reciprocal) ──
    case '1/x':
      try {
        const base = justEvaled ? parseFloat(result) : safeEval(expression);
        result     = String(1 / base);
        expression = '';
        justEvaled = true;
      } catch {
        result = 'Error';
      }
      break;

    // ── +/- (toggle sign) ──
    case '-':
      // If this is the +/- button in standard calc (no expression), negate current result
      if (expression === '' || justEvaled) {
        result     = String(parseFloat(result) * -1);
        expression = '';
        justEvaled = false;
        break;
      }
      expression += '-';
      break;

    // ── Math functions that need opening paren ──
    case 'Math.sin(':
    case 'Math.cos(':
    case 'Math.tan(':
    case 'Math.log(':
    case 'Math.log10(':
    case 'Math.abs(':
    case 'Math.exp(':
      if (justEvaled) {
        expression = value + result + ')';
        justEvaled = false;
      } else {
        expression += value;
      }
      break;

    // ── Constants ──
    case 'Math.PI':
    case 'Math.E':
      if (justEvaled) expression = '';
      expression += value;
      justEvaled  = false;
      break;

    // ── Power (x^y) ──
    case '**':
      if (justEvaled) {
        expression = result + '**';
        justEvaled = false;
      } else {
        expression += '**';
      }
      break;

    // ── 10^x ──
    case '10**':
      if (justEvaled) {
        expression = '10**';
        justEvaled = false;
      } else {
        expression += '10**';
      }
      break;

    // ── 2^nd (secondary — placeholder) ──
    case '2**':
      // "2nd" toggle — no-op for now (would swap sin↔asin etc.)
      break;

    // ── Factorial ──
    case 'factorial':
      if (justEvaled) {
        expression = `factorial(${result})`;
        justEvaled = false;
      } else {
        expression += 'factorial(';
      }
      break;

    // ── Operators and digits (default) ──
    default:
      // If last evaluation just happened and user types a digit, start fresh
      if (justEvaled) {
        const isOperator = ['+', '*', '/', '(', ')'].includes(value);
        expression = isOperator ? result + value : value;
        justEvaled  = false;
      } else {
        expression += value;
      }
      break;
  }

  // Live preview (show partial result while typing)
  if (!justEvaled && expression !== '') {
    try {
      const preview = safeEval(expression);
      if (!isNaN(preview) && isFinite(preview)) result = String(preview);
    } catch { /* still typing — ignore */ }
  }

  updateDisplay();
}



// ─── Mode switching (using classList as requested) ────────────────────────────
function showStandard() {
  document.getElementById("scientific-calc").classList.add("d-none");
  document.getElementById("scientific-deg").classList.add("d-none");
  document.getElementById("scientific-trigo").classList.add("d-none");
  document.getElementById("standard-calc").classList.remove("d-none");
  isScientific = false;
}

function showScientific() {
  document.getElementById("scientific-calc").classList.remove("d-none");
  document.getElementById("scientific-deg").classList.remove("d-none");
  document.getElementById("scientific-trigo").classList.remove("d-none");
  document.getElementById("standard-calc").classList.add("d-none");
  isScientific = true;
}

// ─── Dark mode ────────────────────────────────
function toggleDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
}

// ─── Keyboard support ─────────────────────────
function handleKeyboard(e) {
  const key = e.key;
  const map = {
    '0':'0','1':'1','2':'2','3':'3','4':'4',
    '5':'5','6':'6','7':'7','8':'8','9':'9',
    '+':'+','-':'-','*':'*','/':'/',
    '.':'.','(':  '(', ')':')',
    '%':'%','Enter':'=','=':'=',
    'Backspace':'backspace','Escape':'C'
  };
  if (map[key]) handleOperation(map[key]);
}

// =============================================
//  EVENT DELEGATION — single listener on body
// =============================================
document.body.addEventListener('click', function (e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  // ── Calc buttons (data-value) ──
  if (btn.classList.contains('calc-btn')) {
    handleOperation(btn.dataset.value);
    return;
  }

  // ── Mode: Standard ──
  if (btn.id === 'offcanvas-standard') {
    showStandard();
    // close offcanvas
    const oc = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasExample'));
    if (oc) oc.hide();
    return;
  }

  // ── Mode: Scientific ──
  if (btn.id === 'offcanvas-scienctific') {
    showScientific();
    const oc = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasExample'));
    if (oc) oc.hide();
    return;
  }

  // ── Delete history ──
  if (btn.id === 'deleteHistory' || btn.closest('#deleteHistory')) {
    historyList.innerHTML = '';
    return;
  }
});

// ─── Dark mode toggle ─────────────────────────
document.getElementById('darkModeToggle').addEventListener('change', function () {
  toggleDarkMode(this.checked);
});

// ─── Keyboard ─────────────────────────────────
document.addEventListener('keydown', handleKeyboard);

// ─── Init: hide scientific, show standard on load ─────────────────────────────
document.getElementById("scientific-calc").classList.add("d-none");
document.getElementById("scientific-deg").classList.add("d-none");
document.getElementById("scientific-trigo").classList.add("d-none");

// Direct listeners for offcanvas toggle buttons (your exact code)
document.getElementById("offcanvas-standard").addEventListener("click", () => {
  showStandard();
});

document.getElementById("offcanvas-scienctific").addEventListener("click", () => {
  showScientific();
});

updateDisplay();