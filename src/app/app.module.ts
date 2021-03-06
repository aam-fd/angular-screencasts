import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { ProjectionComponent } from './projection/projection.component';
import { ColoryDirective } from './directives/colory.directive';
import { DelayDirective } from './directives/delay.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { GirlsDataService } from './common/services/girls-data.service';
import { ItemComponent } from './dynamic/item/item.component';
// import { policiesReducer } from './store/reducers/policies.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    ProjectionComponent,
    ColoryDirective,
    DelayDirective,
    DynamicComponent,
    ItemComponent
  ],
  entryComponents: [ // скомпилированы сразу, но добавлены динамически
    DynamicComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // [StoreModule.forRoot({ policies: policiesReducer })],
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    GirlsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
