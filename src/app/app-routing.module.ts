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
import { DetialsComponent } from './home/modiriatgozaresh/detials.component';
import { SendMessage } from './home/modiriatmessage/message.component';
import { AddTypeMusicLocal } from './home/managereport/addtypemusiclocal.component';
import { ListTypeMusicLocal } from './home/managereport/listtypemusicalocl.component';
import { EditTypeMusicLocal } from './home/managereport/edittypemusiclocal.component';
import { InstrumextsType } from './home/managereport/instrumexts.component';
import { AddInstrumexts } from './home/managereport/addinstrumexts.component';
import { EditInstrumexts } from './home/managereport/editinstrumexts.component';


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
    {path: 'listgozaresh', component: GozareshComponent},
    {path: 'detialsgozaresh/:id', component: DetialsComponent},
    {path: 'sendmessage', component: SendMessage},
    {path: 'addtypemusiclocal', component: AddTypeMusicLocal},
    {path: 'listtypemusiclocal', component: ListTypeMusicLocal},
    {path: 'edittypemusiclocal/:id', component: EditTypeMusicLocal},
    {path: 'instrumexts', component: InstrumextsType},
    {path: 'addinstrumexts', component: AddInstrumexts},
    {path: 'editinstrumexts', component: EditInstrumexts},
    {path: 'editinstrumexts/:id', component: EditInstrumexts},
  ],
  
},

{path:'listgozaresh',component:GozareshComponent,canActivate:[AuthGuard]},
{
  path: 'listgozaresh', component:GozareshComponent,
   children: [
  {path: 'detialsgozaresh/:id', component: DetialsComponent}
],

},

{path:'listtypemusiclocal',component:ListTypeMusicLocal,canActivate:[AuthGuard]},
{
  path: 'listtypemusiclocal', component:ListTypeMusicLocal,
   children: [
  {path: 'edittypemusiclocal/:id', component: EditTypeMusicLocal}
],

},

{path:'editinstrumexts',component:ListTypeMusicLocal,canActivate:[AuthGuard]},
{
  path: 'editinstrumexts', component:EditInstrumexts,
   children: [
  {path: 'edittypemusiclocal/:id', component: EditInstrumexts}
],

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
