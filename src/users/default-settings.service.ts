import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DefaultSettingsService {
  search = {};
  filter = {
    balance: [{ operator: 'lt', type: 'number', value: 2000 }]
  }
  sort = {
    pointer: 'balance',
    direction: 'asc'
  }
  slice = {
    page: 1,
    size: 10
  };
}