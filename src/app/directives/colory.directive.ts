import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {

  @HostBinding('style.color') myColor: string;
  @HostListener('click', ['$event']) changeColor(event) {
    // this.myColor = 'green';
    this.myColor = '#' + Math.floor(Math.random()* 16777777).toString(16);
  }

  constructor() { 
    this.myColor = 'red';
    setTimeout(_=> {
      this.myColor = 'green';
    }, 2000)
  }

}
