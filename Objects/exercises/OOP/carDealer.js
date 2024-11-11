// car class
class Car {
    constructor(make, model, year, price){
        this.make = make,
        this.model = model,
        this.year = year,
        this.price = price
    }

}

// car dealership class
class carDealership{
    constructor(){
        //array to store car objects
        this.carInventory = []
    }

    // add car
    addCar(make, model, year, price){
        //creating a car object
        const car = {
            make,
            model,
            year,
            price
        }
        //adding a car to the inventory
        this.carInventory.push(car);
        console.log(`New car added: Make: ${make}, Model: ${model}, Year: ${year}, Price: ${price}`);
    }

    // sell car method-(removing it from carInventory array)
    sellCar(make, model){
        const car = this.carInventory.find(b => b.make === make && b.model === model);
        if (car){

        }
    }
}

let myCar = new carDealership();
myCar.addCar("Toyota", "Camry", 2023);
myCar.addCar("Ford", "Mustang", 2022);
myCar.addCar("Chevrolet", "Malibu", 2020);
myCar.addCar("BMW", "3 Series", 2019);