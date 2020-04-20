import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeService {
BASE = 'http://localhost:3306/';
  constructor(
    private http: HttpClient
  ) { }

  GetUserByEmail(email){
    return this.http.get(`${this.BASE} + 'users/');
  }
}