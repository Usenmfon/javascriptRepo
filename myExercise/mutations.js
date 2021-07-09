// console.log("Alien".some(x => "Alien".includes("line")))
// console.log([1, 3, 4, 5].some(x => x % 2 === 0))
// console.log("Alien".includes("Alien".some(x => x == "line")));

function mutation(arr) {
    return arr[1].toLowerCase().split("").every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

mutation(["hello", "hey"]);