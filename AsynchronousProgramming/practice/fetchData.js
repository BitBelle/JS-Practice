/**
 * Write a function processItems that takes an array of URLs,
 * fetches data from each URL in sequence (not concurrently),
 * and returns the collected results.
 */

async function processItems(urls) {
  //store data of the urls in an array
  const results = [];

  //iterate over each url
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      } else {
        const data = await response.json();
        results.push(data);
      }
    } catch (error) {
        console.error(error.message)
    }
  }

  return results;
}
