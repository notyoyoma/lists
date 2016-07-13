import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable  }  from 'angularfire2';

@Component({
  selector: 'list',
  template: `
    <h1>{{ list.name }}</h1>
    <ul>
      <li>
        <input #newItemName placeholder="New Item">
        <input #newItemLink placeholder="Link">
        <button (click)="newItem(newItemName.value, newItemLink.value)">+</button>
      </li>
      <li *ngFor="let item of items | async">
        <a [href]="item.url">{{ item.name }}</a>
      </li>
    </ul>
  `,
})

export class List {
  af: AngularFire;
  items: FirebaseListObservable<any>;
  @Input() list: any;

  constructor(af: AngularFire) {
    this.af = af;
  }

  ngOnInit() {
    this.items = this.af.database.list('/lists/'+this.list['$key']+'/items');
  }

  newItem(name: string, url: string) {
    this.items.push({ name: name, url: url});
  }

}
