// legs.component.ts
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../services/exersices.server';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LegsComponent implements OnInit {
  legsExercises: Exercise[] = []; // Array to store legs exercises
  isLoading = true;
  errorMessage = '';

  constructor(private exerciseService: ExerciseService) { }

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
          this.legsExercises = response[0].exercises.filter((exercise: Exercise) => exercise.category === 'Legs');
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }
}
