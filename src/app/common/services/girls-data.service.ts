import { Girl } from '../models/girl';

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
    return this.girls.push({ name });
  }
}
