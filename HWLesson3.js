//Сворити пустий об'єкт
const firstEmptyObj = {};

//Сворити пустий об'єкт без прототипу
const secondEmptyObj = Object.create(null);

//Додати до об'єкта дані будь-якими відомими способами

let myCar = new Object();
myCar.make = 'Mitsubishi';
myCar.model = 'Colt';
let propertyName = 'year'
myCar.propertyName = 2007;
myCar["color"] = 'silver';

//Створити пустий масив
let myArr = [];

//Створити пустий масив довжиною 100500 ел-тів
let myArrWithLenght = new Array(100500)
console.log(myArrWithLenght.length)

//Створити масив з декількома ел-тами

let arr = [myCar, myArrWithLenght.length, myCar.color, "That`s All, guys"]
console.log(arr)

//Зробити заповнений масив пустим
arr.length = 0;
console.log(arr)

//Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);
let currArr = [1, 2, 3, 4, 5];
let deleteByIndex = function (index) {
    currArr.splice(index, 1)
    return currArr;
}
deleteByIndex(2);


//Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
let yourArr = new Array()
let isEmptyArr = function (yourArr) {
    if (arguments.length > 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isEmptyArr([1, 2, 3]) //true
isEmptyArr() // false

//Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

let yourObj = new Object()
let isEmptyObj = function (yourObj) {
    if (arguments.length > 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isEmptyObj({ name: 'Evgeniy' }) //true
isEmptyObj() //false

//Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

let childName = ['Petro', 'Alex', 'Mario'];
let parrentName = ['Vasya', 'Nick', 'Bonnie'];
let concatFunc = function () {
    let allNames = childName.concat(parrentName);
    return allNames;
}
concatFunc(); // (6) ['Petro', 'Alex', 'Mario', 'Vasya', 'Nick', 'Bonnie']

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
let powFucn = function (arr) {
    return arr.map(function (x) {
        return Math.pow(x, 3);
    });
}
powFucn([1, 4, 3, 2, 4]) // (5) [1, 64, 27, 8, 64]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;

let unpairedNumbers = function (arr) {
    let unpaired = arr.filter(
        function (x) {
            return x % 2
        }
    );
    return unpaired;
}
unpairedNumbers([1, 2, 3, 4, 5, 6, 7]) // (4) [1, 3, 5, 7]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];

let isIntNumbers = function (arr) {
    let isIntThisNum = arr.filter(
        function (x) {
            return x % 1 === 0;
        }
    );
    return isIntThisNum;
}

//Створити функцію, яка нічого не повертає;

function myFunc(smth) {
    return !condition
}