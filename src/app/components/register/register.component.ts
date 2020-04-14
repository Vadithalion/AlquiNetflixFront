import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    }
    showPass() {
        const x = (document.getElementById('inputPassword') as HTMLInputElement);

        if (x.type === 'password') {
          console.log(x.type);
          x.type = 'text';
        } else {
          console.log(x.type);
          x.type = 'password';
        }
      }

}
