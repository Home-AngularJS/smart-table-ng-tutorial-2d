import { Injectable } from '@angular/core';
import { User } from './data';
import { of, Observable } from 'rxjs/index';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { TableState, DisplayedItem } from 'smart-table-ng';
import { LessonsDataSource } from "./lessons.datasource";
import { LessonsService } from "./lessons.service";
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
  // lessonDataSource: LessonsDataSource;
  usersDataSource: UsersDataSource;
  res;

  constructor(
      // private coursesService: LessonsService,
      private usersService: UsersService
  ) {}

  async queryUsers(tableState: TableState) {
    console.log('SERVER CALL');
    console.log( JSON.stringify(tableState) )

    // this.lessonDataSource = new LessonsDataSource(this.coursesService);
    // this.lessonDataSource.loadLessons(1, '', 'asc', 0, 3);
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
      // const summary: Summary = { page: tableState.slice.page, size: tableState.slice.size, filteredCount: next.length }
      const summary: Summary = { page: tableState.slice.page, size: tableState.slice.size, filteredCount: 33 }
      this.res = { data: data, summary };
      console.log( JSON.stringify(this.res) )
    });

    await wait(Math.floor(Math.random() * 1000));

    return this.res;
  }
}
