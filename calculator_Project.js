
var decimalPressed = false;
	var storedNumber = null;
	var storedOp;


function numButton(buttonNumber) {
	var val = $("#display").val();
     var val = document.getElementById('display').value;
     val = val + buttonNumber;
    document.getElementById('display').value = parseFloat(val);
    }

// decimal 
function decimal(buttonDot) {
	var decimal = document.getElementById('display').value;

	//this will make the decimal to happen just once
	if (decimalPressed===false){
	decimal = decimal + buttonDot;
	document.getElementById('display').value = decimal;
	decimalPressed = true;
	}
    }

// clear
function clearAll(clear) {
	var clearScreen = document.getElementById('display').value;

	clearScreen = clear;
	document.getElementById('display').value = clearScreen;
}

// calculate
function operater(op) {
	if (storedNumber === null){
		storedNumber = parseFloat(document.getElementById('display').value);
		storedOp = op;
		document.getElementById('display').value = "";
	console.log("calculate");
	}

	else {
		calculate();
	}
}

function calculate() {
	var total = 0;
		switch(storedOp) {
			case '+':
				total = parseFloat(document.getElementById('display').value) + storedNumber;
				break;
			case '-':
				total = parseFloat(document.getElementById('display').value) - storedNumber;
				break;
			case '*':
				total = parseFloat(document.getElementById('display').value) * storedNumber;
				break;
			case '/':
				total = parseFloat(document.getElementById('display').value) / storedNumber;
				break;
		}
		storedNumber = total;
		document.getElementById('display').value = total;
}



