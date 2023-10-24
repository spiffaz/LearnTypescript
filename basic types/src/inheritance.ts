// Create a TypeScript class called Shape with properties width and height. Implement a method calculateArea that calculates and returns the area of the shape. Then, create a subclass Rectangle that extends Shape and overrides the calculateArea method to calculate the area of a rectangle.


class Shape {
    constructor(public width : number, public height : number) {
        this.width = width
        this.height = height
    }

    calculateArea () : number{
        return this.width * this.height
    }
}

class Rectangle extends Shape {
    constructor(width: number, height : number) {
        super(width, height)
    }

    calculateArea (){
        return this.width * this.height
    }
}

const rectangle = new Rectangle(5, 10); // Create a rectangle
const area = rectangle.calculateArea(); // Calculate the area of the rectangle
console.log("Area of the rectangle:", area);