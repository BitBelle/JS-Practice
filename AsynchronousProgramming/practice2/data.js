/**
 * async function to:
 * fetch data from a fake API
 * log the response data
 * handle errors
 *
 */

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!response.ok) {
      throw new Error(
        `Couldnt fetch resource, ${response.status} status response`
      );
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
