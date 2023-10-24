"use strict";
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();
console.log("Area of the rectangle:", area);
//# sourceMappingURL=inheritance.js.map