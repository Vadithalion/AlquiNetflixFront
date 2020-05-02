import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    userForm = new FormGroup({
    username: new FormControl('pepe', Validators.required),
    password: new FormControl('12345'),
    email: new FormControl('pepe@gmail.com')
  });

  constructor(
    private apiService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {}

    click_register() {
      console.log(this.userForm.value);
      this.apiService.register(this.userForm.value).then(
        res => {
          this.router.navigateByUrl('/login');
        },
        err => {
          console.error(err);
        }
      );

    // showPass() {
    //     const x = (document.getElementById('inputPassword') as HTMLInputElement);

    //     if (x.type === 'password') {
    //       x.type = 'text';
    //     } else {
    //       x.type = 'password';
    //     }
    //   }

}
}