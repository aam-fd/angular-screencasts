export class GirlsDataService {

  public girls = [
    { name: 'Ana' },
    { name: 'Sofa' },
    { name: 'Mila' },
  ]

  constructor() { }

  public getAll() {
    return this.girls;
  }

  public remove(name: string) {
    return this.girls = this.girls.filter(g => g.name !== name);
  }

  public add(name: string) {
    return this.girls.push({ name });
  }
}
