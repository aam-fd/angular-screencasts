import { Component, OnInit, OnDestroy, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Policy } from './common/models/policy';
import { PoliciesService } from './common/services/policies.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { GirlsDataService } from './common/services/girls-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // subscription
  public policies$: Observable<Policy[]>;
  private _subscriptionPolicies: Subscription;

  // ui data
  public policies: Policy[] = [];

  public myColor: String = 'green';
  public selectedUser;

  public changeColor(color: String) {
    this.myColor = color;
  }

  public isShown = true;

  public girls: any;

  public nameControl: FormControl;
  public fullNameControl: FormGroup;
  public usersListControl: FormGroup;

  constructor(
    private _girlsService: GirlsDataService,
    private _formBuilder: FormBuilder,
    private _policiesService: PoliciesService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.policies$ = this._policiesService.getPolicies();
  }

  ngOnInit() {

    this.girls = this._girlsService.getAll();

    this._subscriptionPolicies = this.policies$.subscribe((policies: Policy[]) => {
      console.log('policies', policies);
      this.policies = policies;
    });

    setTimeout(_ => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      const componentRef = this.viewContainerRef.createComponent(componentFactory);
    }, 3000)

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

  ngOnDestroy() {
    this._subscriptionPolicies.unsubscribe();
  }

  public removeUserControl(index) {
    (this.usersListControl.controls['animals'] as FormArray).removeAt(index);
  }
  public addUserControl() {
    (this.usersListControl.controls['animals'] as FormArray).push(new FormControl(''));
  }

}
