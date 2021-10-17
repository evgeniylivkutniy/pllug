//Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map  з тими самими даними.Тобто просто перетворити об’єкт у Map.

let obj = {};
function intoMap(obj) {
    let map = new Map(Object.entries(obj))
    return map;
}

//Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними.Тобто просто перетворити Map у  об’єкт.

let map = new Map();
function intoObj(map) {
    let obj = Object.fromEntries(map.entries())
    return obj
}
intoObj(map.set('bbb', 3)) // {bbb: 3}}