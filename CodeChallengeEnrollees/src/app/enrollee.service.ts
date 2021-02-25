import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  private baseUrl = 'http://localhost:8080/enrollees';

  constructor(private http: HttpClient) { }

  getEnrollee(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
                    .pipe(catchError(this.errorHandler))
                    ;
  }

  updateEnrollee(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
                    .pipe(catchError(this.errorHandler))
                    ;
  }

  getEnrolleesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
                    .pipe(catchError(this.errorHandler))
                    ;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server has thrown an error');
  }
}
