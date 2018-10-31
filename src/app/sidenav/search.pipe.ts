import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  transform(clientList, value) {
    if (value === undefined) { return clientList; }
    return clientList.filter(client => {
      return client.general.firstName.toLowerCase().includes(value);
    });
  }
}
