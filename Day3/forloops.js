var programminglang = ["C", "C++", "JAVA", "PYTHON", "JavaScript"];

console.log("for loop");

for (let i = 0; i < programminglang.length; i++) {
  console.log(programminglang[i]);
}

//the above program prints all the elements of the programming lang

console.log("for...in loop");
// for .. in loop
for (var i in programminglang) {
  console.log(i);
}

//the above program prints the number of indexes from (0 to 4) as the length of the programminglang is 5.
console.log("for...of loop");

// for .. of loop
for (var i of programminglang) {
  console.log(i);
}
//the above program prints all the elements of the programming lang

console.log("forEach loop");

let count = 1;
function sample() {
  //function forEachloop
  console.log(count);
  count++;
}

programminglang.forEach(sample); //foreach

//the above foreach loop calls sample function 5 times as the length of the programminglang is 5.
//the output of the program will be the value of count from 1 to 5 ..as the count is increamented for each call of the function.
