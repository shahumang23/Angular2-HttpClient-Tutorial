import { async, TestBed } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs/Rx';

import { BranchListService } from './branch-list.service';
import { BranchData } from '../models';

class MockSubject {
    constructor(defaultValue: any) {
    }
    next(value: any) {}
}

describe('Service: BranchListService', () => {
    const testForms: any[] = [
        {
            Identification: 2,
            PostalAddress: [
                {
                    controlType: 'radio',
                    id: 'like',
                    label: 'Do you like pizza?',
                    options: [
                        { label: 'Yes', value: 1 },
                        { label: 'Of Course', value: 2 }
                    ],
                    required: true
                },
                {
                    controlType: 'text',
                    id: 'toppings',
                    label: 'What toppings do you like?',
                    required: false
                }
            ],
            Name: 'Pizza Party'
        },
        {
            Identification: 5,
            PostalAddress: [
                {
                    controlType: 'select',
                    id: 'delicious',
                    label: 'What is the best cheese for a burger?',
                    options: [
                        { label: '', value: 'no-cheese' },
                        { label: 'American', value: 'american' },
                        { label: 'Cheddar', value: 'cheddar' },
                        { label: 'Provolone', value: 'provolone' },
                        { label: 'Swiss', value: 'swiss' }
                    ],
                    required: true
                },
                {
                    controlType: 'textarea',
                    id: 'perfection',
                    label: 'Describe your perfect burger:',
                    required: true
                }
            ],
            Name: 'Burger Bonanza'
        }
    ];
    let service: BranchListService;

    beforeEach(() => {
        service = new BranchListService();
    });

    it('should have a `forms` attribute that is a BehaviorSubject', () => {
        expect(service.forms instanceof BehaviorSubject).toBe(true);
    });


    it('#setBranchData should call forms.next', () => {
        spyOn(service.forms, 'next');
        service.setBranchData(testForms);

        expect(service.forms.next).toHaveBeenCalledWith(testForms);
    });
});