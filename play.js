const fruits=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
for (let fruit of fruits){
    console.log(fruit)
}

console.log(fruits.map(fruit=>
    'fruit: ' + fruit));
console.log(fruits)