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
  showBookingModal: boolean = false;
  showCelebration: boolean = false;

  

  trainerExercises: Exercise[] = []; // Array to store legs exercises
  isLoading = true;
  errorMessage = '';

  constructor(private exerciseService: ExerciseService,
    private confettiService: ConfettiService
  ) { }

  ngOnInit() {
    this.exerciseService.getExercises()
      .pipe(
        catchError((error) => {
          console.error('Error fetching legs exercises:', error);
          this.errorMessage = 'Failed to fetch legs exercises. Please try again later.';
          this.isLoading = false;
          return throwError(error);
        })
      )
      .subscribe((response: any[]) => {
        if (response.length === 1 && Array.isArray(response[0].exercises)) {
          // Accessing the exercises array directly from the response
          this.trainerExercises = response[0].exercises.filter((exercise: Exercise) => exercise.category === 'Trainer');
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
  handleModalClose() {
    this.showBookingModal = false;
  }
}
