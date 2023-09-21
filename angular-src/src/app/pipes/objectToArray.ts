import { NgIterable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {
  // The object parameter represents the values of the properties or index.
  transform = (objects: any = []) => {
    return Object.values(objects) as NgIterable<any>;
  }
}