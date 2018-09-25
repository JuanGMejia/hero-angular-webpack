import 'zone.js/dist/zone';
import { platformBrowserDynamic } 
from '@angular/platform-browser-dynamic';
import './main.scss';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);