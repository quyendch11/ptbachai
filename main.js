"use strict";
exports.__esModule = true;
var QuadraticEquation_1 = require("./QuadraticEquation");
var quadratic = new QuadraticEquation_1.Quadratic(11, 6, -2);
if (quadratic.getDiscriminant() >= 0) {
    console.log(quadratic.getRoot1());
    console.log(quadratic.getRoot2());
}
else
    throw new Error('The equation has no roots');
