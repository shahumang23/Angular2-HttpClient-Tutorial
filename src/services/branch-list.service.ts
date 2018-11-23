import { Injectable } from '@angular/core';
import { BranchData } from '../models';

import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class BranchListService {
    forms = new BehaviorSubject<Array<BranchData>>([]);

    setBranchData(newForms: Array<BranchData>) {
        this.forms.next(newForms);
    }
}