import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Role, User } from '../types';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users : User[] = []
  roles: Role[] = [Role.User, Role.Admin]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.usersDB;
  }

}
