export interface PostalAddress {
    AddressLine: string;
    TownName: string;
    PostCode: string;
    CountrySubDivision?: Array<any>;
    Country: boolean;
}