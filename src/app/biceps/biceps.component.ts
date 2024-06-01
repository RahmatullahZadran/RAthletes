import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-biceps',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './biceps.component.html',
  styleUrl: './biceps.component.scss'
})
export class BicepsComponent implements OnInit {
  bicepsExercises: Exercise[] = []; // Array to store biceps exercises

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    const url = 'http://localhost:3000/exercises'; // URL for fetching exercises
    const params = { page: 0, pageSize: 1000, category: 'Biceps' }; // Include default pagination parameters

    this.exerciseService
      .getExercises(url, params) // Pass both URL and params
      .pipe(
        catchError((error) => {
          console.error('Error fetching biceps exercises:', error);
          return throwError('Failed to fetch biceps exercises. Please try again later.');
        })
      )
      .subscribe((response: any) => {
        console.log(response); // Log the response to see its structure
        if (Array.isArray(response.exercises)) {
          // Filter exercises to include only those with category "biceps"
          this.bicepsExercises = response.exercises;
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }  
}
