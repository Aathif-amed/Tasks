function task1() {
  // Anonymous Functions
  // Array Decalaration
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 121, 131, 343, 333, 456];
  let fruits = ["Kiwi", "Melon", "Apple", "Mango", "Berries", "Avacado"];
  //-------------------------------------------------------------------------------------

  //Print odd numbers in an Array

  let oddnum = function ([]) {
    console.log("a) Odd numbers in an Array");
    for (let i in numArray) {
      if (numArray[i] % 2 !== 0) console.log(numArray[i]);
    }
  };

  oddnum(numArray); // function call

  //-------------------------------------------------------------------------------------

  // Convert String to title caps in a string array
  let tocaps = function ([]) {
    console.log("b) String Array to caps");
    for (let i in fruits) {
      fruits[i] = fruits[i].toUpperCase();
    }
    return fruits;
  };

  console.log(tocaps(fruits)); // function call

  //-------------------------------------------------------------------------------------

  // Sum of all numbers in an Array

  let sumOfnumArray = function ([]) {
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

  let primenum = function ([]) {
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

  let palinnum = function ([]) {
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

  // Median of two sorted arrays

  let median = function (ar1, ar2) {
    console.log("f)Median of two sorted arrays");
    let ar3 = [...ar1, ...ar2];

    ar3.sort(function (a, b) {
      //comparfunction because of sort method produce incorrect values of numbers in JavaScript
      return a - b;
    });
    console.log("Combined Array:" + ar3);

    let m = Math.floor(ar3.length / 2);
    let medi;
    if (ar3.length % 2 == 0) medi = (ar3[m - 1] + ar3[m]) / 2;
    else medi = ar3[m];
    return medi;
  };
  console.log(median([1, 2, 7, 4, 5], [6, 3, 8, 9, 10]));

  //-------------------------------------------------------------------------------------

  // Remove duplicates in an Array

  let remove = function (array) {
    console.log("g) Remove duplicates in an Array");
    let uniarr = [];
    for (let i of array) {
      if (uniarr.indexOf(i) === -1) {
        uniarr.push(i);
      }
    }
    return uniarr;
  };
  console.log(remove([1, 2, 3, 4, 4, 3, 2, 1]));

  //-------------------------------------------------------------------------------------

  // Rotate Array by K times
  let rotate = function (a, k) {
    console.log("h)Rotate Array by K times");
    k = k % a.length; //if rotation isgretaer than array length
    let b = [];
    for (let i = 0; i < a.length; i++) {
      if (i < k) {
        b[i] = a[a.length + i - k];
      } else {
        b[i] = a[i - k];
      }
    }
    return b;
  };
  console.log(rotate(numArray, 3)); //rotate by 3 times

  //-------------------------------------------------------------------------------------
}
