import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SearchFilterPipe} from './custom-pipe';

describe('Service: RestService', () => {
    let pipe :  SearchFilterPipe;
    const item: any[] = [
        [{
            "Identification": "11863000",
            "SequenceNumber": "00",
            "Name": "TADCASTER",
            "Type": "Physical",
            "CustomerSegment": ["Personal"],
            "OtherServiceAndFacility": [{
                "Code": "ATMB",
                "Name": "ATMAtBranch",
                "Description": "ATMAtBranch"
            }],
            "Availability": {
                "StandardAvailability": {
                    "Day": [{
                        "Name": "Monday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:00"
                        }]
                    }, {
                        "Name": "Tuesday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:00"
                        }]
                    }, {
                        "Name": "Wednesday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:00"
                        }]
                    }, {
                        "Name": "Thursday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:00"
                        }]
                    }, {
                        "Name": "Friday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:00"
                        }]
                    }, {
                        "Name": "Saturday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "13:00"
                        }]
                    }]
                }
            },
            "ContactInfo": [{
                "ContactType": "Phone",
                "ContactContent": "+44-1937835809"
            }, {
                "ContactType": "Fax",
                "ContactContent": "+44-1937835674"
            }],
            "PostalAddress": {
                "AddressLine": ["HALIFAX BRANCH 24 BRIDGE STREET"],
                "TownName": "TADCASTER",
                "CountrySubDivision": ["NORTH YORKSHIRE"],
                "Country": "GB",
                "PostCode": "LS24 9AL",
                "GeoLocation": {
                    "GeographicCoordinates": {
                        "Latitude": "53.884262",
                        "Longitude": "-1.261096"
                    }
                }
            }
        }, {
            "Identification": "11801600",
            "SequenceNumber": "00",
            "Name": "WALTON VALE",
            "Type": "Physical",
            "CustomerSegment": ["Personal"],
            "Accessibility": ["WheelchairAccess"],
            "OtherServiceAndFacility": [{
                "Code": "ATMB",
                "Name": "ATMAtBranch",
                "Description": "ATMAtBranch"
            }],
            "Availability": {
                "StandardAvailability": {
                    "Day": [{
                        "Name": "Monday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "16:30"
                        }]
                    }, {
                        "Name": "Tuesday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "16:30"
                        }]
                    }, {
                        "Name": "Wednesday",
                        "OpeningHours": [{
                            "OpeningTime": "09:30",
                            "ClosingTime": "16:30"
                        }]
                    }, {
                        "Name": "Thursday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "16:30"
                        }]
                    }, {
                        "Name": "Friday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "16:30"
                        }]
                    }, {
                        "Name": "Saturday",
                        "OpeningHours": [{
                            "OpeningTime": "09:00",
                            "ClosingTime": "13:00"
                        }]
                    }]
                }
            },
            "ContactInfo": [{
                "ContactType": "Phone",
                "ContactContent": "+44-1512306001"
            }, {
                "ContactType": "Fax",
                "ContactContent": "+44-1515237490"
            }],
            "PostalAddress": {
                "AddressLine": ["HALIFAX BRANCH 78-80 WALTON VALE"],
                "TownName": "LIVERPOOL",
                "CountrySubDivision": ["MERSEYSIDE"],
                "Country": "GB",
                "PostCode": "L9 2BU",
                "GeoLocation": {
                    "GeographicCoordinates": {
                        "Latitude": "53.463007",
                        "Longitude": "-2.959379"
                    }
                }
            }
        }]
    ];
    beforeEach(() => {
        pipe = new SearchFilterPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return []', () => {
        expect(pipe.transform([], 'LIVERPOOL')).toEqual([]);
    });

    it('should return item if value is null', () => {
        expect(pipe.transform(item, null)).toEqual(item);
    });
});
