import { Component, OnInit } from '@angular/core';

import { UserservicesService } from '../userservices.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit  {
  constructor(private service: UserservicesService) { }
  count: any;
  allNotes:any[] = [];
  note = {
    title: "user name",
    desc:""
  }
  userId: any = "";
  today = Date.now();
  fixedTimezone = this.today;
  ngOnInit(): void {
    this.userId = JSON.stringify(localStorage.getItem("userid"))
    this.service.getUserData(this.userId).subscribe((res: any) => {
      this.allNotes = res.notes;
      this.count = this.allNotes.length;
      this.allNotes.splice(5);
    });

  }


  showComments(){
    this.userId = JSON.stringify(localStorage.getItem("userid"))
    this.service.getUserData(this.userId).subscribe((res: any) => {
      this.allNotes = res.notes;
    })
}
  AddNote() {
    console.log(this.userId)
    this.allNotes.unshift(this.note)
    this.service.addData(this.userId , this.allNotes);
    this.note =  {
      title: "user name",
      desc: ""
    }
    this.today
    this.fixedTimezone = this.today;
  }
  delete(index: any) {
    this.allNotes.splice(index, 1)
    this.service.addData(this.userId, this.allNotes);
  }
}

