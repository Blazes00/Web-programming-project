function Solve(val) {
   var v = document.getElementById('res');
   if (v.value.slice(-1) !== val) { 
       v.value += val;
   }
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {
       var num2 = eval(num1.replace(/x/g, '*'));
       document.getElementById('res').value = num2;
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   const display = document.getElementById('res');

   if (validKeys.includes(key)) {
       if (display.value.slice(-1) !== (key === '*' ? 'x' : key)) {
           Solve(key === '*' ? 'x' : key);
       }
   } else if (key === 'Enter') {
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});
