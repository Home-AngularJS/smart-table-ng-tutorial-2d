import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { SmartTableModule } from 'smart-table-ng';

@NgModule({
  imports: [
      CommonModule,
      SmartTableModule,
      HttpClientModule
  ],
  declarations: [ UsersComponent ],
  exports: [ UsersComponent ]
})
export class UsersModule {
}
