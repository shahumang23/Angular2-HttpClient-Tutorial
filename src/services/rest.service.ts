import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import 'rxjs/add/operator/map';

import { BranchData } from '../models';
import { Config } from '../config';

@Injectable()
export class RestService {
    config = new Config;
    constructor(private http: Http) {}
    getBranchData() {
        // I assigned all static value on config file so in future you can assign value as per different environment
        return this.http.get(this.config.url)
                .map((response) => {
                    // The response of the API has a response.json()
                    const json = response.json();

                    if (response.ok) {
                        return json.data[0].Brand[0].Branch as BranchData[];
                    } else {
                        return this.logError(json);
                    }
                });
    }

    private logError(error: any) {
        throw error;
    }
}