var things = document.getElementsByTagName('input');
function checkForm() {
	for (i=0;i<things.length;i++) {
		if (things[i].value == "") {
			var item = things[i].id;
			alert("Please fill out all fields before submitting. Missing: " + item);
			return false;
		}
	}
	return true;
}

function submit() {
	if (checkForm()) {
		alert("Processing complete!");
	}
}

function reset() {
	for (thing in things) {
		if (thing.type='text') {
			thing.value = '';
		}
	}
}

document.getElementById('submit').addEventListener( "click", submit );
document.getElementById('reset').addEventListener( "click", reset );