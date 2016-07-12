import { Component }    from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
  selector: 'app',
  template: `
  <ul>
    <li *ngFor="let list of lists | async">
      <h1>{{ list.name }}</h1>
      <ul>
        <li *ngFor="let item of list.items">
          <a [href]="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
  `,
})

export class Lists {
  lists: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.lists = af.database.list('/lists');
  }
}
