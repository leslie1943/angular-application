import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    console.info(value);
    console.info(limit);
    return value.substr(0, limit || 10) + '...';
  }
}
