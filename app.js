var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');
/*
console.log(chalk.blue('This is Blue text'));

var evens = [2, 4, 6, 8];
console.log(evens);
console.log(chalk.red(evens[1]));

for(var i = 0; i < 10; i++){
  if(i % 2 === 0){
    //even
    console.log(chalk.blue(i));
}else { 
  //odd
    console.log(chalk.red(i));
  }
}

for (j = 0; j < evens.length; j++) {
  console.log('evens -> ' +evens[j]);
}
*/

var numbers = [];

var response = prompt('Enter a number or (q)uit: ');
while (response != 'q'){
  response = parseInt(response);
  numbers.push(response);  
  response = prompt('Enter a number or (q)uit: ');
}

var sum = 0;

for (j=0; j <numbers.length; j++) {
  sum +=  numbers[j];
}

console.log(numbers);
console.log(sum);

