import {Quadratic} from "./QuadraticEquation"
let quadratic = new Quadratic(11,6,-2);
if(quadratic.getDiscriminant() >= 0){
    console.log(quadratic.getRoot1());
console.log(quadratic.getRoot2());
}
else throw new Error ('The equation has no roots');
