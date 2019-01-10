import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
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

  public nameControl: FormControl;
  public fullNameControl: FormGroup;
  public usersListControl: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.nameControl = new FormControl('Alex', [Validators.required, Validators.minLength(4)]); // первая [] - синхронный валидатор, вторая [] - асинхронный валидатор
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    console.log(this.nameControl);
    console.log(this.nameControl.value);
    this.nameControl.statusChanges.subscribe((value) => console.log(value));

    this.fullNameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });

    this.fullNameControl.valueChanges.subscribe((value) => console.log(value));

    // this.usersListControl = new FormGroup({
    //   animals: new FormArray([
    //     new FormControl('cat'),
    //     new FormControl('dog'),
    //     new FormControl('bird')
    //   ])
    // });

    this.usersListControl = this._formBuilder.group({
      animals: this._formBuilder.array([['cat'],['dog'],['bird']]),
    });


    this.usersListControl.valueChanges.subscribe((value) => console.log(value));

  }

  public removeUserControl(index) {
    (this.usersListControl.controls['animals'] as FormArray).removeAt(index);
  }
  public addUserControl() {
    (this.usersListControl.controls['animals'] as FormArray).push(new FormControl(''));
  }

}
