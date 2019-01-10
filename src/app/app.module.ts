import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { ProjectionComponent } from './projection/projection.component';
import { ColoryDirective } from './directives/colory.directive';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    ProjectionComponent,
    ColoryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
