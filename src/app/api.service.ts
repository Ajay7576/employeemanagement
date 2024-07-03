import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // GET request
  getData<T>(endpoint: string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  // POST request
  postData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>(`${this.apiUrl}/${endpoint}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  // PUT request
  updateData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .put<any>(`${this.apiUrl}/${endpoint}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  // DELETE request
  deleteData(endpoint: string): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }
}
