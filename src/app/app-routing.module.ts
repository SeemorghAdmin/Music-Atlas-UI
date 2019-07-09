import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AfzodanComponent } from './home/modiritkarbaran/afzodan.component';
import { AfzodanGozaresh } from './home/modiriatgozaresh/afzodangozaresh.component';
import { PersonComponent } from './home/person/listperson.component';
import { PersonEdit } from './home/person/personedit.component';
import { UploadComponent } from './home/upload/upload.component';
import { GozareshComponent } from './home/modiriatgozaresh/listgozaresh.component';




const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },


  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {
    path: 'home', component:HomeComponent,
     children: [
    {path: 'afzodan', component: AfzodanComponent},
    {path: 'afzodangozaresh', component: AfzodanGozaresh },
    { path: 'listperson', component: PersonComponent },
    {path: 'personedit/:id', component: PersonEdit},
    {path: 'upload', component : UploadComponent},
    {path: 'listgozaresh', component: GozareshComponent}
  ],
  
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
