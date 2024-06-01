import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-triceps',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './triceps.component.html',
  styleUrl: './triceps.component.scss'
})
export class TricepsComponent implements OnInit {
  tricepsExercises: Exercise[] = []; // Array to store triceps exercises

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    const url = 'http://localhost:3000/exercises'; // URL for fetching exercises
    const params = { page: 0, pageSize: 1000, category: 'Triceps' }; // Include default pagination parameters

    this.exerciseService
      .getExercises(url, params) // Pass both URL and params
      .pipe(
        catchError((error) => {
          console.error('Error fetching triceps exercises:', error);
          return throwError('Failed to fetch triceps exercises. Please try again later.');
        })
      )
      .subscribe((response: any) => {
        console.log(response); // Log the response to see its structure
        if (Array.isArray(response.exercises)) {
          // Filter exercises to include only those with category "triceps"
          this.tricepsExercises = response.exercises;
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }  
}
  