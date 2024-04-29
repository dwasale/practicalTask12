// Define an asynchronous function
async function myAsyncFunction(){
    // Storing a random number in a variable
    let randNumber = Math.floor(Math.random() * 1);
    // Create a condition to check wether the random number is greater or equal to 5
    if (randNumber >= 5){
        return(`Number is greater than equal to 5 [RESOLVED]`);
    } else {
        return(`The number is less than 5 [REJECTED]`);
    }
}
// Return the result in console
console.log(myAsyncFunction());