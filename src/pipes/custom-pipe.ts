import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) return [];
        if (!value) return items;
    
        let filteredData: any[] = []; 

        // loop through the object,
        // pushing values to the return array
        Object.keys(items).forEach(key => {
            let keyValue = items[key];
            if( keyValue.PostalAddress.TownName != null && keyValue.PostalAddress.TownName.indexOf((value.toUpperCase())) !== -1){
                filteredData.push(keyValue);
            }
        }); 
        return filteredData;
    }
}