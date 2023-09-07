let a:any;
var temp=(<string>a);
var  b = (a as boolean);
//anonymous function
//1
let d = function(a1:number){
    console.log("a ="+a1);
}
d(7);
//2
let d1 = function():number{
    return  7;
}
let r=d1();
console.log(r);
//3
let d2 = function(){
    console.log("d2");
}
d2();
//4
let d3 = function(a:number,b:number):number{
    return a+b;
}
let r1= d3(6,4);
console.log(r1);
//Fat arrow function
//1
let ar = ()=>{
    console.log("arrow");
}
ar();
//2
let ar1= (a:number,b:number):number =>{
    return a+b;
}
let re = ar1(6,4);
console.log(re);
//3
let ar2 = ():number=>{
    return 9;
}
ar2();
//4
let ar3=(a:number)=>{
    console.log(a);
}
ar3(9.3);
