import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Car } from '../models/Car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filteredText: string): Car[] {
      filteredText = filteredText?filteredText.toLocaleLowerCase():"";
      return filteredText?value.filter((c:Car)=>
        c.description.toLocaleLowerCase().indexOf(filteredText)!==-1):value;
        
  }

}
