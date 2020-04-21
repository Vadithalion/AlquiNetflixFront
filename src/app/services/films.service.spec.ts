import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books;
  constructor(public httpClient: HttpClient, public router: Router) { }


  getGenres(): Observable<any> {
    return this.httpClient.get('http://localhost:3306/');
  }
}