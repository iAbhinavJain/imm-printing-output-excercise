// Task 1
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let alertMessage = 
`
let a = 3;
let b = 5;
let c;
-------------------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b = ${a += b}
a -= b = ${a -= b}  
a *= b = ${a *= b}
a /= b = ${a /= b}
a %= b = ${a %= b}
a == b = ${a == b}
a != b = ${a != b}
a > b = ${a > b}
a < b = ${a < b}
!a && !c = ${!a && !c}
!a || !c = ${!a || !c}
`

alert(alertMessage);

/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


// TASK 2
let first_name = "Abhinav";
let last_name = "Jain";
let email = "jain0060@algonquinlive.com";
let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
alert(output);