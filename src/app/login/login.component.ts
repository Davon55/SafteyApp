import { Component, OnInit } from '@angular/core';
import { SafteyServiceService } from '../saftey-service.service';
import { User } from '../models/User';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


user?: User;

constructor(private service: SafteyServiceService, private route: ActivatedRoute, private router: Router) {}

username = '';
password = '';

userForm = new FormGroup({
username: new FormControl(''),
password: new FormControl('')
})


ngOnInit(): void {

}


goHome()
{
  this.router.navigate(['']);
}


  onSubmit()
  {
    this.service.login(this.username, this.password, ((user: User) => {
          if(user.UserName == this.username && user.Password == this.password)
          console.log('success');
    }))
      
  }

}
