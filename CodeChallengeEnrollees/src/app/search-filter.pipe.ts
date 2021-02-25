import { Pipe, PipeTransform } from '@angular/core';
import { Enrollee } from './enrollee';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(Enrollees: Enrollee[], searchValue: string): Enrollee[] {
    if (!Enrollees || !searchValue) {
      return Enrollees;
    }

    const letters = /^[A-Za-z]+$/;
    if (searchValue.match(letters)) {
    return Enrollees.filter(enrollee =>
      enrollee.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      enrollee.active.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    }
  }

}
