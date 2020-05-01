import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {NgForm} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(public userService: UserService, private sanitizer: DomSanitizer ) { }
  user = []

  ngOnInit(): void {
  
  }

}
