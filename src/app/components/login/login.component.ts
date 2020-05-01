import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  success = '';
  userForm = new FormGroup({
    username: new FormControl('pepe', Validators.required),
    password: new FormControl('12345')
  });


  constructor(
    private apiService: UserService
  ) {}

  ngOnInit(): void {
  }

  click_login() {
    this.error = '';
    this.success = '';
    this.apiService.login(this.userForm.value).then(
      res => {
      console.log(res);
      this.success = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  validarFormular() {}

}
