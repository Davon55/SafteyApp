import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute } from '@angular/router';
import { SafteyServiceService } from '../saftey-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

users: User[];
selectedUser?: User;
constructor(private route: ActivatedRoute, private service: SafteyServiceService){}

  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      this.service.getUsers((users: User[]) => {
        this.users = users;
        this.selectedUser = null;
      })
    })
    
  }

  public onSelectedUser(user: User)
  {
    this.selectedUser = user;
  }

}
