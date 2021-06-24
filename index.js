//var element = document.getElementById('one').firstChild.nextSibling.nodeValue;

var itemOne = document.getElementById('one').textContent = "Hello there";
// var elText = itemOne.firstChild.nodeValue;
// elText = elText.replace('fresh', 'exotic');
// itemOne.firstChild.nodeValue = elText;

var newEl = document.createElement('li');

var newText = document.createTextNode('Tawain')

newEl.appendChild(newText);

var position = document.getElementsByTagName('li')[0]

position.appendChild(newEl)

var removeEl = document.getElementsByTagName('em')[0]

var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl)

document.write("Hello young man, repent from thy ways");

var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');

    var el = document.getElementById('one')
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}