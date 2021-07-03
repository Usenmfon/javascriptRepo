var indentedHash = " #"
let ihash = ""
let size = 20
for (let j = 0; j < size / 2; j++) {
    ihash += indentedHash

}
var unindentedHash = "# "
let uhash = ""
for (let k = 0; k < size / 2; k++) {
    uhash += unindentedHash
}

for (let i = 0; i < size / 2; i++) {

    console.log(uhash + "\n" + ihash)
}