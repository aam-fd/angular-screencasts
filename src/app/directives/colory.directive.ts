import { Directive, HostBinding, HostListener } from '@angular/core';

// декоратор директивы включает параметр selector (атрибут селектор)
@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  // декораторы для воздействия на элемент
  // HostBinding - служит для обновления свойств эелемента, на который повесили
  // HostListener - служит для обработки событий
  @HostBinding('style.color') myColor: string;

  // первый параметр событие
  // второй необязательный но может сказать что хотим получить событие event
  @HostListener('click', ['$event']) changeColor(event) {
    // this.myColor = 'green';
    this.setRandomColor();
  }

  setRandomColor() {
    this.myColor = '#' + Math.floor(Math.random()* 16777777).toString(16);
  }

  constructor() { 
    this.myColor = 'red';
    setTimeout(_=> {
      this.myColor = 'green';
    }, 2000)
  }

}
