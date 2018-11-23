import { Component } from '@angular/core';

import { BranchListService } from '../../services/branch-list.service';
import { RestService } from '../../services/rest.service';
import { BranchData, PostalAddress } from '../../models';

@Component({
    selector: 'branch-list-app',
    template: require('./app.component.html')
})
export class AppComponent {
    forms: BranchData[] = null;

    constructor(private branchListService: BranchListService, private restService: RestService) {
        restService.getBranchData().subscribe((data: BranchData[]) => {
            this.branchListService.setBranchData(data);
        });
    }
}