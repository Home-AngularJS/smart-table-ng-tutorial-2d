import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Lesson } from '../model/lesson';
import { LessonsService } from './lessons.service';

export class LessonsDataSource implements DataSource<Lesson> {
    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private lessonsService: LessonsService) {}

    loadLessons(courseId: number,
                filter: string,
                sortDirection: string,
                pageIndex: number,
                pageSize: number) {
        this.loadingSubject.next(true);

        console.log('==================================')
        console.log(courseId)
        console.log(filter)
        console.log(sortDirection)
        console.log(pageIndex)
        console.log(pageSize)

        this.lessonsService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false)))
            .subscribe(lessons => this.lessonsSubject.next(lessons));
    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }
}

