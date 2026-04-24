import { Vehicle } from './Vehicle'

export class Motorcycle extends Vehicle {
    constructor(maxSpeed: number, range: number) {
        super("Мотоцикл", maxSpeed, range);
    }

    driveMoto() {
        return("Мотоцикл починає рух");
    }
}