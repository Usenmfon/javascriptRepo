var saying = "Home sweet home";
console.log(`length: ${saying.length}`);

console.log(`ALL CAPS: ${saying.toUpperCase()}`);
console.log(`tolowercase: ${saying.toLowerCase()}`);
console.log(`character At index 12: ${saying.charAt(12)}`);
console.log(`indexOf ee: ${saying.indexOf('ee')}`);
console.log(`lastIndexOf: ${saying.lastIndexOf('e')}`);
console.log(`substring between 8 and 14: ${saying.substring(8,14 + 1)}`);
console.log(`split the string literal: ${saying.split(' ')}`);
console.log(`trim white spaces out: ${saying.trim()}`);
console.log(`replace this index with a new char: ${saying.replace('me', 'w')}`);