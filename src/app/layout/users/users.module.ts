import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { SmartTableModule } from 'smart-table-ng';
import { LessonsService } from "../../core/service/lessons.service";
import { UsersService } from "../../core/service/users.service";

@NgModule({
    declarations: [ UsersComponent ],
    imports: [
        CommonModule,
        SmartTableModule,
        HttpClientModule
    ],
    providers: [
        LessonsService,
        UsersService
    ],
    exports: [ UsersComponent ]
})
export class UsersModule {
}
