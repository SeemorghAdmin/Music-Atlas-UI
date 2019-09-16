import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfzodanGozaresh } from './../home/modiriatgozaresh/afzodangozaresh.component';
import { UploadComponent } from './../home/upload/upload.component';




@Injectable({
    providedIn: 'root'
})

export class MessageService {
    constructor(private fb: FormBuilder, private http: HttpClient, ) { }
    readonly BaseURI = 'http://178.22.123.86/maapi/api';






    formModelMessage = this.fb.group({
        MatnMessage: [''],
        UserSenderId: [''],
        UserReciverId: [''],
    });


    AddReport() {
        var body = {
            MatnMessage: this.formModelMessage.value.MatnMessage,
            UserSenderId: this.formModelMessage.value.UserSenderId,
            UserReciverId: this.formModelMessage.value.UserReciverId,
        };
        return this.http.post(this.BaseURI + '/Messages', body);
    }



    getMesaage(id) {
        return this.http.get(this.BaseURI + '/Messages/' + id);
    }

    getReportDeitls(id) {
        return this.http.get(this.BaseURI + '/Messages' + id)
    }

}

