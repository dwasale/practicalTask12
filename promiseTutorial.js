// Create a new Promise object taking in the resolve and reject parameters
let myPromise = new Promise(function(resolve, reject){
    // Store random number in the variable
    let randNumber = Math.floor(Math.random() * 10);
    // Promise is resolved if the number is greater or equal to 5.
    // Else it will be rejected
    if (randNumber >= 5){
        resolve(`Number was greater or equal to 5 [RESOLVED]`);
    } else {
        reject(Error(`The number was less than 5 [REJECTED]`));
    }
});
// Return the resolved or rejected results
myPromise.then(
    function (result){
        console.log(result);
    },
    function (error){
        console.log(error);
    },
);
// Retrun message to indicate that code is still running
console.log("I'll be still running though");