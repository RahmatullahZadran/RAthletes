import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FirestoreDataComponent } from './firestore-data/firestore-data.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { BookingModalComponent } from './booking-modal/booking-modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, FirestoreDataComponent,AngularFirestoreModule,AngularFireModule,BookingModalComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'Rathelete';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}


