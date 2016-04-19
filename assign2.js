var phoneNum = document.getElementById('phone');
var resultText = document.getElementById('validation');

function validatePhone() {
	var phoneNumVal = phoneNum.value;
	var phonePattern = /^(\([0-9]{3}\) |[0-9]{3}-|\([0-9]{3}\)|[0-9]{3}.)([0-9]{3}-|[0-9]{3}.)[0-9]{4}$/;
	
	if ( phonePattern.test(phoneNumVal) ) {
		resultText.innerHTML = 'Phone number accepted!';
	} 
	else {
		resultText.innerHTML = 'Phone number not valid!';
	}
}

//var activeButton = document.createElement('button');
//activeButton.appendChild(document.createTextNode('Go'));

//document.getElementsByTagName('body')[0].appendChild(activeButton);

phoneNum.addEventListener('blur', validatePhone, false);
