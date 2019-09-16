import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable ({
    providedIn: 'root'
})

export class TypeAvazService implements OnInit {
    constructor(private http: HttpClient, private fb: FormBuilder) { }

    readonly baseUrl ='http://178.22.123.86/maapi/api';

    formTypeAvaz = this.fb.group ({
        Name: [''],
        Discription: [''],
        Status: ['']
    });

    Add(){
        var body = {
            Name: this.formTypeAvaz.value.Name,
            Discription: this.formTypeAvaz.value.Discription
        };
        return this.http.post(this.baseUrl + '/TypeAvaz', body);
    }

    Get(){
       return this.http.get(this.baseUrl + '/TypeAvaz');
    }

    GetOne(id){
        return this.http.get(this.baseUrl + '/TypeAvaz/' + id);
    }

    Put(id){
        var body = {
            Id: id,
            Name: this.formTypeAvaz.value.Name,
            Discription: this.formTypeAvaz.value.Discription
        }
        return this.http.put(this.baseUrl + '/TypeAvaz/' + id, body);
    }

    Delete(id){
        return this.http.delete(this.baseUrl + '/TypeAvaz/' + id);
    }
    ngOnInit(): void { }
}
