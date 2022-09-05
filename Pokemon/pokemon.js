const pokemonCards = document.getElementById("pokemonList"); // this allows you to write to it in the html (dom)

// memory or state
let pokemonObjectsList = []; // array of pokemon objects, blank

// controll input, click of a button
const theButton = document.getElementById("getPokemonBtn"); // hold the btn in memory
theButton.addEventListener("click", getPokemon); // when clicked it will invoke or call the function "getPokemon"

async function getPokemon(e) {
  pokemonObjectsList = [];
  console.log(e);
  let limit = 600;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );
  const data = await response.json(); // complex object
  // loop the number of times for the items you need, 6
  for (var i = 0; i < 6; i++) {
    // each iteration grab a random number
    var randomNumber = getRandomInt(limit);
    // each iteration push an obj to the array, pokemon
   
    var pokemon = data.results[randomNumber - 1]; // individual pokemon {name:'blah', url:'blah'}
    var tmpData = await fetch(pokemon.url);
    pokemon.data = await tmpData.json();
    pokemonObjectsList.push(pokemon);
  }

  // display the pokemon
  displayPokemon();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function displayPokemon() {
  // read from the pokemon array and get the pokemon object from the api
  // append the info from the obj to the page
  // loop 6 times and get the pokemon obj from the api
  // display the pokemon sprite, abilities, and 4 random moves, name
  for (var i = 0; i < pokemonObjectsList.length; i++) {
    makePokemonCard(pokemonObjectsList[i], i);
  }
  console.log("display");
}

function makePokemonCard(pokemonObj, id) {
  console.log(pokemonObj);
  // display a card with data from the pokemonObj
  // const pokemonImg = document.createElement('img');
  // pokemonImg.src = pokemonObj.sprites.front_default;
  var divId = `pokemon${id}`;
  //   make a div with create elemnt as a container
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("card", "bg-light");
  pokemonDiv.id = divId;

  const pokemonH1 = document.createElement("h1");
  pokemonH1.innerText = pokemonObj.data.name;
  pokemonDiv.append(pokemonH1);

  const pokemonP = document.createElement("p");
  pokemonDiv.append(pokemonP);
  // make a h1 and add it to the contianer use the data form the pokemon object
  // make an img element and add it top the conatianer use the front-Default url for the img source in the sprites obj
  // create a p tag element and add info from the pokemon obj to the p tag
  // append the h1, img and p tags to the container
  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemonObj.data.sprites.front_default; // concatenate two properties

  pokemonDiv.append(pokemonImg);

  const pokemonContainer = document.getElementById(divId);
  pokemonContainer.innerHTML = "";
  pokemonContainer.append(pokemonDiv);
}
