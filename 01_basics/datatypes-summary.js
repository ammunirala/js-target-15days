// primitive

// 7 types: String , Number, Boolean , null , undefined , symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123') // symbol(123)

const anotherId = Symbol('123') // symbol(123)

// console.log(id === anotherId); // false because symbol alwys creates unique value


const bigNumber = 265165165196816851455n
// console.log(typeof bigNumber);  // BigInt
 




// Refrence(Non primitive)

//Array, Object,Function



const heros = ["shaktiman", "naagraj", "virat"]

    let myObj =  {
        name: "amresh",
        age: 23,

    }
    // console.log([myObj,heros]);
    

    const myFunction = function(){
        console.log("Hello world");
        
    }

    // console.log(typeof outsideTemp);  // object



//     | Type of value                                         | Result                                                                                             |
// | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
// | Undefined                                             | `"undefined"`                                                                                      |
// | Null                                                  | `"object"`                                                                                         |
// | Boolean                                               | `"boolean"`                                                                                        |
// | Number                                                | `"number"`                                                                                         |
// | String                                                | `"string"`                                                                                         |
// | Object (native and does not implement `[[Call]]`)     | `"object"`                                                                                         |
// | Object (native or host and does implement `[[Call]]`) | `"function"`                                                                                       |
// | Object (host and does not implement `[[Call]]`)       | Implementation-defined, except it may not be `"undefined"`, `"boolean"`, `"number"`, or `"string"` |


// Stack (Primitive), Heap (Non-Primitive)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo  = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);





    

    
