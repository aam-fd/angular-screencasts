import { Girl } from '../models/girl';
import { GirlClass } from '../classes/girl-class';

export class GirlsDataService {

  public girls: Girl[] = [
    { name: 'Ana' },
    { name: 'Sofa' },
    { name: 'Mila' },
  ]

  constructor() { }

  public getAll(): Girl[] {
    return this.girls;
  }

  public remove(name: string): Girl[] {
    return this.girls = this.girls.filter(g => g.name !== name);
  }

  public add(name: string): number {
    const newGirl = new GirlClass(name);
    console.log('new girl', newGirl);
    return this.girls.push(newGirl);
  }
}
