export type VehicleName = 'Автомобіль' | 'Велосипед' | 'Мотоцикл';
export type VehicleNameMap = { [key: string]: VehicleName };

export const VehicleNameMap: VehicleNameMap = {
    Car: 'Автомобіль',
    Bicycle: 'Велосипед',
    Motorcycle: 'Мотоцикл',
};