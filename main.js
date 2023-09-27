class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.height * this.width;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}
let myRectangle = new Rectangle(150, 50);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();
myRectangle.setWidth(200);
// let newWidth = myRectangle.getWidth();
// console.log(newWidth);
document.write(myRectangle.getWidth());

let canvas = document.getElementById("demo");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, width, height);
