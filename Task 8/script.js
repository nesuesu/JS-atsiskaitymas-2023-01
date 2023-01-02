/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(){}
    sum(a,b){
        return a+b;
    }
    subtraction(a,b){
        return a-b;
    }
    multiplication(a,b){
        return a*b;
    }
    division(a,b){
        return a/b;
    }
}

// let calc = new Calculator;
// console.log("5+3=", calc.sum(5,3));
// console.log("6-1=", calc.subtraction(6,1));
// console.log("3*5=", calc.multiplication(3,5));
// console.log("12/3=", calc.division(12,3));