import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

// Routable animations
export const slideInAnimation = trigger('routeAnimation', [
  transition('technique <=> favorites', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: '.5' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1000ms ease-out', style({ opacity: '.5' }))]),
      query(':enter', [animate('1000ms ease-out', style({ opacity: '.5' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
