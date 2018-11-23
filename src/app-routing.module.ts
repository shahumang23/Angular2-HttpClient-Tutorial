import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { BranchListComponent } from './components/branch-list/branch-list.component';

const appRoutes: Routes = [
    {
        path: 'branchLists',
        component: BranchListComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/branchLists'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}