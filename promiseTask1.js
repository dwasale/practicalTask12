// Creating an empty array to store pokemons
let items = [];

// Fetch info of pokemon from the 
fetch ("https://pokeapi.co/api/v2/pokemon/pikachu/")
// Fetch returns an object which is called res by default
// Parse the response as a JSON object
.then((res) => res.json())
// Callback used to parse the data
.then((result) => {
    // Assing and store the data in the items array
    items = result;
    // Return the data in the console
    console.log(`Name:\n${items.name}\n\nWeight:\n${items.weight}\n\nAbilities:\n${JSON.stringify(items.abilities)}`);
});
// Error handling is executed if fetch fails
(error) => {
    // Return an erro in the console
    console.log(error);
}