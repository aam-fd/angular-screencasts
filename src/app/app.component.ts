import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myColor: String = 'green';
  public selectedUser;

  public changeColor(color: String) {
    this.myColor = color;
  }

  public girls = [
    { name: 'Ana' },
    { name: 'Sofa' },
    { name: 'Mila' },
  ]

  public isShown = true;
}
