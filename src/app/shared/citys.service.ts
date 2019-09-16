import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CityServices {
    constructor(private fb: FormBuilder, private http: HttpClient, ) { }
    readonly BaseURI = 'http://178.22.123.86/maapi/api';






    formModelCity = this.fb.group({
        Name: [''],
        State_ID: ['']
    });


    Add() {
        var body = {
            Name: this.formModelCity.value.Name,
            State_ID: this.formModelCity.value.State_ID
        };
        return this.http.post(this.BaseURI + '/Cities', body);
    }

    Delete(id) {
        return this.http.delete(this.BaseURI + '/Cities/' + id);
    }

    Get() {
        return this.http.get(this.BaseURI + '/Cities');
    }

    GetDeitls(id) {
        return this.http.get(this.BaseURI + '/Cities/' + id)
    }

    Put(id) {
        var body = {
            ID: id,
            Name: this.formModelCity.value.Name,
            State_ID: this.formModelCity.value.State_ID
        };
        return this.http.put(this.BaseURI + '/Cities/' + id, body);
    }

}

