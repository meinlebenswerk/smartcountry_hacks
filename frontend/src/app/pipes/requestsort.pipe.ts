import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestsort'
})
export class RequestsortPipe implements PipeTransform {

  transform(array: any[]): any {
    if(!array || array === undefined || array.length === 0) return null;

    array.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
  }

}
