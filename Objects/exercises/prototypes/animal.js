function Animal(species){
    this.species = species;
}

Animal.prototype.speak = function(line){
    console.log(`Animal species: ${this.species}, Animal Sound: ${line}`);
}

let animalObj = new Animal("Dog");
animalObj.speak("barks");