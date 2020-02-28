var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var userInput = document.getElementById("userinput");
var listElement = document.getElementsByTagName("li");


addButtons();



function addButtons(){
	for(var i = 0; i < listElement.length; i ++){
		var delBut = document.createElement("button");
		var butText = document.createTextNode("done");
		delBut.appendChild(butText);
		listElement[i].appendChild(delBut);
		delBut.onclick = removeParent;

	}
}

function inputLength(){
	return userInput.value.length;

}

function createListElement(){
		var li = document.createElement("li");
		var delBut = document.createElement("button");
		var butText = document.createTextNode("done");
		delBut.appendChild(butText);

		li.appendChild(document.createTextNode(userInput.value));
		li.appendChild(delBut);
		ul.appendChild(li);
		userInput.value = "";
		delBut.onclick = removeParent;

	}
function removeParent(evt){
	evt.target.parentNode.remove();
} 

function toggleClassAfterClick(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle('done');
	}
}	

function addListAfterClick(){
		if(inputLength() > 0){
			createListElement();
		} 
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClassAfterClick);

