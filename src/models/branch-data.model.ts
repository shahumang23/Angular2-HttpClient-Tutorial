import { PostalAddress } from './postalAddress.model';

export interface BranchData {
    Identification: number;
    PostalAddress: Array<PostalAddress>;
    ContactInfo: Array<any>;
    Name: string;
}