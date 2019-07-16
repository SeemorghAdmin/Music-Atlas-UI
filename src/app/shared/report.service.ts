import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfzodanGozaresh } from './../home/modiriatgozaresh/afzodangozaresh.component';
import { UploadComponent } from './../home/upload/upload.component';




@Injectable({
  providedIn: 'root'
})

export class ReportService {
  constructor(private fb: FormBuilder, private http: HttpClient,) { }
  readonly BaseURI = 'http://localhost:54277/api';

  
  
  
   

  formModelReport = this.fb.group({
    Name: [''],
    Family: [''],
    State: [''],
    City: [''],
    Saz: [''],
    FileUrl: ['']
  });


  AddReport() {
    var body = {
      Name: this.formModelReport.value.Name,
      Family: this.formModelReport.value.Family,
      State: this.formModelReport.value.State,
      City: this.formModelReport.value.City,
      Saz: this.formModelReport.value.Saz,
      FileUrl: this.formModelReport.value.FileUrl
    };
    return this.http.post(this.BaseURI + '/Reports', body);
  }



  getReport() {
    return this.http.get(this.BaseURI + '/Reports');
  }

  getReportDeitls(id){
    return this.http.get(this.BaseURI + '/Reports/' + id)
  }
  
}

