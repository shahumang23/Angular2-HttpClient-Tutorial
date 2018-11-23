import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BranchData } from '../../models';
import { BranchListService } from '../../services/branch-list.service';

@Component({
    selector: 'branch-list',
    template: require('./branch-list.component.html'),
    styles: []
})
export class BranchListComponent {
    forms: Array<BranchData> = [];
    txtFname: any = null;
    constructor(private branchListService: BranchListService, private router: Router) {
        this.branchListService.forms
            .subscribe((forms) => this.forms = forms);
    }
}