// pure function

// users details
let userProfile = {
    name: "John Doe",
    email: "mercy@gmail.com",
    age: 20
};

// changes the user is making
let changes = {
    email: "johndoe@gmail.com",
    age: 30
}

// function to apply the changes
function updateProfile(userProfile, changes){

    return {...userProfile, ...changes};

}

let updatedProfile = updateProfile(userProfile, changes);
console.log(updatedProfile)
console.log(userProfile)


// impure function

// users details
let userProfile2 = {
    name: "John Doe",
    email: "mercy@gmail.com",
    age: 20
};

// changes the user is making
let changes2 = {
    email: "johndoe@gmail.com",
    age: 30
}

// function to apply the changes
function updateProfile2(){

    console.log({...userProfile2, ...changes2});

}

let updatedProfile2 = updateProfile2(userProfile2, changes2);
console.log(updatedProfile2)
console.log(userProfile2)