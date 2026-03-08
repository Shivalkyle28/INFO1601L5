let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

console.log(area);

let name = "bob";
let age = 24;

console.log(typeof(name))
console.log(typeof(age))

console.log(`Hello my name is ${name}, I'm ${age} years old`);

console.log(`I was born in ${2020 - age}`);

for(let i = 1; i <= 50; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz");
  }
  else if(i % 3 === 0){
    console.log("fizz");
  }
  else if(i % 5 === 0){
    console.log("buzz");
  }
  else{
    console.log(i);
  }
}
