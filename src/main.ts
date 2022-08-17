import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Amplify from 'aws-amplify';
//@ts-ignore
import aws_exports from './aws-exports';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

Amplify.configure(aws_exports);

platformBrowserDynamic().bootstrapModule(AppModule);
