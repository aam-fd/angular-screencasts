import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myColor: String = 'green';

  public changeColor(color) {
    this.myColor = color;
  }
}
