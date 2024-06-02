import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  trainerExercises: Exercise[] = []; 
  constructor(private exerciseService: ExerciseService) { }

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
}

