function task3() {
  class Person {
    constructor(pname, age, gender, qualification, address) {
      this.pname = pname;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.qualification = qualification;
    }
    showdetails() {
      return `Name: ${this.pname}
	    Age: ${this.age}
	    Gender: ${this.gender}
	    Qulaification: ${this.qualification}
	    Address: ${this.address}`;
    }
  }

  let person1 = new Person("AAAAA", 19, "Male", "HSC", "XXXXX");
  let person2 = new Person("BBBBB", 20, "Female", "HSC", "YYYYY");
  console.log(person1.showdetails());
  console.log(person2.showdetails());
}
