// pure function 
function calculateArea(width, height){
    let area = width * height;

    return area
}

console.log(calculateArea(5, 10));

// impure function - has side effects
function logArea(width, height){
    let area = width * height

    console.log(area)
}

logArea(8, 10)