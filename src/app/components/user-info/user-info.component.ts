import { Component, OnInit } from '@angular/core';
// import { UsersService} from '../../services/users.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  email = '';
  firstName = '';
  lastName = '';
  password = '';
  orders = '';

  constructor(
    // private usersService: UsersService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // ShowUser(this.email){
    //   this.usersService.ObtenerPoke().subscribe((res: any) => {
    //     this.email = res.results;
    //     console.log(res);
    //   });
    // }
  }

}
