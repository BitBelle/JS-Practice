import { dayName as nomDeJour } from './dayName.js'

let now = new Date();
console.log(`Today is ${nomDeJour(now.getDay())}`);