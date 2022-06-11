'use strict';

// task 1

// const arr1 = [1, 5, "4", "hello"];
// console.log(arr1[1]);

// const arr2 = [true, 2, {}, ["a"], 222];
// console.log(arr2[1]);

// console.log(arr1[1] + Arr2[1]);


// task 2

// const arr1 = [1, 5, "4", "hello"];
// arr1[4] = 22;

// console.log(arr1);

// or

// arr1[arr1.length] = 22;
// console.log(arr1);


// task 3

// const arr2 = [true, 2, {}, ["a"], 222];

// for(const arr of arr2) {
//   console.log(arr);
//   console.log(typeof arr)
// }


// task 4

// const message = 'Welcome to Ukraine!';
// const letters = message.split('');
// console.log(letters);
// console.log(letters.indexOf('l'));
// console.log(letters.join(''));


// task 5

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика")
console.log(styles.shift());
styles.unshift('Реп', 'Реггі');
console.log(styles);