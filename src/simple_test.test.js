//use functions from sample.js
const{addFunc, isDivisibleBy5, checkOddEven} = require("./sample");

describe("Test Suite for sample.js functions",()=>{
    it("should add 3 numbers",()=>{
        const result = addFunc(1,3,4);
        expect(result).toBe(8);
    })
    it("should check divisibility by 5",()=>{
        const result = isDivisibleBy5(1283);
        expect(result).toBe(false);
    })
    it("should be divisible by 5",()=>{
        const result = isDivisibleBy5(999);
        expect(result).toBe(false);
    })

    //Test Driven Development
    //Step 1: write the test
    it("should check if odd or even",()=>{
        const result = checkOddEven(1999);
        expect(result).toBe("Odd");
    })
})
