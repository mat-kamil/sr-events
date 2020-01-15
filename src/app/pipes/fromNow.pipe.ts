import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'fromNow',
  pure: false
})
export class FromNowPipe implements PipeTransform {
  transform(date: any, format = 'fullDate'): any {
    if (!date || !moment(date).isValid()) {
      return date;
    }
    
    return moment(date).fromNow();
  }
}
