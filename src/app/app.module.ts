import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
    EditInstrumexts
  ],
  imports: [
    
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
  bootstrap: [AppComponent]
})
export class AppModule { }
