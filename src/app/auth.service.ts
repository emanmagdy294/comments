import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>
  id: string = ''

  constructor(private _AngularFireAuth: AngularFireAuth, private _HttpClientModule: HttpClientModule) {
    this.user = _AngularFireAuth.user
   }
  signup(email: any, password: any) {
    return this._AngularFireAuth.createUserWithEmailAndPassword(email, password)
  }
  login(email: any, password: any) {
    return this._AngularFireAuth.signInWithEmailAndPassword(email, password)
  }
  logout() {
    return this._AngularFireAuth.signOut()
  }
}

