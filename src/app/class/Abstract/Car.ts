import { Vehicle } from './Vehicle'

export class Car extends Vehicle {
    constructor(maxSpeed: number, range: number, public fuelType: string) {
        super("Автомобіль", maxSpeed, range);
    }

    drive() {
        return("Автомобіль починає рух");
    }
}

