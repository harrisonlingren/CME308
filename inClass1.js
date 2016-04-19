function populateList() {
	var selectList = document.getElementById('select');
	var result = [];
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	for (var i = 0; i<months.length; i++) {
		result[i] = "<option value="+months[i]+">"+months[i]+"</option>";
	}
	
	for (var i = 0; i<result.length; i++) {
		selectList.innerHTML += result[i];
	}
	
}
