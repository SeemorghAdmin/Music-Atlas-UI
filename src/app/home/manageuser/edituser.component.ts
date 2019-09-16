import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'edituser',
    templateUrl: './edituser.component.html',
})
export class EditUser implements OnInit {
    userDetails;
    id;
    state;
    city;
    cityid;
    constructor(private router: Router,  private _Activatedroute: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {
        this.id = this._Activatedroute.snapshot.paramMap.get("id");
    }

    formModel = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', Validators.email],
        FullName: [''],
        City_ID: [''],
    });
    
    test(id){
        this.http.get('http://178.22.123.86/maapi/api/City/' + id).subscribe(
            res => {
                this.city = res;
            }
        );
    }

    onSubmit(id) {
        if (this.cityid == '') {
            this.formModel.value.City_ID = this.userDetails.city_ID;
        }else {
            this.formModel.value.City_ID = this.cityid;
        }

        if (this.formModel.value.UserName == '') {
            this.formModel.value.UserName = this.userDetails.userName;
        } 

        if (this.formModel.value.Email == '') {
            this.formModel.value.Email = this.userDetails.email;
        } 

        if (this.formModel.value.FullName == '') {
            this.formModel.value.FullName = this.userDetails.fullName;
        } 

        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            City_ID: this.formModel.value.City_ID
        };
        this.http.put('http://178.22.123.86/maapi/api/ManageUser/' + id, body).subscribe(
            res => {
                this.city = res;
            });
    }

    test1(id) {
        this.cityid = id;
    }
    
    ngOnInit() {
        this.http.get('http://178.22.123.86/maapi/api/ManageUser/' + this.id).subscribe(
            res => {
                this.userDetails = res;
            }
        );
        this.http.get('http://178.22.123.86/maapi/api/State').subscribe(
            res => {
                this.state = res;
            }
        );
    }

   
}