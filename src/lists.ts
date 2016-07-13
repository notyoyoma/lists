import { Component }                            from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';
import { List }                                 from './list';

@Component({
  selector: 'app',
  template: `
  <ul>
    <li *ngFor="let list of lists | async">
      <list [list]="list"></list>
    </li>
  </ul>
  <input #newListName placeholder="New List Name">
  <button (click)="newList(newListName.value)">+</button>
  `,
  directives: [List]
})

export class Lists {
  lists: FirebaseListObservable<any>;
  af: AngularFire;
  constructor(af: AngularFire) {
    this.af = af;
    this.lists = af.database.list('/lists');
  }

  newList(name: string) {
    if (name.length > 0) {
      this.lists.push({ name: name });
    }
  }
}
