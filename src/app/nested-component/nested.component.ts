import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  @Input('user') admin: Object;

  constructor() { }

  ngOnInit() {
  }

}
