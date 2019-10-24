import { Component } from '@angular/core';
import { SmartTable, of, TableState } from 'smart-table-ng';
import { UsersLocalService } from '../../core/service/users-local.service';
import { DefaultSettingsService } from '../../core/service/default-settings.service';
import server from 'smart-table-server';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UsersLocalService, settings: TableState) => of([], settings, server({
    query: (tableState) => Users.queryUsers(tableState)
  })),
  deps: [UsersLocalService, DefaultSettingsService]
}];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers
})
export class UsersComponent {
}
