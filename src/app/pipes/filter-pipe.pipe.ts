import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Car } from '../models/Car';
import { CarDetail } from '../models/CarDetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filteredText: string): CarDetail[] {
      filteredText = filteredText?filteredText.toLocaleLowerCase():"";
      return filteredText?value.filter((c:CarDetail)=>
        c.model.toLocaleLowerCase().indexOf(filteredText)!==-1):value;
        
  }

}
