import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        items.forEach(item => {
            sum += item.massKg;
        })
        // for(let i = 0; i < items.length; i++){
        //     sum += items[i].massKg;
        // }
        return sum;
    }
    currentMassKg(): number {
        let combinedMass: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    }
    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}