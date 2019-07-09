import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay: number;

  // TemplateRef является дженериком - то, на что мы навессили 
  // ViewContainerRef - обертка, которая создается вокрур нашей директивы
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelay * 1000);
  }

}
