import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteApiService {
  baseURL?: "https://routeegypt.herokuapp.com/getUserNotes";
  constructor(private _httpclient:HttpClient) { }

  getAllNotes(data:any):Observable<any>
  {
  return  this._httpclient.post(this.baseURL +'getUserNotes' , data)
  }

}
