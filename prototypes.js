/**
 * In Javascript all functions have a prototype feature which allows to attach the methos and properties to it. This is done by using the keyword "prototype"
 * Only through this prototype property JS supports inheritance
 */

function operations(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
}

operations.prototype.add = (a, b) => {
    this.number1 = a;
    this.number2 = b;
    return number1 + number2;
};

operations.prototype.mul = () => {};
