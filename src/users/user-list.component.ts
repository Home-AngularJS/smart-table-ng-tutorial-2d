import { Component } from '@angular/core';
import { SmartTable, of, TableState } from 'smart-table-ng';
import { UsersService } from './users.service';
import { DefaultSettingsService } from './default-settings.service';
import server from 'smart-table-server';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UsersService, settings: TableState) => of([], settings, server({
    query: (tableState) => Users.queryUsers(tableState)
  })),
  deps: [UsersService, DefaultSettingsService]
}];

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  providers
})
export class UserListComponent {
}