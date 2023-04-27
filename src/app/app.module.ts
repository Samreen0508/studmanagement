import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {ReactiveFormsModule,FormsModule,} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConditionComponent } from './condition/condition.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
