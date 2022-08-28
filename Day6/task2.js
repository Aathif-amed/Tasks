function task2() {
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    get getRadius() {
      return this.radius;
    }
    get getColor() {
      return this.color;
    }

    set setRadius(radius) {
      this.radius = radius;
    }
    set setColor(color) {
      this.color = color;
    }
    toString() {
      return `Radius of Circle :${this.radius}
	Color of Circle:${this.color}`;
    }
    get getArea() {
      let area = 3.14159 * this.radius * this.radius;
      return `Area of the circle:${area}`;
    }
    get getCircumference() {
      let circumference = 2 * 3.14159 * this.radius;
      return `Circumference of the circle:${circumference}`;
    }
  }

  let circle1 = new Circle(); //without intializing radius and color
  console.log("Printing Area and Circumference of Circle1");
  console.log(circle1.getArea);
  console.log(circle1.getCircumference);
  circle1.setColor = "green"; //setting color of the circle1
  console.log(circle1.getColor);
  console.log("Printing color and radius of Circle1");
  console.log(circle1.toString());

  let circle2 = new Circle(2.0); //without intializing color
  console.log(circle2.getColor); //printing the color of circle2

  let circle3 = new Circle(3.0, "orange");
  console.log("Radius of Circle 3:" + circle3.getRadius); //printing radius of circle3
  console.log("Color of Circle 3:" + circle3.getColor); //printing color of circle3
  circle3.setRadius = 4; //changing the radius of circle3 to 4
  console.log("New Radius of Circle 3:" + circle3.getRadius); //printing radius of circle3 after changing value
}
