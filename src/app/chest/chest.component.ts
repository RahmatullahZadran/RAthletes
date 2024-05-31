import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-chest',
  styleUrls: ['./chest.component.scss'],
  templateUrl: './chest.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ChestComponent implements OnInit {
  chestExercises: Exercise[] = []; // Array to store chest exercises

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    const url = 'http://localhost:3000/exercises'; // URL for fetching exercises
    const params = { page: 0, pageSize: 10, category: 'Chest' }; // Include default pagination parameters

    this.exerciseService
      .getExercises(url, params) // Pass both URL and params
      .pipe(
        catchError((error) => {
          console.error('Error fetching chest exercises:', error);
          return throwError('Failed to fetch chest exercises. Please try again later.');
        })
      )
      .subscribe((response: any) => {
        console.log(response); // Log the response to see its structure
        if (Array.isArray(response.exercises)) {
          // Filter exercises to include only those with category "Chest"
          this.chestExercises = response.exercises;
        } else {
          console.error('Invalid response format. Expected an array of exercises.');
        }
      });
  }  
}
