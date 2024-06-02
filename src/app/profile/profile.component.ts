import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import { CommonModule } from '@angular/common';
import { ConfettiService } from '../confety.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../booking-modal/booking-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, BookingModalComponent],
})
export class ProfileComponent implements OnInit {
  trainerExercises: Exercise[] = [];
  showBookingModal: boolean = false;
  showCelebration: boolean = false;

  constructor(
    private exerciseService: ExerciseService,
    private confettiService: ConfettiService 
  ) { }

  ngOnInit() {
    const url = 'http://localhost:3000/exercises'; // URL for fetching exercises
    const params = { page: 0, pageSize: 1000, category: 'Trainer' }; // Include default pagination parameters

    this.exerciseService
      .getExercises(url, params) // Pass both URL and params
      .pipe(
        catchError((error) => {
          console.error('Error fetching Trainer:', error);
          return throwError('Failed to fetch trainer exercises. Please try again later.');
        })
      )
      .subscribe((response: any) => {
        console.log(response); // Log the response to see its structure
        if (Array.isArray(response.exercises)) {
          // Filter exercises to include only those with category "trainer"
          this.trainerExercises = response.exercises;
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }

  bookLesson(exercise: any) {
    // Perform booking logic here
    // For example, you can show the booking modal
    this.showBookingModal = true;

    // Check if the exercise name is "Rahmatullah Zadran"
    if (exercise.name === 'Rahmatullah Zadran') {
      this.showCelebration = true;
      this.confettiService.launchConfetti(); // Trigger confetti
    } else {
      this.showCelebration = false;
    }
  }

  openBookingModal() {
    this.showBookingModal = true;
  }

  handleBookingConfirmation(bookingDetails: { firstName: string, lastName: string, date: string }) {
    // Handle the booking submission logic here
    console.log('Booking details:', bookingDetails);

    // Close the modal
    this.showBookingModal = false;
  }
}
