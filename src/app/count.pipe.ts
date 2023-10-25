import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
  standalone: true,
})
export class CountPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return `${value} [${value.length}]`;
    // return value;
  }
}
