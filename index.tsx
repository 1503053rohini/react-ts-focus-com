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