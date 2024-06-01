import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {AngularFireModule} from '@angular/fire/compat';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Method to get a list of items from the Firestore collection
  getItems(): Observable<any[]> {
    return this.firestore.collection('items').valueChanges();
  }

  // Method to add an item to the Firestore collection
  addItem(item: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`items/${id}`).set(item);
  }

  // Method to update an item in the Firestore collection
  updateItem(id: string, item: any): Promise<void> {
    return this.firestore.doc(`items/${id}`).update(item);
  }

  // Method to delete an item from the Firestore collection
  deleteItem(id: string): Promise<void> {
    return this.firestore.doc(`items/${id}`).delete();
  }
}
