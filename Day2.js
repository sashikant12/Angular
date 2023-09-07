var a;
var temp = a;
var b = a;
//anonymous function
//1
var d = function (a1) {
    console.log("a " + a1);
};
d(7);
//2
var d1 = function () {
    return 7;
};
var r = d1();
console.log(r);
//3
var d2 = function () {
    console.log("d2");
};
d2();
//4
var d3 = function (a, b) {
    return a + b;
};
var r1 = d3(6, 4);
console.log(r1);
//Fat arrow function
//1
var ar = function () {
    console.log("arrow");
};
ar();
//2
var ar1 = function (a, b) {
    return a + b;
};
var re = ar1(6, 4);
console.log(re);
//3
var ar2 = function () {
    return 9;
};
ar2();
//4
var ar3 = function (a) {
    console.log(a);
};
ar3(9.3);
