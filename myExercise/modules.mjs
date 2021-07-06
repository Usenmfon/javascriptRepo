//import { add } from './addNumbers.mjs'
import * as mathModule from './addNumbers.mjs'
console.log(mathModule.add(2, 5, 3, 4))
console.log(mathModule.substract(9, 7))

const makeServerRequest = new Promise((resolve, reject) => {
    if (2 < 1) {
        resolve("This was resolved")
    } else {
        reject("This was rejected")
    }
})
makeServerRequest.catch(error => {
    console.log("Bad Request")
})

// makeServerRequest.then(result => {
//     console.log("Great")
// })