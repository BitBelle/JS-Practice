/**
 * fetch - Function is used for making HTTP requests to fetch resources.
 *         (JSON style data, images, files)
 *         It simplifies asynchronous data fetching in JavaScript and
 *         is used for interacting with APIs to retrieve and send data
 *         asynchronously over the web.
 *
 *         fetch(url, {options}) - takes 2 arguments: a url and an object of options, ie. {method: "GET"/"PUT"/"DELETE"}
 */

// fetch("https://pokeapi.co/api/v2/pokemon/pikac")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Could not get resource: status response ${response.status}`)
//         } else {
//             let result = response.json();
//             return result;
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))




// using async/await

fetchData();

async function fetchData() {
  try {

    const pokemon = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!response.ok) {
      throw new Error(
        `Could not fetch resource: status response ${response.status}`
      );
    }

    const data = await response.json();
    console.log(data)
    //to have the image
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite")

    //change css of the im element
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block"

  } catch (error) {
    console.error(error)
  }
  
}

