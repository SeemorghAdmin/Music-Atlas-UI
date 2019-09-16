import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://178.22.123.86/maapi/api/';

  formModelPerson = this.fb.group({
    Id: ['', Validators.required],
    Name: ['', Validators.email],
    User_ID: [''],
    Age: [''],
    PersonalCode: [''],
    PhoneNumber: [''],
    ApplicationUsers: ['']
  });
  
  getPerson() {
    return this.http.get(this.BaseURI + '/People');
  }
}

