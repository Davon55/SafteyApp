import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { SafteyServiceService } from '../saftey-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
@Input() user: User;
@Input() editUser: User;



  
 

  constructor(private service: SafteyServiceService, private route: ActivatedRoute, private location: Location){}

  ngOnInit() {
   const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      this.service.getUser(id, params.get('firstName'),(user: User) => {
        this.user = user;
      })
    })
    
  }

  goBack()
  {
    this.location.back();
  }
save()
{

 this.service.updateUser(this.user, (user: User) => {
  this.user = user;
  
 })
  
}

}
