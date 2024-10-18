class Warrior {
    attack() {
      return "Warrior attacks with a sword!";
    }
  }
  
  class Mage {
    attack() {
      return "Mage casts a spell!";
    }
  }
  
  class Archer {
    attack() {
      return "Archer shoots an arrow!";
    }
  }
  
  let characters = [new Warrior(), new Mage(), new Archer()];
  
  characters.forEach(character => {
    console.log(character.attack());
  });
  
  