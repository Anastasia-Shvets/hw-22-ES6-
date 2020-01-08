let arr = ['a', 'b', 'c', 'd'];
let arr2 = []

function number (incomingArr) {
    const newArr = incomingArr.map ((elem, i) => {
        return (`${i + 1}: ${elem}`)
    })
    return newArr;
}

console.log(number(arr))
console.log(number(arr2))