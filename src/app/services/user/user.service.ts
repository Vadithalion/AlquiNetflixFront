import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: Object;

  baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  
  async register(body) {
    const url = this.baseUrl + '/users/newuser';
    try {
        console.log(url, body);
        const data = await this.http.post(url, body).toPromise();
        // localStorage.setItem('userData', JSON.stringify(data));
        return Promise.resolve('Todo ok!');
    } catch (err) {
        return Promise.reject('todo mal!');
    }
}

async login(body) {
    const url = this.baseUrl + '/users/login';
    try {
        const data: any = await this.http.post(url, body).toPromise();
        localStorage.setItem('user-token', JSON.stringify(data));
        return Promise.resolve(data.message);
    } catch (err) {
        console.log(err);
        return Promise.reject(err.error.message);
    }
}

}