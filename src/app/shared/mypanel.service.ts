import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class MyPanelService {
    constructor(private http: HttpClient) { }

    readonly BaseURI = 'http://178.22.123.86/maapi/api';

    getCount() {
        return this.http.get(this.BaseURI + '/MyReport');
    }

    getSaz() {
        return this.http.get(this.BaseURI + '/MyReport/Saz');
    }

    getTypeSaz() {
        return this.http.get(this.BaseURI + '/MyReport/TypeSaz');
    }

    getTypeAvaz() {
        return this.http.get(this.BaseURI + '/MyReport/TypeAvaz');
    }

    getMusicLoc() {
        return this.http.get(this.BaseURI + '/MyReport/MusicLoc');
    }

    getMaktab() {
        return this.http.get(this.BaseURI + '/MyReport/Maktab');
    }

    getKargah() {
        return this.http.get(this.BaseURI + '/MyReport/KargahSakht');
    }

    getDancetable() {
        return this.http.get(this.BaseURI + '/MyReport/DanceTable');
    }
}