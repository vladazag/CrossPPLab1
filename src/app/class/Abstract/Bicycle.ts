import { Vehicle } from './Vehicle'

export class Bicycle extends Vehicle {
    constructor(maxSpeed: number, range: number, public gearCount: number) {
        super("Велосипед", maxSpeed, range);
    }

    pedal() {
        return("Велосипед починає рух");
    }
}