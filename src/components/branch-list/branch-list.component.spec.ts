import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';
import { Router } from '@angular/router';

import { BranchListComponent } from './branch-list.component';
import { BranchListService } from '../../services/branch-list.service';
import { BranchData } from '../../models';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../pipes/custom-pipe';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

class MockFormService {
    forms = {
        subscribe: () => {}
    }
}

describe('Component: BranchListComponent', () => {
    let component: BranchListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [BranchListComponent, SearchFilterPipe],
            providers: [
                { provide: Router, useClass: MockRouter },
                { provide: BranchListService, useClass: MockFormService }
            ]
        })
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(BranchListComponent);

            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});