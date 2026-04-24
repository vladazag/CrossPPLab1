import { Car } from './Car';

describe('Car testing', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car(187, 620, 'Бензин');
    });

    it('має створюватись з правильними значеннями', () => {
        expect(car).toBeTruthy();
        expect(car.getType()).toBe('Автомобіль');
        expect(car.getRange()).toBe(620);
        expect(car.fuelType).toBe('Бензин');
    });

    it('drive() має повертати визначений рядок', () => {
        expect(car.drive()).toBe('Автомобіль починає рух');
    });

    it('displayInfo() має повертати інформацію про автомобіль', () => {
        expect(car.displayInfo()).toContain('Автомобіль');
        expect(car.displayInfo()).toContain('187');
        expect(car.displayInfo()).toContain('620');
    });
});