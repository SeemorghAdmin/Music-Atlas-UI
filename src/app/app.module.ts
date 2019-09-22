import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AfzodanComponent } from './home/modiritkarbaran/afzodan.component';
import { AfzodanGozaresh } from './home/modiriatgozaresh/afzodangozaresh.component'
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
import { TypeAvazService } from './shared/typeavaz.service';
import { TypeAvazComponent } from './home/typeavaz/typeavaz.component';
import { AddTypeAvazComponent } from './home/typeavaz/addtypeavaz.component';
import { ActiveTypeAvazComponent } from './home/activetypeavaz/activetypeavaz.component';
import { TaedTypeInxComponent } from './home/activetypeavaz/taedtypeavaz.component';
import { ListStateComponent } from './home/managestate/liststate.component';
import { AddState } from './home/managestate/addstate.component';
import { ListCityComponent } from './home/managecity/listcity.component';
import { Addcity } from './home/managecity/addcity.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './user/registration/popup.component';
import { TaedInstrumentComponent } from './home/manageinstrumrnt/taedinstrument.component';
import { ActiveInstrumentComponent } from './home/manageinstrumrnt/activeinstrument.component';
import { MyPanelComponent } from './home/mypanel/mypanel.component';

@NgModule({
  declarations: [
    AppComponent, DetailInstrumentComponent, UserRoleTowComponent, UserRoleTherryComponent, DialogComponent,
    UserComponent,TaedInstrumentComponent, ActiveInstrumentComponent, MyPanelComponent,
    RegistrationComponent,
    LoginComponent,
    AfzodanComponent,
    HomeComponent,
    AfzodanGozaresh,
    PersonComponent,
    PersonEdit,
    UploadComponent,
    GozareshComponent,
    DetialsComponent,
    SendMessage,
    AddTypeMusicLocal,
    ListTypeMusicLocal,
    EditTypeMusicLocal,
    InstrumextsType,
    AddInstrumexts,
    EditInstrumexts,
    HomePageComponent,
    DetialsInstrumextsComponent,
    TypeInstrumextsType,
    AddTypeInstrumexts,
    EditTypeInstrumexts,
    ListUserTaedNashodeComponent,
    ActiveAccountComponent,
    ActiveTypeInxComponent,
    FinalActiveComponent,
    TypeAvazComponent,
    AddTypeAvazComponent,
    ActiveTypeAvazComponent,
    TaedTypeInxComponent,
    ListStateComponent,
    AddState,
    Addcity,
    ListCityComponent,
    ListKargahComponent,
    TaenKarbaranComponent,
    ManageUserComponent,
    EditUser,
    ModiryatGozareshComponent, MaktabComponent, MusicLockComponent, DanceComponent, AddKargahComponent
  ],
  imports: [
    MatButtonModule, MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
    
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
