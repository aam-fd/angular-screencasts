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
}
