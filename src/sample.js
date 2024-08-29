const addFunc = (a, b, c) => {
    return a + b + c;
}
// create the test suite
const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}
const checkOddEven = (num2)=>{
    if (num2%2==0){
        return "even";
    } else{
        return "Odd";
    }
}
// allows other js files to use the addFunc and isDivisibleBy5 using require keyword
module.exports = {
    addFunc,
    isDivisibleBy5,
    checkOddEven
}