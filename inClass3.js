function getTarget(e) {
  if(!e) {
    e=window.event;
  }
  return e.target || e.srcElement;
}

var list = document.getElementById('webList');
var addButton = document.getElementsByTagName('button')[0];

function removeItem(e) {
  var target= getTarget(e);
  var tParent = target.parentNode;
  tParent.removeChild(target);
}

function addItem() {
	var addedItem = prompt("Type name of item to be added below:", "type here...");
	var target = list;
	var node = document.createElement("li");
	var nodeText = document.createTextNode(addedItem);
	node.appendChild(nodeText);
	target.appendChild(node);	
}

list.addEventListener('mousedown', removeItem, false);
addButton.addEventListener('click', addItem, false);
