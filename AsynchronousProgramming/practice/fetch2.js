/**
 * Write a function safeFetch(url) that fetches data from a
 * URL and ensures it never rejects.
 * Instead, return a default value in case of errors.
 */

async function safeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // console.error(error);
    return { error: "Default value in case of failure" };
  }
}

function safeFetch2(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) => {
        console.error(error)
        return { error: "Default value in case of failure" };
    })
}
