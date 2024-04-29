// API link for the random cat GIFs
let apiLink = "http://thecatapi.com/api/images/get?format=src&type=gif"
// Create a async function
async function generateCat(){
    let catGif = await fetch(apiLink);
    console.log(catGif);
}