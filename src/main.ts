import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const domLoaded = new Promise(resolve => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      resolve();
    }, {
        capture: true,
        once: true,
        passive: true
      });
  }
});

domLoaded.then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
