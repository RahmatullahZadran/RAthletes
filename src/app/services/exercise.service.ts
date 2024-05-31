import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Exercise, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private apiService: ApiService) { }

  getExercises(url: string, params: PaginationParams): Observable<Exercise[]> {
    return this.apiService.get<Exercise[]>(url, {
      params,
      responseType: 'json'
    });
  }
}
