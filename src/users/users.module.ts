import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list.component';
import { SmartTableModule } from 'smart-table-ng';

@NgModule({
  imports: [CommonModule, SmartTableModule, HttpClientModule],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UsersModule {
}
