//Тестував через консоль Google Chrome
//Провести заміри продуктивності для звичайного об’єкта, об’єкта без прототипу та MAP. Зробити заміри на різних наборах даних, наприклад 100 ключів, 10 000 ключів, 10 000 000 ключів. Дослідити швидкість добавлення нового ключа, взяття значення за ключем, видалення ключа на кожному наборі даних. Також дослідити перетворення тестовану структуру даних у масив, швидкість ітерації(у чистій формі та разом з конвертацією).

const emptyObj = Object.create(null);
const map = new Map();
let obj = { push: function push(element) { [].push.call(this, element) } }
emptyObj.push = function push(element) { [].push.call(this, element) }
let n = 100;
// let n = 10000;
// let n = 10000000;

for (let i = 0; i < n; i++) {
    obj.push(i)
    map.set(i, i)
    emptyObj.push(i)
}

console.log("Швидкість додавання до об'єкту: ")
console.time('Object with Proto')
obj.push(n)
console.timeEnd('Object with Proto') //0.079833984375 ms при n=100, 0.008056640625 ms при n=10000, 0.004150390625 ms при n=10000000

console.time('Map')
map.set(n)
console.timeEnd('Map') //0.003173828125 ms при n=100, 0.003173828125 ms при n=10000, 0.002197265625 ms при n=10000000

console.time('Object without Proto');
emptyObj.push(n)
console.timeEnd('Object without Proto') //0.010986328125 ms при n=100, 0.0048828125 ms при n=10000, 0.001708984375 ms при n=10000000
console.log('----------------------------')


console.log("Швидкість видалення ключа з об'єкту: ")
console.time('Object with Proto')
delete obj[n - 10]
console.timeEnd('Object with Proto') //0.008056640625 ms при n=100, 0.005126953125 ms при n=10000, 0.005126953125 ms при n=10000000

console.time('Map')
delete map[n - 10]
console.timeEnd('Map') //0.0068359375 ms при n=100, 0.001953125 ms при n=10000, 0.0029296875 ms при n=10000000

console.time('Object without Proto');
delete emptyObj[n - 10]
console.timeEnd('Object without Proto') //0.012939453125 ms при n=100, 0.005859375 ms при n=10000, 0.002685546875 ms при n=10000000
console.log('----------------------------')

console.log("Швидкість взяття значення об'єкту за ключем: ")
console.time('Object with Proto')
obj[n - 10]
console.timeEnd('Object with Proto') //0.004150390625 ms при n=100,  0.00830078125 ms при n=10000, 0.008056640625 ms при n=10000000

console.time('Map')
map[n - 10]
console.timeEnd('Map') //0.004150390625 ms при n=100, 0.003173828125 ms при n=10000, 0.005126953125 ms при n=10000000

console.time('Object without Proto');
emptyObj[n - 10]
console.timeEnd('Object without Proto') //0.00390625 ms при n=100, 0.00390625 ms при n=10000, 0.777099609375 ms при n=10000000
console.log('----------------------------')

console.time('Object throught forIn')
for (let key in obj) {

    console.log(key)

}
console.timeEnd('Object throught forIn')// Object throught forIn: 8.009033203125 ms при n=100, Object throught forIn: 617.717041015625 ms при n=10000. На 10млн лягає хром :)

console.time('Map.keys()')
console.log(map.keys())
console.timeEnd('Map.keys()') //Map.keys(): 0.43896484375 ms при n=100, Map.keys(): 30.759765625 ms при n=10000. На 10млн лягає хром :)

console.time('Transform in array')
let arrayObj = Object.entries(emptyObj)
arrayObj.forEach(element => console.log(element));
console.timeEnd('Transform in array') //Transform in array: 20.780029296875 ms при n=100, Transform in array: 2881.60693359375 ms при n=10000. На 10млн лягає хром :)