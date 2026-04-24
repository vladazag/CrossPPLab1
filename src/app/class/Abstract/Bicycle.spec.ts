import { Bicycle } from './Bicycle';

describe('Bicycle testing', () => {
    let bicycle: Bicycle;

    beforeEach(() => {
        bicycle = new Bicycle(42, 140, 21);
    });

    // Перевірка створення об'єкту
    it('має створюватись з правильними значеннями', () => {
        expect(bicycle).toBeTruthy();
        expect(bicycle.getType()).toBe('Велосипед');
        expect(bicycle.getRange()).toBe(140);
        expect(bicycle.gearCount).toBe(21);
    });

    // Перевірка методів
    it('pedal() має повертати визначений рядок', () => {
        expect(bicycle.pedal()).toBe('Велосипед починає рух');
    });

    it('displayInfo() має повертати інформацію про велосипед', () => {
        expect(bicycle.displayInfo()).toContain('Велосипед');
        expect(bicycle.displayInfo()).toContain('42');
        expect(bicycle.displayInfo()).toContain('140');
    });

    // Перевірка виключень
    it('має викидати помилку якщо maxSpeed <= 0', () => {
        expect(() => new Bicycle(-10, 140, 21)).toThrowError('max speed <= 0');
    });

    it('має викидати помилку якщо range <= 0', () => {
        expect(() => new Bicycle(42, -5, 21)).toThrowError('range <= 0');
    });
});