// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("click");
// })

// button.addEventListener("mouseenter", function() {
//     console.log("click");
// })

// button.addEventListener("mouseleave", function() {
//     console.log("click");
// })


var button = document.getElementById('enter');
var input = document.getElementById('userinput');
// var ul = document.getElementsByTagName('ul')[0];
var ul = document.querySelector('ul');
var items = ul.getElementsByTagName("li"); 
var delButtons = document.getElementsByClassName("delete");

for (var i = 0; i < delButtons.length; i++) {
    delButtons[i].addEventListener("click", removeParent, false);
}

function removeParent(event) {
    event.target.removeEventListener("click", removeParent, false);
    event.target.parentNode.remove();
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


function inputLenght() {
    return input.value.length;
}

function creatListElemnet() {
    var btn = document.createElement("button");
    btn.innerHTML = "Delete" ;
    btn.onclick = removeParent;
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    ul.appendChild(li);
    li.appendChild(btn);
    input.value="";
}

function addListAfterClick() {
    // console.log("click is working");
    if (inputLenght() > 0) {
        creatListElemnet();
    }
}

function addListAfterKeypress(event) {
    // console.log(event);
    // console.log(event.which);
    if (inputLenght() > 0 && event.keyCode === 13) {
        creatListElemnet();
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)
