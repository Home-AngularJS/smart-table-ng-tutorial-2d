import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { User } from "./data";
import { UsersService } from "./users.service";

export class UsersDataSource implements DataSource<User> {
    public usersSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private usersService: UsersService) {}

    loadUsers(filter: string,
              sortDirection: string,
              pageIndex: number,
              pageSize: number) {
        this.loadingSubject.next(true);

        this.usersService.findUsers(filter, sortDirection, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false)))
            .subscribe(users => this.usersSubject.next(users));
    }

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        console.log("Connecting data source");
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }
}
