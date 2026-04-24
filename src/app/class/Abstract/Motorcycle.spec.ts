import { Motorcycle } from './Motorcycle';

describe('Motorcycle testing', () => {
    let motorcycle: Motorcycle;

    beforeEach(() => {
        motorcycle = new Motorcycle(150, 300);
    });

    it('має створюватись з правильними значеннями', () => {
        expect(motorcycle).toBeTruthy();
        expect(motorcycle.getType()).toBe('Мотоцикл');
        expect(motorcycle.getRange()).toBe(300);
    });

    it('driveMoto() має повертати визначений рядок', () => {
        expect(motorcycle.driveMoto()).toBe('Мотоцикл починає рух');
    });

    it('displayInfo() має повертати інформацію про мотоцикл', () => {
        expect(motorcycle.displayInfo()).toContain('Мотоцикл');
        expect(motorcycle.displayInfo()).toContain('150');
        expect(motorcycle.displayInfo()).toContain('300');
    });
});