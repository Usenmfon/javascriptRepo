//Preview a simple multiplication table
console.log("Enter number of desired tables: ");
var numberOfTables = 3;
var tableRowLimit = 5;

for (var tableRow = 1; tableRow <= numberOfTables; tableRow++) {
    for (var tableColumn = 1; tableColumn <= tableRowLimit; tableColumn++) {
        console.log(`${tableRow + ' * ' + tableColumn + ' = ' + tableColumn * tableRow}`);
        console.log('   ');
    }
    console.log(' ');
}