export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import {
    HeroDispatchers,
    HeroSelectors,
} from './services';

export const services = [
  HeroDispatchers,
  HeroSelectors,
];
