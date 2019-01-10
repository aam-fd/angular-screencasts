import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  @Input('user') admin: Object;
  @Output() userSelectEvent: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.userSelectEvent.emit();
  }

}
