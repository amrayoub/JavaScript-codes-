// task 1 
function calculateAge(birthYear, currentYear){
	var birth = birthYear.value;
    var current = currentYear.value;
    if(isEmpty(current)){
    	current = new Date().getFullYear();
    }

    if(birth > current){
	    document.getElementById('warning1').innerHTML = 'Birth Year can not be greater than Current Year!';
	} else if(validate(1, birth) && validate(1, current)){
    	empty(1);
        var age1 = current - birth;
    	var age2 = age1 + 1;
    	document.getElementById('result1').innerHTML = "You'r either " + age1 + " or " + age2;
    }
}

// task 2 
function calculateSupply(age, amount){
    // amount = amount per day
    var maxAge = 100;
    var _age = age.value;
    var _amount = amount.value;
    if(_age > maxAge){
    	document.getElementById('warning2').innerHTML = "No Way , You're imperishable!"
    }
    if(validate(2, _age) && validate(2, _amount)){
    	empty(2);
    	var remainDate = (maxAge - _age) * 365;
        var totalAmount = remainDate * _amount;
        document.getElementById('result2').innerHTML = "You will need " + Math.round(totalAmount) + " until age of " + maxAge;
    }
}

// task 3 
function calcCircumfrence(radius){
	var rad = radius.value;
	if(validate(3, rad)){
		empty(3);
	    var Circumfrence = 2 * rad * Math.PI.toFixed(2);
	    document.getElementById('Circumfrence').innerHTML = "The Circumfrence is " + Circumfrence.toFixed(2);
	}
}

function calcArea(radius){
	var rad = radius.value;
	if(validate(3, rad)){
		empty(3);
	    var area = Math.PI.toFixed(2) * Math.PI.toFixed(2) * rad;
	    document.getElementById('area').innerHTML = "The Area is " + area.toFixed(2);
	}
}

// task 4 
function celsiusToFahrenheit(cel){
	var celsius = cel.value;
	if(validate(4, celsius)){
		empty(4);
	    var fah = (celsius * 9 / 5) + 32;
	    document.getElementById('convert1').innerHTML = celsius + " °C is " + fah.toFixed(2) + "°F";
	}
}

function fahrenheitToCelsius(fah){
	var fahren = fah.value;
	if(validate(4, fahren)){
		empty(4);
		var celsius = (fahren - 32) * 5 / 9;
		document.getElementById('convert2').innerHTML = fahren + "°F is " + celsius.toFixed(2) + "°C";
	}
}

// function warning 


function isEmpty(str) {
    return (!str || 0 === str.length);
}

//  warning
function empty(num){
	document.getElementById('warning' + num).innerHTML = "";
}

function validate(num, val){
	switch(num){
		case 1:
		if(isEmpty(val)){
	      	document.getElementById('warning1').innerHTML = 'Birth Year or Current Year cannot be empty!';
	      	return false;
	    } else if (isNaN(val)){
	      	document.getElementById('warning1').innerHTML = 'you must enter a number!';
	      	return false;
	    } else if(val < 0){
	    	document.getElementById('warning1').innerHTML = ' must be greater than 0!';
	    	return false;
	    } else {
	    	return true;	
	    }
		break;
		case 2:
		if(isEmpty(val)){
	      	document.getElementById('warning2').innerHTML = 'Age or Amount cannot be empty!';
	      	return false;
	    } else if (isNaN(val)){
	      	document.getElementById('warning2').innerHTML = 'must enter a number!';
	      	return false;
	    } else if(val < 0){
	    	document.getElementById('warning22').innerHTML = ' must be greater than 0!';
	    	return false;
	    } else {
	    	return true;	
	    }
		break;
		case 3:
			empty(3);
			if(isEmpty(val)){
				document.getElementById('warning3').innerHTML = 'Radius cannot be empty!';
				return false;
			} else if(isNaN(val)){
				document.getElementById('warning3').innerHTML = 'Radius must be number!';
				return false;
			} else if(val < 0){
				document.getElementById('warning3').innerHTML = 'Radius must be greater than 0!';
				return false;
			} else {
				return true;
			}
		break;
		case 4:
			empty(4);
			if(isEmpty(val)){
				document.getElementById('warning4').innerHTML = 'Degree cannot be empty!';
				return false;
			} else if(isNaN(val)){
				document.getElementById('warning4').innerHTML = 'Degree must be number!';
				return false;
			} else {
				return true;
			}
		break;
	}
}