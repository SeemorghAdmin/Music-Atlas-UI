import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ReportService {
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    readonly BaseURI = 'http://localhost:54277/api';

    formModelReport = this.fb.group({
        Name: [''],
        Family: [''],
        State: [''],
        City: [''],
        Saz: ['']
      });
    

      AddReport() {
        var body = {
          Name: this.formModelReport.value.Name,
          Family: this.formModelReport.value.Family,
          State: this.formModelReport.value.State,
          City: this.formModelReport.value.City,
          Saz: this.formModelReport.value.Saz
        };
        return this.http.post(this.BaseURI + '/Reports', body);
      }

}