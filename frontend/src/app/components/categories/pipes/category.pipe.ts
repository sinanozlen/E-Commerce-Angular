import { Pipe, PipeTransform } from '@angular/core';
import { CategoryModel } from '../models/category.models';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: CategoryModel[], search: string): CategoryModel[] {
    if(search == "")
    return value;

    return value.filter(p=> p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
