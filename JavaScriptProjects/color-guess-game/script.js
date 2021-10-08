function handleClick(){
    var number = document.getElementById('number').value

    var container = document.getElementById("container");

    for (var i = 0; i < number; i++) {
        var box = document.createElement("div");
        container.appendChild(box);
        var colors = random_bg_color();
        box.style.backgroundColor = colors;

    }

    var colorPicker = document.getElementById('picker')
    for (var i = 0; i < 1; i++) {
        var box = document.createElement("div");
        colorPicker.appendChild(box);
        var colors = random_bg_color();
        box.style.backgroundColor = colors;
    }

    var text = document.createTextNode('choose color')
    colorPicker.appendChild(text)
}

function random_bg_color(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

// function handleClick(){
//     var number = document.getElementById('number').value
//     return number
    
// }

// setup()