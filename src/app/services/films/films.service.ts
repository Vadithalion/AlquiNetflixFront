import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
allFilms = [];

  constructor(private http: HttpClient) { }

  // GET all films
  getAllFilms(){
    return this.http.get<any>(environment.APIROOT + '/films/');
  }
}
