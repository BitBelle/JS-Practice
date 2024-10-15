/**
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of
the original arrays.
 */

const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = arrayOfArrays.reduce((acc, currArray) => acc.concat(currArray), []);
console.log(flattenedArray);

//the concat method works same as
let flattenedArray2 = arrayOfArrays.reduce((previous, current) => previous + "," + current);
console.log(flattenedArray2);

