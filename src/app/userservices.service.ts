import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private fs: AngularFirestore , private _AuthService:AuthService) { }
  userId!: any;
  username:string = ""
  addNewUser(id: any, name: any) {
    return this.fs.doc('users/' + id).set({
      name,
    })
  }
  getUserName() {
    this.userId = JSON.stringify(localStorage.getItem("userId"))
    console.log(this.userId)
    return this.fs.doc('users/' + this.userId).valueChanges()
  }

  getUserData(id: any) {
    return this.fs.doc('notes/' + id).valueChanges();
    //console.log(this.fs.doc('notes/'))
  }
  addData(id:any , data:any) {
    return this.fs.doc('notes/' + id).set({
      notes: data,
    })
  }
  delete(id:any) {
    return this.fs.doc('notes/'+id).delete()
  }
 

  formatDate(date:any){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
