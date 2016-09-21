import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoris'
})
export class FavorisPipe implements PipeTransform {

  transform(value: any, conditions: {[field: string]: any}): any {
    return value.filter(item => {
            for (let field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
  }

}
