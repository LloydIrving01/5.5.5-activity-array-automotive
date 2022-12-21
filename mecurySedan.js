//this includes the vehicle class as a module
const vehicleModule = require('./vehicle').Vehicle

class Car extends vehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  checkService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("Engine has started.");
      return (this.started = true);
    } else {
      console.log("No fuel");
      return (this.started = false);
    }
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if ((num + this.passenger) <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.make +
            " " +
            this.model +
            " does not have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full.");
    }
  }
}

//this shows how to call from this module...
let myCar = new Car("Mecury", "Sedan", "1965", "color", "mileage");

myCar.start();
myCar.loadPassenger(5);

