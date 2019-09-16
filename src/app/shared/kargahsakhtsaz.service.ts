import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class KargahService {
    constructor(private fb: FormBuilder, private http: HttpClient, ) { }
    readonly BaseURI = 'http://178.22.123.86/maapi/api';






    formModelCity = this.fb.group({
        Instrumexts: [''],
        Instrumexts1: [''],
        Instrumexts2: [''],
        Instrumexts3: [''],
        History: [''],
        Time: [''],
        Adrres: ['']
    });


    Add() {
        var body = {
            Instrumexts: this.formModelCity.value.Instrumexts,
            Instrumexts1: this.formModelCity.value.Instrumexts1,
            Instrumexts2: this.formModelCity.value.Instrumexts2,
            Instrumexts3: this.formModelCity.value.Instrumexts3,
            History: this.formModelCity.value.History,
            TimeTime: this.formModelCity.value.Time,
            Adrres: this.formModelCity.value.Adrres,
        };
        return this.http.post(this.BaseURI + '/KargahSakhtSazs', body);
    }

    Delete(id) {
        return this.http.delete(this.BaseURI + '/KargahSakhtSazs/' + id);
    }

    Get() {
        return this.http.get(this.BaseURI + '/KargahSakhtSazs');
    }

    GetDeitls(id) {
        return this.http.get(this.BaseURI + '/KargahSakhtSazs/' + id)
    }

    Put(id) {
        var body = {
            ID: id,
            Instrumexts: this.formModelCity.value.Instrumexts,
            Instrumexts1: this.formModelCity.value.Instrumexts1,
            Instrumexts2: this.formModelCity.value.Instrumexts2,
            Instrumexts3: this.formModelCity.value.Instrumexts3,
            History: this.formModelCity.value.History,
            TimeTime: this.formModelCity.value.Time,
            Adrres: this.formModelCity.value.Adrres,
        };
        return this.http.put(this.BaseURI + '/KargahSakhtSazs/' + id, body);
    }

}

