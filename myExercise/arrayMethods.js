//The use of MAP
console.log([1, 2, 3].map(x => x * 3))
    //The use of FILTER
console.log([1, 2, 3].filter(x => x < 3))
    //The use of INDEXOF
console.log([1, 2, 3, 4].indexOf(2))
    //The use of REDUCE
console.log([1, 2, 3, 4, 3].reduce((x, y) => x * y))
    //The use of REVERSE
console.log([1, 2, 3, 4].reverse())
    //The use of FILL
console.log([1, 2, 7, 4].fill(1, 2, 4))
    //The use of FIND
console.log([1, 2, 3, 4].find(x => x > 2))
    //The use of FINDINDEX
console.log([1, 2, 8, 4].findIndex(x => x == 8))
    //The use of INCLUDES
console.log([1, 2, 3, 4].includes(5))
    //The use of some
console.log([1, 3, 3, 5].some(x => x % 2 === 0))
    //The use of concat
console.log(['P', 'R'].concat(['a']))
    //The use of slice
console.log(['E', 'A', 'R'].slice(1))
    //The use of splice
let ara = ['E', 'A', 'R']
ara.splice(2, 1, 'T')
console.log(ara)
    //The use of JOIN
console.log(['E', 'T'].join('-'))
    //The use of LASTINDEXOF
console.log(['E', 'A', 'R', 'A'].lastIndexOf('A'))
    //The use of forEACH
console.log([1, 2, 3].forEach(x => console.log(x)))
    //The use of push
let arr = [1, 2, 3]
arr.push(3)
console.log(arr)
    //The use of pop
console.log([1, 2, 3].pop())
    //The use of SHIFT
console.log([1, 2, 3].shift())
    //The use of UNSHIFT
console.log([1, 2, 3].unshift(0)) //[0,1,2,3]
    //The use of every
console.log([1, 2, 3].every(x => x < 5))

/*
    Working with REST operator and SPREAD operator
    on array
*/

function collectArray(...args) {
    console.log(args.map(x => x * 3))
}

collectArray(1, 4, 5, 6)
let newR = [3, 4, 5]
console.log([1, 2, ...newR])