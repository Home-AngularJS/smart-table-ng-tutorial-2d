import { Component } from '@angular/core';
import { SmartTable, of, TableState } from 'smart-table-ng';
import { UsersLocaleService } from '../../core/service/users-locale.service';
import { DefaultSettingsService } from '../../core/service/default-settings.service';
import server from 'smart-table-server';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UsersLocaleService, settings: TableState) => of([], settings, server({
    query: (tableState) => Users.queryUsers(tableState)
  })),
  deps: [UsersLocaleService, DefaultSettingsService]
}];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers
})
export class UsersComponent {
}
