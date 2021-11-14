import { UserservicesService } from './../userservices.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Interface } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errormessage: string = ''
  constructor(private _auth:AuthService , private us:UserservicesService , private router:Router) { }
  userID:any = ""
  ngOnInit(): void {
    this.us.getUserName().subscribe(res => {
      console.log(res)
    })
  }

  signup(form: any) {
    let data: Interface = form.value
    this._auth.signup(data.email,data.password)
      .then(result => {
        this.errormessage = '',
          this.us.addNewUser(result.user?.uid, data.name).then(() => {
            this.router.navigate(['/login'])
          })
        this.userID = result.user?.uid;
        localStorage.setItem('userId', JSON.parse(this.userID))
      })
      .catch(err => {
        this.errormessage = err.message
      });

  }

}
