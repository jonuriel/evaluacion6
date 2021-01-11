const numbers = [2,3,4,2,4,3,7,8,3];
const breakfasts = [
        {main_dish: 'chilaquiles', dessert: 'gelatina', price:70},
        {main_dish: 'hot cakes', dessert: 'Fruta picada', price:60},
        {main_dish: 'crepas', dessert: 'Duraznos en almibar', price:50},
        {main_dish: 'hot cakes', dessert: 'fresas con crema', price:70},
        {main_dish: 'hot cakes', dessert: 'Chongos zamoranos', price:80},
]
//forEach()
console.log('====ForEach()===')
numbers.forEach(x => {
    console.log(x *2);
})
//filter
console.log('====filter====')
 let breakfastHotcakes = breakfasts.filter( h => h.price < 70);
 console.log(breakfastHotcakes);
//map()
console.log('*=*=*=*=*=*=*=map*=*=*=*=*=*=*=*=')
const multiplicados = numbers.map(x => x * 5)
console.log(multiplicados);
//find
console.log(':_:_:_:_:_:Find_:_:_:_:_:_:_:')
const breakfast = breakfasts.find(br => br.price === 50);
console.log(breakfast);
//findIndex
console.log('-:-:-:-:-:-:-:findIndex-:-:-:-:-:-:-:-:')
let encontrado = numbers.findIndex(function(numero) {
    return numero === 8;
}) 
console.log(encontrado);
//contains
console.log('_*_*_*_*_*_*_*_contains*_*_*_*_*_*_*_');
 let result = _.contains(numbers,3);
 console.log(result);
 //pluck
console.log('_-_-_-_-_-_-_pluck-_-_-_-_-_-_-');
let  nombre =_.pluck(breakfasts, 'main_dish');
console.log(nombre);
//without()
console.log('xXxXxXxXxXxXwithoutxXxXxXxXxXxXxX');
console.log(_.without(numbers,3));
