function getSize(width, height, depth) {
    area = width * height;
    volume = width * height * depth;
    var size = [area, volume];
    return size;
}

console.log(getSize(3, 2, 3)[0]);
console.log(getSize(3, 2, 3)[1]);

var message = (function() {
    var greeting = "Hello Usenmfon";
    console.log(greeting);
}());