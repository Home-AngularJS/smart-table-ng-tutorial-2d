import { Component } from '@angular/core';
import { SmartTable, of, TableState } from 'smart-table-ng';
import server from 'smart-table-server';
import { DefaultSettingsService } from '../../core/service/default-settings.service';
import { UsersService } from "../../core/service/users.service";

const providers = [{
  provide: SmartTable,
  useFactory: (usersService: UsersService, settings: TableState) => of([], settings, server({
    query: (tableState) => usersService.queryUsers(tableState)
  })),
  deps: [UsersService, DefaultSettingsService]
}];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers
})
export class UsersComponent {
}
