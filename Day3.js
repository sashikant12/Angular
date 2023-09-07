// Create a dynamic string  array perform all operation.
var stringArray = [];
//console.log(stringArray); // []
// Methods of Array
//1 push ==> Add to the last position
stringArray.push("sk"); // ['sk']
stringArray.push("ravi"); //['sk','ravi]
stringArray.push("praveen"); //['sk','ravi','praveen']
stringArray.push("jivan", "sahid", "sashi");
stringArray.push("jivan", "sahid", /*.....*/ "sashi");
console.log(stringArray);
/*
    2 pop ==>
    remove item from last position
    return that element(array length modified)
    return undefinded if array is empty
    mutating method
    this value will be === new array with remove element



*/
stringArray.pop(); // stringArray.slice(0,-1);
console.log(stringArray);
/*
    3 shift (pop)
    remove first element

*/
stringArray.shift();
/*
   4 unshift(push)
   add elements at starting
*/
stringArray.unshift("A", "B"); // 
/*
  5 splice

*/
//6 foreach
stringArray.forEach(function (ele) { return console.log(ele); });
//
var mapArray = stringArray.map(function (ele, index) { return console.log("Map ".concat(index, " and ").concat(ele)); });
//  console.log(mapArray);
//7 slice
// 8 reverse
