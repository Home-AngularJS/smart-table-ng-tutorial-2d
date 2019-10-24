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
export class UsersLocalService {

  async queryUsers(tableState: TableState): Promise<ServerResult> {
    console.log('SERVER CALL');
    /**
     * Фильтр и пагинация для найденных данных выполняется уже локально (на стороне клиента)
     */

    // console.log( JSON.stringify(data) )  //TODO: реальные данные полученые из базы
    const _db: any = table({ data: data });  //TODO: конвертируем данные из базы в объект 'table' (smart-table-core)

    // all matching - without slicing the data set (to get summmary info)
    const filterReq = Object.assign({}, tableState, { slice: { page: 1 } }); //TODO: добавляем фильтр в (локальный) запрос
    console.log( JSON.stringify(tableState) ) //TODO: реальный фильтр полученный от клиента ... для пагинации и сортировки
    const filterRes = await _db.eval(filterReq); //TODO: получаем уже отфильтрованные данные в (локальный) ответ ... для поиска совпадений в полях
    console.log( JSON.stringify(filterReq) )
    // console.log( JSON.stringify(filterRes) )

    const summary: Summary = { page: tableState.slice.page, size: tableState.slice.size, filteredCount: filterRes.length } //TODO: добавляем пагинацию в (локальный) запрос
    console.log( JSON.stringify(summary) )

    //wait a little bit to fake server latency
    // await wait(Math.floor(Math.random() * 3000));

    // match the exact query to get the data with the slice
    const matching = await _db.eval(tableState); //TODO: получаем уже постранично данные в (локальный) ответ
    console.log( JSON.stringify(matching) )
    return { data: matching, summary };
  }
}
