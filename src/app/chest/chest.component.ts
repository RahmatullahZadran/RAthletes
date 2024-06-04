import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../services/exersices.server';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ChestComponent implements OnInit {
  chestExercises: Exercise[] = []; // Array to store chest exercises
  isLoading = true;
  errorMessage = '';

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.getExercises()
      .pipe(
        catchError((error) => {
          console.error('Error fetching chest exercises:', error);
          this.errorMessage = 'Failed to fetch chest exercises. Please try again later.';
          this.isLoading = false;
          return throwError(error);
        })
      )
      .subscribe((response: any[]) => {
        if (response.length === 1 && Array.isArray(response[0].exercises)) {
          // Accessing the exercises array directly from the response
          this.chestExercises = response[0].exercises.filter((exercise: Exercise) => exercise.category === 'Chest');
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }
}
