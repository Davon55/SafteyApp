import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  @Input() user: User;
  selectedUser?: User;
  onEditUser?: User;
  constructor(private router: Router){}



  ngOnInit(): void {
    
    this.selectedUser = null;
  }

  editUser(user: User)
  {
    this.router.navigate([`/user/${this.user.FirstName}/${this.user.Id}`]);
    this.onEditUser = user;
  }

  public onSelectedUser(user: User)
  {
    this.selectedUser = user;
  }


}
