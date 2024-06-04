// abs.component.ts
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../services/exersices.server';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AbsComponent implements OnInit {
  absExercises: Exercise[] = []; // Array to store abs exercises
  isLoading = true;
  errorMessage = '';

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.getExercises()
      .pipe(
        catchError((error) => {
          console.error('Error fetching abs exercises:', error);
          this.errorMessage = 'Failed to fetch abs exercises. Please try again later.';
          this.isLoading = false;
          return throwError(error);
        })
      )
      .subscribe((response: any[]) => {
        if (response.length === 1 && Array.isArray(response[0].exercises)) {
          // Accessing the exercises array directly from the response
          this.absExercises = response[0].exercises.filter((exercise: Exercise) => exercise.category === 'Abs');
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }
}
