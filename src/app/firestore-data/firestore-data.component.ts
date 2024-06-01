// firestore-data.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-firestore-data',
  templateUrl: './firestore-data.component.html',
  styleUrls: ['./firestore-data.component.scss'],
  standalone: true,
  imports: [CommonModule],

})
export class FirestoreDataComponent implements OnInit {
  items$!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.items$ = this.firestore.collection('items').valueChanges();
  }
}
