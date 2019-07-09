import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

  // constructor(
  //   private viewContainerRef: ViewContainerRef,
  //   private componentFactoryResolver: ComponentFactoryResolver

  // ) { }

  // ngOnInit() {
  //   setTimeout(_ => {
  //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
  //     const componentRef =  this.viewContainerRef.createComponent(componentFactory);
  //   }, 3000);
  // }

}
