import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FirestoreDataComponent } from './firestore-data/firestore-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, FirestoreDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'Rathelete';
}