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


  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'afzodan', component: AfzodanComponent },
      { path: 'afzodangozaresh', component: AfzodanGozaresh },
      { path: 'listperson', component: PersonComponent },
      { path: 'personedit/:id', component: PersonEdit },
      { path: 'upload', component: UploadComponent },
      { path: 'listgozaresh', component: GozareshComponent },
      { path: 'detialsgozaresh/:id', component: DetialsComponent },
      { path: 'sendmessage', component: SendMessage },
      { path: 'addtypemusiclocal', component: AddTypeMusicLocal },
      { path: 'listtypemusiclocal', component: ListTypeMusicLocal },
      { path: 'edittypemusiclocal/:id', component: EditTypeMusicLocal },
      { path: 'instrumexts', component: InstrumextsType },
      { path: 'addinstrumexts', component: AddInstrumexts },
      { path: 'editinstrumexts', component: EditInstrumexts },
      { path: 'editinstrumexts/:id', component: EditInstrumexts },
      { path: 'typeinstrumexts', component: TypeInstrumextsType },
      { path: 'addtypeinsttrumexts', component: AddTypeInstrumexts },
      { path: 'edittypeinstrumexts/:id', component: EditTypeInstrumexts },
      { path: 'listusertaednashode', component: ListUserTaedNashodeComponent },
      { path: 'activeaccount', component: ActiveAccountComponent},
     // { path: 'activetypeinstrmexts', component: ActiveTypeInxComponent },
      { path: 'finalactive', component: FinalActiveComponent },
      { path: 'typeavaz', component: TypeAvazComponent },
      { path: 'addtypeavaz', component: AddTypeAvazComponent },
      { path: 'activetypeavaz', component: ActiveTypeAvazComponent },
      { path: 'taedtypeavaz', component: TaedTypeInxComponent },
      { path: 'liststate', component: ListStateComponent },
      { path: 'addstate', component: AddState},
      { path: 'addcity', component: Addcity },
      { path: 'listcity', component: ListCityComponent },
      { path: 'listkrga', component: ListKargahComponent },
      { path: 'taeduserostani', component: TaenKarbaranComponent },
      { path: 'manageuser', component: ManageUserComponent },
      { path: 'edituser/:id', component: EditUser },
      { path: 'modiriryatgozaresh', component: ModiryatGozareshComponent },
      { path: 'maktab', component: MaktabComponent },
      { path: 'musiclock', component: MusicLockComponent },
      { path: 'dance', component: DanceComponent },
      { path: 'kargah', component: AddKargahComponent },
      { path: 'userroletow', component: UserRoleTowComponent},
      { path: 'userroletherry', component: UserRoleTherryComponent},
      { path: 'taedinstrument', component: TaedInstrumentComponent},
      { path: 'activeinstrument', component: ActiveInstrumentComponent},
      { path: 'mypanel', component: MyPanelComponent},
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
      { path: 'edittypeinstrumexts/:id', component: EditTypeInstrumexts }
    ],



  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
