var gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];

var gradeTable = "<tr><th colspan='2'>Grading Scale</th></tr>";
for(var i=0; i<gradingScale.length; i=i+3) {
  gradeTable+="<tr><td>" + gradingScale[i] + "</td><td>" + gradingScale[i+1] + "-" + gradingScale[i+2] + "</td></tr>";
}

var createTable = document.createElement('table');
createTable.innerHTML = gradeTable;
var addTable = document.body.appendChild(createTable);

var totalPts = 500;
var calcGrade = document.getElementById('calcGrade');

function highlight(grade) {
	var tRow = document.getElementsByTagName('tr');
	for (i=0; i<=gradingScale.length/3; i++) {
		tRow[i].style = "color: black; background-color: white;";
	}

	switch (grade) {
		case "A":
			tRow[1].style = "color: white; background-color: red;";
			break;
		case "B":
			tRow[2].style = "color: white; background-color: red;";
			break;
		case "C":
			tRow[3].style = "color: white; background-color: red;";
			break;
		case "D":
			tRow[4].style = "color: white; background-color: red;";
			break;
		case "F":
			tRow[5].style = "color: white; background-color: red;";
			break;
	}
}

function go() {
	var studentNum = document.getElementById('numberOne').value;
	var ans = studentNum / totalPts * 100;
	//var spawnAns = document.createElement('p');
	//spawnAns.innerHTML = ans;
	//var addP = document.body.appendChild(spawnAns);
	
	if (ans > 89) {
		highlight("A");
		document.getElementById('answer').innerHTML = ans+"%";
	}
	else if (ans > 79 && ans < 90) {
		highlight("B");
		document.getElementById('answer').innerHTML = ans+"%";
	}
	else if (ans > 69 && ans < 80) {
		highlight("C");
		document.getElementById('answer').innerHTML = ans+"%";
	}
	else if (ans > 59 && ans < 70) {
		highlight("D");
		document.getElementById('answer').innerHTML = ans+"%";
	}
	else {
		highlight("F");
		document.getElementById('answer').innerHTML = ans+"%";
	}	
}

calcGrade.addEventListener('click', go);