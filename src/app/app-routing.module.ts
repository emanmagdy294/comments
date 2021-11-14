import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { SigninComponent } from './signin/signin.component';
import { GuardService } from './guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'note', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent  },
  { path: 'note', component: NotesComponent, canActivate: [GuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
