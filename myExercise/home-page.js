var tag = document.createElement('p');
var text = document.createTextNode("This is a new element and text added");
tag.appendChild(text);

var element = document.getElementById('hello');
element.appendChild(tag);

var fruitArray = ['Mango', 'Apple', 'Bananna'];

for (var i = 0; i < fruitArray.length; i++) {
    var newTag = document.createElement('p');
    var inputText = document.createTextNode(fruitArray[i]);
    newTag.appendChild(inputText);

    var element = document.getElementById('hello');

    console.log(element.appendChild(newTag));
}

var changeCss = document.querySelector("#hello");
changeCss.style.backgroundColor = "red";