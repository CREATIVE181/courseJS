let num = 50;

switch (num) {
    case num < 40:
        console.log('Number is less than 40');
        break;
    case num > 100:
        console.log('Number is greater than 100');
        break;
    case num > 80:
        console.log('Number is between 80 and 100');
        break;
    case 50:
        console.log('Number is equal to 50');
        break;
    default:
        console.log('Number is not in the specified range');
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = num; i < 55; i++) {
    console.log(i);
}