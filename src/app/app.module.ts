import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SmartTableModule } from 'smart-table-ng';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from "./layout/users/users.component";
import { UsersRest } from "./core/service/users.rest";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      SmartTableModule,
      CommonModule,
      HttpClientModule
  ],
  declarations: [ AppComponent, UsersComponent ],
  providers: [
      UsersRest
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
