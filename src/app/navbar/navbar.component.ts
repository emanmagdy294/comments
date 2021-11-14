import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUser: boolean = false;
  isOpen: boolean = false;
  isAdmin: boolean = false;
  isLogin: boolean = false;
  username: string = "";
  constructor(private as:AuthService , private router:Router , private service:UserservicesService) { }

  ngOnInit(){
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.as.id = user.uid;
      }
      else {
        this.isUser = false;
        this.as.id = ''
      }

      console.log(user)
      // this.service.getUserName().subscribe((res: any) => {
      //   console.log(res)
      //   this.username = res.name;
      // })
    })

  }
  logout()
  {
    this.as.logout()
    this.router.navigate(['/login'])
  }
}
