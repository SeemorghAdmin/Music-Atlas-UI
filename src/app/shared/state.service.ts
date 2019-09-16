import { Injectable } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class StateService {
    constructor(private fb: FormBuilder, private http: HttpClient, ) { }
    readonly BaseURI = 'http://178.22.123.86/maapi/api';






    formModelState = this.fb.group({
        Name: ['']
    });


    Add() {
        var body = {
            Name: this.formModelState.value.Name
        };
        return this.http.post(this.BaseURI + '/States', body);
    }

    Delete(id) {
        return this.http.delete(this.BaseURI + '/States/' + id);
    }

    Get() {
        return this.http.get(this.BaseURI + '/States');
    }

    GetDeitls(id) {
        return this.http.get(this.BaseURI + '/States/' + id)
    }

    Put(id) {
        var body = {
            ID: id,
            Name: this.formModelState.value.Name
        };
        return this.http.put(this.BaseURI + '/States/' + id, body);
    }

}

