function passLength() {
	var length1 = document.getElementById('pass1').value.length;
	var length2 = document.getElementById('pass2').value.length;
	
	if (length1 < 8 || length1 > 10  ) {
		document.getElementById('passLength').innerHTML = "Your password does not meet the password requirements.";
	} else {
		document.getElementById('passLength').innerHTML = "Password accepted.";
	}
}
				
function checkPass() {
	var pass1 = document.getElementById('pass1').value;
	var pass2 = document.getElementById('pass2').value;
	if (pass1 == pass2) {
		document.getElementById('checkedPass').innerHTML = "Password Accepted: true"; 
		return true;
	} else {
		document.getElementById('checkedPass').innerHTML = "Password Accepted: false";
		return false;
	}
}