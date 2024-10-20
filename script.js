// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };
//
// console.log(options.name);
//
// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red"
// };
//
// delete options.bool;
//
// console.log(options);
//
//
// for (let key in options) {
//     console.log(key, options[key]);
// }
//
// console.log(Object.keys(options).length);
//
//
// let arr = [1, 2, 3, 4, 5];
//
// arr.pop(); // Removes the last element from the array
// arr.push(6); // Adds an element to the end of the array
// arr.shift(); // Removes the first element from the array
// arr.unshift(0); // Adds an element to the beginning of the array
// console.log(arr);
//
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };
//
//
// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item);
// })
//
// let mass = [1, 2, 3, 4, 5];
// for (let item of mass) {};

// let ans = prompt("", ""),
//     arr = [];
//
// arr = ans.split(", ");
// console.log(arr);

let arr = [11, 2, 12, 15]
i = arr.join(', ');
console.log(i);

arr.sort(compareNumeric)

function compareNumeric(a, b) {
    return a - b;
}

console.log(arr);
