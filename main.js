//Number Data Type

let numValue1 = 10;
//convert number value
let strValue1= String(numValue1);
console.log(strValue1);//10
console.log(typeof(strValue1));//string

//convert number value to boolean

let boolValue1=Boolean(numValue1);// only 0 given false all numbers also negative given true
console.log(boolValue1);//true
console.log(typeof(boolValue1));//boolean

//Convert String to Number

let strValue2 ="Nahid";
 let numValue2= Number(strValue2);
 console.log(numValue2);//10  //NaN if convert string to number
 console.log(typeof(numValue2));//number

//boolean always given true when string convert to boolean

//boolean always given false when string is undefined(pure empty) but given true when string is null

boolValue3=true;
//convert boolean value to string

let strValue3= String(boolValue3);
console.log(strValue3);//false //output is true when boolValue is true

//convert boolean value into number

 let numValue3= Number(boolValue3);
 console.log(numValue3);//1
  











