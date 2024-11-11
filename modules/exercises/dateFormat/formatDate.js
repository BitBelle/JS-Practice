//importing a dependency
const ordinal = require('ordinal');
//import with destructuring
const {days, months} = require('date-names');

//export a function
exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, (tag) =>{
        if (tag === 'YYYY') return date.getFullYear();
        if (tag === 'MMMM') return months[date.getMonth()];
        if (tag === 'D') return date.getDate();
        if (tag === 'Do') return ordinal(date.getDate());
        if (tag === 'dddd') return days[date.getDay()];
  });

};