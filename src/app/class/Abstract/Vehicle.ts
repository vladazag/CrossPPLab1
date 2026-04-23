export abstract class Vehicle {
    type: string = '';     // Тип транспорту
    maxSpeed: number = 1; 
    range: number = 1;     // Дальність поїздки

    constructor(type: string, maxSpeed: number, range: number) {
        if (maxSpeed <= 0) throw new Error('max speed <= 0');
        if (range <= 0) throw new Error('range <= 0');
        this.type = type;
        this.maxSpeed = maxSpeed;
        this.range = range;
    }

    getType() {
        return this.type;
    }

    getRange() {
        return this.range;
    }

    displayInfo() {
        return(
            "Тип транспорту: " + this.type + 
            ", максимальна швидкість: " + this.maxSpeed +
            ", дальність поїздки: " + this.range 
        )
    }
}