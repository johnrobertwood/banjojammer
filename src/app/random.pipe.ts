/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgIterable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(responseArr: any): NgIterable<any> | null | undefined {
    return responseArr.sort(() => Math.random() - 0.5);
  }
}
