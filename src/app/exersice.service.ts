import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private readonly exercisesUrl = 'assets/exercises.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getChestExercises(): Observable<any> {
    return this.http.get<any>(this.exercisesUrl).pipe(
      map(data => data.chest)
    );
  }
}
