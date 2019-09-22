import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class MyPanelService {
    constructor (private http: HttpClient){}

    readonly BaseURI = 'http://localhost:54277/api';

    getCount(){
        return this.http.get(this.BaseURI + '/MyReport');
    }
    
    getSaz(){
        return this.http.get(this.BaseURI + '/MyReport/Saz');
    }

    getTypeSaz(){
        return this.http.get(this.BaseURI + '/MyReport/TypeSaz');
    }
    
    getTypeAvaz(){
        return this.http.get(this.BaseURI + '/MyReport/TypeAvaz');
    }
}