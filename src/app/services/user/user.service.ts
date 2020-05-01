import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: Object;


  constructor(private http: HttpClient) { }

  //USER BY NAME
  getUserName(){
    return this.http.get(environment.APIROOT + '/users/id/1');
  }

}