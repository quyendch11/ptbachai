"use strict";
exports.__esModule = true;
exports.Quadratic = void 0;
var Quadratic = /** @class */ (function () {
    function Quadratic(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Quadratic.prototype.geta = function () {
        return this.a;
    };
    Quadratic.prototype.getb = function () {
        return this.b;
    };
    Quadratic.prototype.getc = function () {
        return this.c;
    };
    Quadratic.prototype.getDiscriminant = function () {
        var delta;
        return delta = this.b * this.b - 4 * this.a * this.c;
    };
    Quadratic.prototype.getRoot1 = function () {
        var x1;
        return x1 = (-this.b - Math.pow(this.getDiscriminant(), 0.5)) / 2 * this.a;
    };
    Quadratic.prototype.getRoot2 = function () {
        var x2;
        return x2 = (-this.b + Math.pow(this.getDiscriminant(), 0.5)) / 2 * this.a;
    };
    return Quadratic;
}());
exports.Quadratic = Quadratic;
