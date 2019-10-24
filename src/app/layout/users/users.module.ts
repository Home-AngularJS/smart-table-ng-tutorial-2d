import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { SmartTableModule } from 'smart-table-ng';
import { UsersRest } from "../../core/service/users.rest";

@NgModule({
    declarations: [ UsersComponent ],
    imports: [
        CommonModule,
        SmartTableModule,
        HttpClientModule
    ],
    providers: [
        UsersRest
    ],
    exports: [ UsersComponent ]
})
export class UsersModule {
}
