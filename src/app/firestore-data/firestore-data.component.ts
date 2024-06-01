import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore-service';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
// import { provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';


@Component({
  selector: 'app-firestore-data',
  standalone: true,
  imports: [CommonModule,AngularFirestoreModule,AngularFireModule, FirestoreDataComponent,],
  template: `
    <div *ngFor="let item of items$ | async">
      {{ item.name }}
    </div>
    <button (click)="addItem()">Add Item</button>
  `
})


export class FirestoreDataComponent implements OnInit {
  items$!: Observable<any[]>;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.items$ = this.firestoreService.getItems();
  }

  addItem() {
    const newItem = { name: 'New Item' };
    this.firestoreService.addItem(newItem);
  }
}
