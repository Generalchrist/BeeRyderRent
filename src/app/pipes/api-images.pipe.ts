import { Pipe, PipeTransform } from '@angular/core';
import { backendUrl } from '../services/service-constants.service';

@Pipe({
  name: 'apiImages'
})
export class ApiImagesPipe implements PipeTransform {

  transform(value: string): string {
    return  backendUrl + value; 
  }

}
