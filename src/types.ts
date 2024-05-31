
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpContext } from '@angular/common/http';
export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  gifUrl: string;
  rating: number;
}

export interface Exercises {   
  chest: Exercise[];
  back: Exercise[];
  shoulders: Exercise[];
  legs: Exercise[];
  arms: Exercise[];
  core: Exercise[];
  triceps: Exercise[];
  biceps: Exercise[];
  abs: Exercise[];
  total: number;
  page: number;
  PerPage: number;
  totalPages: number;
}

export interface PaginationParams {
[prams: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  page: number;
  pageSize: number;
}