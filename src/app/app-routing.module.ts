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
import { HomePageComponent } from './homepage.component';
import { DetialsInstrumextsComponent } from './home/managereport/detialsinstrumexts.component';
import { TypeInstrumextsType } from './home/managetypeinstrumexts/typeinstrumexts.component';
import { AddTypeInstrumexts } from './home/managetypeinstrumexts/addtypeinstrumexts.component';
import { EditTypeInstrumexts } from './home/managetypeinstrumexts/edittypeinstrumexts.component';
import { ListUserTaedNashodeComponent } from './home/manageuser/listusertaednashode.component';
import { ActiveAccountComponent } from './home/activeaccount/activeaccount.component';
import { ActiveTypeInxComponent } from './home/activetypeinstrmexts/activetypeinstrmexts.component';
import { FinalActiveComponent } from './home/activetypeinstrmexts/finalactive.component';
import { TypeAvazComponent } from './home/typeavaz/typeavaz.component';
import { AddTypeAvazComponent } from './home/typeavaz/addtypeavaz.component';
import { ActiveTypeAvazComponent } from './home/activetypeavaz/activetypeavaz.component';
import { TaedTypeInxComponent } from './home/activetypeavaz/taedtypeavaz.component';
import { ListStateComponent } from './home/managestate/liststate.component';
import { AddState } from './home/managestate/addstate.component';
import { Addcity } from './home/managecity/addcity.component';
import { ListCityComponent } from './home/managecity/listcity.component';
import { ListKargahComponent } from './home/managekargah/listkargah.component';
import { TaenKarbaranComponent } from './home/manageuser/taenuserostani.component';
import { ManageUserComponent } from './home/manageuser/manageuser.component';
import { EditUser } from './home/manageuser/edituser.component';
import { ModiryatGozareshComponent } from './home/modiraytgozareshrole6/modiriryatgozaresh.component';
import { MaktabComponent } from './home/modiriatgozareshmakanha/maktab.component';
import { MusicLockComponent } from './home/modiriatgozareshmakanha/musiclock.component';
import { DanceComponent } from './home/modiriatgozareshmakanha/dance.component';
import { AddKargahComponent } from './home/managekargah/kargah.component';
import { DetailInstrumentComponent } from './homepage/detialinstrument.component';
import { UserRoleTowComponent } from './home/manageuser/userroletow.component';
import { UserRoleTherryComponent } from './home/manageuser/userroletherry.component';
import { TaedInstrumentComponent } from './home/manageinstrumrnt/taedinstrument.component';
import { ActiveInstrumentComponent } from './home/manageinstrumrnt/activeinstrument.component';
import { MyPanelComponent } from './home/mypanel/mypanel.component';
import { UserOstanComponent } from './home/manageuser/userostan.component';
import { AuthGuard2 } from './auth/auth.service';
import { AuthGuard3 } from './auth/authuser.service';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  
  { path: 'detialsinstrumexts', component: DetialsInstrumextsComponent },
  { path: 'detialsinstrumexts/:id', component: DetialsInstrumextsComponent },
  { path: 'user', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },


  { path: 'home', component: HomeComponent, canActivate : [AuthGuard] },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'afzodan', component: AfzodanComponent, canActivate: [AuthGuard] },
      { path: 'afzodangozaresh', component: AfzodanGozaresh, canActivate: [AuthGuard] },
      { path: 'listperson', component: PersonComponent, canActivate: [AuthGuard2] },
      { path: 'personedit/:id', component: PersonEdit, canActivate: [AuthGuard2] },
      { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
      { path: 'listgozaresh', component: GozareshComponent, canActivate: [AuthGuard] },
      { path: 'detialsgozaresh/:id', component: DetialsComponent, canActivate: [AuthGuard] },
      { path: 'sendmessage', component: SendMessage, canActivate: [AuthGuard] },
      { path: 'addtypemusiclocal', component: AddTypeMusicLocal, canActivate: [AuthGuard] },
      { path: 'listtypemusiclocal', component: ListTypeMusicLocal, canActivate: [AuthGuard] },
      { path: 'edittypemusiclocal/:id', component: EditTypeMusicLocal, canActivate: [AuthGuard3] },
      // canActivate: [AuthGuard2]
      { path: 'instrumexts', component: InstrumextsType, canActivate: [AuthGuard] },

      { path: 'addinstrumexts', component: AddInstrumexts,  canActivate: [AuthGuard] },
      { path: 'editinstrumexts', component: EditInstrumexts, canActivate: [AuthGuard2] },
      { path: 'editinstrumexts/:id', component: EditInstrumexts, canActivate: [AuthGuard2] },
      { path: 'typeinstrumexts', component: TypeInstrumextsType, canActivate: [AuthGuard] },
      { path: 'addtypeinsttrumexts', component: AddTypeInstrumexts, canActivate: [AuthGuard] },
      { path: 'edittypeinstrumexts/:id', component: EditTypeInstrumexts, canActivate: [AuthGuard] },
      { path: 'listusertaednashode', component: ListUserTaedNashodeComponent, canActivate: [AuthGuard3] },
      { path: 'activeaccount', component: ActiveAccountComponent, canActivate: [AuthGuard3] },
     // { path: 'activetypeinstrmexts', component: ActiveTypeInxComponent },
      { path: 'finalactive', component: FinalActiveComponent, canActivate: [AuthGuard3] },
      { path: 'typeavaz', component: TypeAvazComponent, canActivate: [AuthGuard] },
      { path: 'addtypeavaz', component: AddTypeAvazComponent, canActivate: [AuthGuard] },
      { path: 'activetypeavaz', component: ActiveTypeAvazComponent, canActivate: [AuthGuard3] },
      { path: 'taedtypeavaz', component: TaedTypeInxComponent, canActivate: [AuthGuard3] },
      { path: 'liststate', component: ListStateComponent, canActivate: [AuthGuard] },
      { path: 'addstate', component: AddState, canActivate: [AuthGuard] },
      { path: 'addcity', component: Addcity, canActivate: [AuthGuard] },
      { path: 'listcity', component: ListCityComponent, canActivate: [AuthGuard] },
      { path: 'listkrga', component: ListKargahComponent, canActivate: [AuthGuard] },
      { path: 'taeduserostani', component: TaenKarbaranComponent, canActivate: [AuthGuard3] },
      { path: 'manageuser', component: ManageUserComponent, canActivate: [AuthGuard] },
      { path: 'edituser/:id', component: EditUser, canActivate: [AuthGuard3] },
      { path: 'modiriryatgozaresh', component: ModiryatGozareshComponent, canActivate: [AuthGuard2] },
      { path: 'maktab', component: MaktabComponent, canActivate: [AuthGuard] },
      { path: 'musiclock', component: MusicLockComponent, canActivate: [AuthGuard] },
      { path: 'dance', component: DanceComponent, canActivate: [AuthGuard] },
      { path: 'kargah', component: AddKargahComponent, canActivate: [AuthGuard] },
      { path: 'userroletow', component: UserRoleTowComponent, canActivate: [AuthGuard3] },
      { path: 'userroletherry', component: UserRoleTherryComponent, canActivate: [AuthGuard3] },
      { path: 'taedinstrument', component: TaedInstrumentComponent, canActivate: [AuthGuard] },
      { path: 'activeinstrument', component: ActiveInstrumentComponent, canActivate: [AuthGuard2] },
      { path: 'mypanel', component: MyPanelComponent, canActivate: [AuthGuard]},
      { path: 'userostan', component: UserOstanComponent, canActivate: [AuthGuard2]},
      
    ],

  },

  { path: 'listgozaresh', component: GozareshComponent, canActivate: [AuthGuard] },
  {
    path: 'listgozaresh', component: GozareshComponent,
    children: [
      { path: 'detialsgozaresh/:id', component: DetialsComponent }
    ],

  },

  { path: 'listtypemusiclocal', component: ListTypeMusicLocal, canActivate: [AuthGuard] },
  {
    path: 'listtypemusiclocal', component: ListTypeMusicLocal,
    children: [
      { path: 'edittypemusiclocal/:id', component: EditTypeMusicLocal }
    ],

  },

  { path: 'editinstrumexts', component: ListTypeMusicLocal, canActivate: [AuthGuard] },
  {
    path: 'editinstrumexts', component: EditInstrumexts,
    children: [
      { path: 'edittypemusiclocal/:id', component: EditInstrumexts }
    ],



  },

  { path: 'typeinstrumexts', component: TypeInstrumextsType, canActivate: [AuthGuard] },
  {
    path: 'edittypeinstrumexts', component: EditTypeInstrumexts,
    children: [
      { path: 'edittypeinstrumexts/:id', component: EditTypeInstrumexts, canActivate: [AuthGuard] }
    ],



  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
