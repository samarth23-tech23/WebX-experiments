var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); // Output: Circle Area: 78.53981633974483
var rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 24
