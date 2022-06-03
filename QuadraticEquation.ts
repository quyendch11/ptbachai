export class Quadratic{
    a:number;
    b:number;
    c:number;
    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;  
    }
    geta():number { 
        return this.a;
     }
     getb():number {
         return this.b;
     }
     getc():number {
         return this.c;
     }
     getDiscriminant() {
         let delta ;
         return delta = this.b*this.b-4*this.a*this.c;
     }
     getRoot1 () {
        let x1;
             return x1 = (-this.b-Math.pow(this.getDiscriminant(),0.5))/2*this.a;
    }
    getRoot2 () {
        let x2;
            return x2 = (-this.b+Math.pow(this.getDiscriminant(),0.5))/2*this.a;
     }
    }