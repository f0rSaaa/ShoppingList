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

function inputLenght() {
    return input.value.length;
}

button.addEventListener("click", function() {
    // console.log("click is working");
    if (inputLenght() > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
})

input.addEventListener("keypress", function(event) {
    // console.log(event);
    // console.log(event.which);
    if (inputLenght() > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
})

