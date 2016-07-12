import { bootstrap }                            from '@angular/platform-browser-dynamic';
import { enableProdMode }                       from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Lists }                                from './lists';
import { FIREBASE_PROVIDERS, defaultFirebase }  from 'angularfire2';

if (process.env.ENV === 'production') {
  enableProdMode();
}

let firebaseConfig = require('../firebase.config.json');

// Run the app!
bootstrap(Lists, [
  FIREBASE_PROVIDERS,
  defaultFirebase(firebaseConfig),
  disableDeprecatedForms(),
  provideForms()
]);
