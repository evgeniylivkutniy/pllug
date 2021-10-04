// Створити функцію яка б отримувала параметром масив з елементів різних типів(строки, масиви, числа, об’єкти і т.д), на виході має повернути строку у camel case 
// (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.
let myArr = [];
function mergeStr(myArr) {
    let merge = myArr
    .filter(x => typeof x === 'string')
    .map(word => word.toLowerCase())
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
    return merge;
}
mergeStr([109, 'HeLLo', true, 09, 'my', [1, 3, 4], 'FRIEND']) //helloMyFriend


// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, 
// і повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу 
// масива(наприклад 1 = a, 2 = b, 3 = c, 4 = d, …).Приклад[4, 3, 22, 11] - в результаті маємо отримати[d, c, v, k]

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let myArr = [];
function getArr(myArr) {
    let letters = myArr.map(function (x) {
        return alphabet[x - 1]
    }).filter(Boolean) // Method filter(Boolen) відсіює зайві пробіли, 0
    return letters;
}
getArr([1, 3, 5, 4, 26, 27, 0, 30]) //(5) ['a', 'c', 'e', 'd', 'z']

//Створити функцію яка параметром отримує об’єкт(наприклад { a: 22, b: -11.35, c: 41.2, d: ‘hello’ }) і повертає новий об’єкт у який містить тільки числа більші рівні 0.

let myObj = new Object;
function todo(myObj) {
    let entries = Object.fromEntries(
        Object.entries(myObj).filter(([key, value]) => typeof value === 'number' && value >= 0)
    ); return entries;
}
todo({ a: 12, b: -10, c: 'string', d: 2 }) //{a: 12, d: 2}

//Завдання з зірочкою 1
//Функція яка отримує параметром масив строк і повертає суму довжин усіх строк, рахувати тільки англ. букви без пробілів, знаків пунктуації, тощо.
let myArr = [];
function strFromArr(myArr) {
    let myString = myArr
        .join('')
        .match(/[^_\W]+/g).join('')
    console.log(myString)
    return myString.length;
}
