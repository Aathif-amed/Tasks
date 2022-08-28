function task3() {
  // Arrow Functions

  // Array Decalaration
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 121, 131, 343, 333, 456];
  let fruits = ["Kiwi", "Melon", "Apple", "Mango", "Berries", "Avacado"];
  //-------------------------------------------------------------------------------------

  //Print odd numbers in an Array

  let oddnum = ([]) => {
    console.log("a) Odd numbers in an Array");
    for (let i in numArray) {
      if (numArray[i] % 2 !== 0) console.log(numArray[i]);
    }
  };

  oddnum(numArray); // function call

  //-------------------------------------------------------------------------------------

  // Convert String to title caps in a string array
  let tocaps = ([]) => {
    console.log("b) String Array to caps");
    for (let i in fruits) {
      fruits[i] = fruits[i].toUpperCase();
    }
    return fruits;
  };

  console.log(tocaps(fruits)); // function call

  //-------------------------------------------------------------------------------------

  // Sum of all numbers in an Array

  let sumOfnumArray = ([]) => {
    let sum = 0;
    console.log("c) Sum of numbers in an Array");
    for (let i in numArray) {
      sum += numArray[i];
    }
    return sum;
  };

  console.log(sumOfnumArray(numArray)); // function call

  //-------------------------------------------------------------------------------------

  //Prime numbers in an Array

  let primenum = ([]) => {
    console.log("d) Prime numbers in an Array");
    let prime = [];
    for (let i in numArray) {
      let flag = true;
      if (numArray[i] === 1) {
        prime[i] = numArray[i];
      }

      // check if number is greater than 1
      else if (numArray[i] > 1) {
        // looping through 2 to number-1
        for (let j = 2; j < numArray[i] / 2 + 1; j++) {
          if (numArray[i] % j == 0) {
            flag = false;
            break;
          }
        }
        if (flag) {
          prime[i] = numArray[i];
        }
      }
    }
    //to clean the empty elements
    prime = prime.filter(() => true);
    return prime;
  };
  console.log(primenum(numArray)); // function call

  //-------------------------------------------------------------------------------------

  //Palindrome numbers in an Array

  let palinnum = ([]) => {
    console.log("e) Palindrome numbers in an Array");
    let palin = [];
    for (let i in numArray) {
      let rem,
        temp,
        final = 0;

      temp = numArray[i];
      while (temp > 0) {
        rem = temp % 10;
        temp = parseInt(temp / 10);
        final = final * 10 + rem;
      }
      if (final == numArray[i]) {
        palin[i] = numArray[i];
      }
    }
    //to clean the empty elements
    palin = palin.filter(() => true);
    return palin;
  };

  console.log(palinnum(numArray));

  //-------------------------------------------------------------------------------------
}
