function task1() {
  var obj1 = { name: "Person 1", age: 5 };
  var obj2 = { age: 5, name: "Person 1" };

  // comparing using equal operator - '=='
  console.log(obj1 == obj2); //returns false

  // comparing using strictly equal operator - '==='
  console.log(obj1 === obj2); //returns false

  // comparing using stringfy method this convert the object into string

  console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //returns false

  //comparing using lodash's method using content delivery network (cdn)
  console.log(_.isEqual(obj1, obj2)); //returns true
}
