import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BranchListService } from './services/branch-list.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';
import { SearchFilterPipe } from './pipes/custom-pipe';
import { FormsModule } from '@angular/forms';

import {
    AppComponent,
    BranchListComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BranchListComponent,
        SearchFilterPipe
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        BranchListService,
        RestService
    ]
})
export class AppModule {}