import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DefaultSettingsService {
  search = {};

  slice = { page: 1, size: 10 };

  filter = {
    name: [{ operator: 'lt', type: 'string', value: 'A' }] // balance: [{ operator: 'lt', type: 'number', value: 2000 }]
  };

  sort = {
    pointer: 'name.first', // pointer: 'balance',
    direction: 'asc'
  };
}
