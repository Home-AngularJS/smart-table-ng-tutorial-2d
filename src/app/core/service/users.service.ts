import { Injectable } from '@angular/core';
import { data, User } from './data';
import { of, Observable } from 'rxjs/index';
import { delay } from 'rxjs/operators';
import { TableState, DisplayedItem } from 'smart-table-ng';
import { table } from 'smart-table-core';

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
export class UsersService {

  private _db = table({ data: data });

  async queryUsers(tableState: TableState): Promise<ServerResult> {

console.log('SERVER CALL');
    // all matching - without slicing the data set (to get summmary info)
    const fullListState = Object.assign({}, tableState, { slice: { page: 1 } });
    const allMatching = await this._db.eval(fullListState);

    const summary: Summary = {
      page: tableState.slice.page,
      size: tableState.slice.size,
      filteredCount: allMatching.length
    }

    //wait a little bit to fake server latency
    await wait(Math.floor(Math.random() * 3000));

    // match the exact query to get the data with the slice
    const matching = await this._db.eval(tableState);
    return {
      data: matching,
      summary
    };
  }
}
