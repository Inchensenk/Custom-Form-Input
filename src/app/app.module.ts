import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormInputComponent } from './custom-form-input/custom-form-input.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormContainerComponent,
    CustomFormInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
