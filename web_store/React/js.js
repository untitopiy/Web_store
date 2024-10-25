'use strict' //включение строгого режима
const objectA =
{
    a:10,
    b:true,
    gdr: 'gpt',
    info:
    {
        isp: 'gg',
        country: 10
    },
    cityGreeting () 
    {
        console.log ('Greething')
    }
}
const copyOfA = objectA
copyOfA.a=11
copyOfA.c ='ctr'
delete copyOfA.c
objectA['gdr'] ='Cyeta'


console.log(copyOfA, copyOfA.info.country)
objectA.cityGreeting()

JSON.stringify(objectA)// Конвертация в JSON
console.log(objectA)

const postStringifield =JSON.stringify(objectA) // Конвертация в JSON
JSON.parse(postStringifield)
console.log(postStringifield)// Конвертация в объект

 const objectB = Object.assign({},objectA) //создание нового отдельного объекта на основе старого Вариант 1
 objectB.a=17
 console.log(objectB)

 //Вариант 2 ... оператор разделения  объкта на свойства
 const objectC ={...objectA}
 objectC.a =1234
 console.log('objectC',objectC)
 // Вариант 3  метода двойной конвертации при котором создается полностью новый объект 
// а ссылки на вложеные объекты перезаписываются
const objectD =JSON.parse(JSON.stringify(objectA))
objectD.a =156
objectD.b ='trp'
objectD.info.gdr ='pomet'
console.log('objectD', objectD, objectD.info, 'objectA',objectA,objectA.info)

// Конкатинация строк помимо +
let hello = 'hello'
let world = 'world'
console.log(`${hello} ${world}`)

const myFunction =(a,b) => 
{
    let c
    a= a+1
    c= a+b
    return c
}
myFunction(7,7)
myFunction(71,7)
myFunction(7,7)
console.log(myFunction(5,3))
console.log(myFunction(9,9))
// использование значения поумолчанию
 function myYFunction (a,b=1)
{
    let c
    a= a+1
    c= a+b
    return c
}

console.log(myYFunction(9,9))
console.log(myYFunction(9))

//вызов ошибки  и отлавливание их try catch
const fnWithError =() =>
{
    throw new Error('Some error') //создание новой ошибки
}
try
{
    fnWithError()
}
catch(error)
{
    console.error(error) //вывод ошибки
    console.log(error.message)//вывод текста ошибка

}

console.log('COntinea...')

//Создание массива
const MyArray = [1,2,3,4]
MyArray.push(4)//добавление в конец
const pipi = MyArray.pop()//Удаляет с конца массива и возвращает удаленный элемент
console.log(pipi)
console.log(MyArray,MyArray.length)

MyArray.unshift(true)// добавляет элемент в начале массива
const shif = MyArray.shift()//удаляет и возвращает первый элемент


console.log('Метод foreach', MyArray)
MyArray.forEach(el => console.log(el*2))
const MyArray2 = new Array(1,2,3)
console.log(MyArray2)

const newArray =MyArray.map((el) => {
    return el*3
})//перебирает массив и возвращает массив вариант с блоком функции

console.log('newArray ',newArray)
console.log('MyArray',MyArray)

//Деструктуризация объектов
const {a,b}= objectA // Объявление новых перемнных и присвание значений на основе значений свойств объектов 
const {gdr}= objectA

console.log(a)
console.log(gdr)
// Деструктуризация массивов
const fruits = ['Apple','Banana']
const [fruitsOne, fruitsTwo] =fruits
console.log(fruitsOne)
console.log(fruitsTwo)
//Десруктуризация в функциях
const userInfo =({a,b}) =>
{
    if (!b)
    {
        return `User ${a} has no comments`
    }
    return ` User ${a} has ${b} comments`
}
userInfo(objectA)

// if
let vaal=23
let val =10
if (val> 5)
{
    val++
}
console.log('Vaaal', val)

if (undefined === true)
{
    console.log('Здесь имени нет')
}
else if(val +11 >=20)
{
    console.log('Ваала здесь нет')
}
else{
    console.log('Здесь имя есть')
}
const sumPositiveNumbers =(a, b) =>
{
    if (typeof a !== 'number' || typeof b !== 'number' )
    {
        return 'One of the argument is no a numvber'
    }
    if (a<= 0 || b<=0)
    {
        return 'Numbers are not positive'
    }
    return a+b
}
console.log('Функция ', sumPositiveNumbers(10,3))

const month =2 
switch (month)
{
    case 12:
    console.log ('Декабрь')
    break;
    case 1:
    console.log ('Декабрь')  
    break;
    default:
    console.log ( 'Это не зимний месяц')

}  
// Тернарный оператор 

val && vaal
? console.log(sumPositiveNumbers(val,vaal))
: console.log('Ложь')
// for
for(let i=0; i<5; i++)
{
console.log(i)
}
//Цикл While
let i=0
while (i<5)
{
    console.log(i)
    i++
}
// for in перебирает свойства оъектов
const myObject =
{
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObject)
{
    console.log(key,myObject[key])
}

//использование foreach для перебора свойств объектов получаем навзвания свойств
Object.keys(myObject).forEach(value=> {
    console.log(value)
})
//использование foreach для перебора свойств объектов получаем значения свойств
Object.values(myObject).forEach(value=> {
    console.log(value)
})
//for of
const myString = 'Hey'
for (const letter of myString )
{
    console.log(letter)
}
for (const element of MyArray)
{
    console.log(element)
}
class Comment {
    constructor(text)
    {
        this.text =text
        this.votesQty=0
    }
    upvote()
    {
        this.votesQty +=1
    }
    static mergeComments (first, second) // Статический метод не насслеуются экземплярами класса
    {
        return `${first} ${second}`
    }
}
console.log(Comment.mergeComments('Дио', 'Брэндон'))
const firstComment = new Comment('First comment')
console.log(firstComment instanceof Comment) // проверка принадлежности прототипа
console.log(firstComment instanceof Object)
console.log(firstComment.hasOwnProperty('text'))//проверрка принадлежности свойства экземпляров класса

class NumbersArray extends Array//расширение класса
{
    sum()
    {
        return this.reduce((el,acc)=>acc += el,0)
    }
}
const myArray = new NumbersArray(2,5,7)
console.log(myArray)
myArray.sum()
//Промисы

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response =>
      {console.log(response) 
        returnresponse.json()
      })
      .then(json => console.log(json))
      .catch(error => console.error(error))
      // Упрощение промиса
      const getData = (url) =>
        new Promise ((resolve,reject)=>
        fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
        )
        getData('https://jsonplaceholder.typicode.com/todos')
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
        // Ассинхранные функции
        const anyncFn = async () => 
        {
            return 'Success!'
        }
        anyncFn()
        .then(value => console.log(value))
        .catch (error => console.log(error.message))
// ожидание результата await
        const timerPromise = () =>
            new Promise ((resolve,reject) =>
    setTimeout(()=> resolve(),2000))
        const   asyncFn =async() =>
        {
            console.log('Timer starts')
            const startTime = performance.now()
            await timerPromise()
            const endTime =performance.now()
            console.log ('Timer ended', endTime-startTime)
        }
        asyncFn()