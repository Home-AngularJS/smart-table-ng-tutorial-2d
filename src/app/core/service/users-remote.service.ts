import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { of, Observable } from 'rxjs/index';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { TableState, DisplayedItem } from 'smart-table-ng';
import { UsersDataSource } from "./users.datasource";
import { UsersService } from "./users.service";

interface Summary {
  page: number;
  size: number;
  filteredCount: number;
}

interface ServerResult {
  data: DisplayedItem<User>[];
  summary: Summary
}

const wait = (time = 2000) => new Promise(resolve => {
  setTimeout(() => resolve(), time);
});

@Injectable({
  providedIn: 'root',
})
export class UsersRemoteService {
  usersDataSource: UsersDataSource;
  users;

  constructor(private usersService: UsersService) {}

  async queryUsers(tableState: TableState) {
    console.log( JSON.stringify(tableState) )

    this.usersDataSource = new UsersDataSource(this.usersService);
    this.usersDataSource.loadUsers('', tableState.sort.direction, tableState.slice.page-1, 10);
    this.usersDataSource.usersSubject.subscribe(next => {
      var data = [];
      for (let i = 0; i < next.length; i++) {
        data.push({
          'index': i,
          'value': next[i]
        })
      }
      const summary: Summary = { page: tableState.slice.page, size: tableState.slice.size, filteredCount: 33 } // const summary: Summary = { page: tableState.slice.page, size: tableState.slice.size, filteredCount: next.length }
      this.users = { data: data, summary };
    });
    await wait(Math.floor(Math.random() * 1000));

    // console.log( JSON.stringify(this.users) )
    return this.users;
  }
}
