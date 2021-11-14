import { UserservicesService } from './../userservices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errormessage: string = '';
  userID:any = ""
  constructor(private as: AuthService, private router: Router, private _UsersService:UserservicesService) { }

  ngOnInit(): void {
  }
  login(form: any) {
    let data = form.value
    this.as.login(data.email, data.password).then(result => {
      this.router.navigate(['/note']);
      this.userID = result.user?.uid;
      console.log(this.userID)
      localStorage.setItem('userid', this.userID )
      console.log(result)
    }).catch(err => {
        this.errormessage = err.message
      });
 }
}
