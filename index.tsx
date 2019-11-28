import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

let object =
{
  firstname: 'rohini',
  lastname : 'jadhav',
  salary: 200
};
let object2={...object, salary:400};
console.log(object2);


//spread object ...oldobject
let objarray = [1,3,4,6,7];
let onjarray2 = [...objarray, 9, 10];
console.log(objarray);
console.log(onjarray2);

let obj2 ={fname:'rohini', lname:'jadhav', salary: 4000};
let obj3 = Object.assign({}, obj2, {salary:4567});
console.log(obj2);
console.log(obj3);

//destructuring objects
let obj4 ={fname:'rohini', lname:'jadhav', salary: 4000, add:'kapil'};
let {fname, add, ...rest} = obj4;
console.log(fname);
console.log(add);
console.log(rest);







