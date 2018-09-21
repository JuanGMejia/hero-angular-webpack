export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import {
    HeroDispatchers,
    HeroSelectors,
    HeroesService
} from './services';

export const services = [
  HeroDispatchers,
  HeroSelectors,
  HeroesService
];
