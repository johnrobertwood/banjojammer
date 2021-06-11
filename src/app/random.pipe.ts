import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  transform(responseArr: any) {
    return responseArr.sort(() => Math.random() - 0.5);
  }
}
