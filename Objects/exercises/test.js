class Test {
    #privateField = "You shouldn't see this";
  
    getPrivateField() {
      return this.#privateField;
    }
  }
  
  let obj = new Test();
  console.log(obj.getPrivateField()); 
//   console.log(obj.#privateField);      
  