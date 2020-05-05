import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  constructor(private http: HttpClient) { }

  // GET all films
  getAllFilms(){
    return this.http.get<any>(environment.APIROOT + '/films/');
  }

  getFilmByName(name: string){
    return this.http.get<any>(environment.APIROOT + '/films/title/' + name);
  }
}
