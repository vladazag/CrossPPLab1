import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Bicycle } from "./Bicycle";
import { VehicleNameMap } from "./VehicleName";

export class VehicleFactory {
    public static getVehicle(data: any): Vehicle {
        if (data.type === VehicleNameMap['Car']) 
            return new Car(data.maxSpeed, data.range, data.fuelType);
        else if (data.type === VehicleNameMap['Bicycle']) 
            return new Bicycle(data.maxSpeed, data.range, data.gearCount);
        else 
            throw new Error('Невідомий вид транспорту');
    }
}
