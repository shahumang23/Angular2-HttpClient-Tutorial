import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import { RestService } from './rest.service';
import { BranchData } from '../models';

describe('Service: RestService', () => {
    let backend: MockBackend;
    let service: RestService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                RestService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(RestService);

    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === 'api/forms') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of branchlist Name from the server on success', () => {
        setupConnections(backend, {
            body: {
                data: [
                    {
                        id: 1,
                        PostalAddress: [],
                        Name: 'PLAISTOW WEST HAM'
                    },
                    {
                        id: 4,
                        PostalAddress: [],
                        Name: 'WALTON VALE'
                    }
                ]
            },
            status: 200
        });

        service.getBranchData().subscribe((data: BranchData[]) => {
            expect(data.length).toBe(2);
            expect(data[0].Name).toBe('PLAISTOW WEST HAM');
            expect(data[1].Name).toBe('WALTON VALE');
        });
    });

    it('should log an error to the console on error', () => {
        setupConnections(backend, {
            body: { error: `I'm afraid I've got some bad news!` },
            status: 500
        });
        spyOn(console, 'error');

        service.getBranchData().subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!`);
        });
    });
});