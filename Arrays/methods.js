let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

// Array concat
let arr3 = arr1.concat(arr2)
console.log("Array concat: ", arr3)

// Array copyWithin
let arr4 = arr1.copyWithin(1, 2)
console.log("Array copyWithin: ", arr4)

// Array entries
let arr5 = arr1.entries()
console.log("Array entries: ", arr5)

// Array every
let arr6 = arr1.every(function (value, index, array) {
    return value > 2
})

// Array fill
let arr7 = arr1.fill(0)
console.log("Array fill: ", arr7)