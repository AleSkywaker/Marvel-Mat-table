import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {
  transform(value: any, name: string): any {
    let object = {} as any;
    let newArray = [] as any;
    value.forEach((hero: any) => {
      if (hero[name] in object) {
        object[hero[name]]++;
      } else {
        object[hero[name]] = 1;
      }
    });
    Object.entries(object).forEach(([key, value]) => {
      newArray.push({
        name: key,
        value: value,
      });
    });
    return newArray;
  }
}
