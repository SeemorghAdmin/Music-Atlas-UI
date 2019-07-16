import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfzodanGozaresh } from './../home/modiriatgozaresh/afzodangozaresh.component';
import { UploadComponent } from './../home/upload/upload.component';




@Injectable({
  providedIn: 'root'
})

export class InstrumextsService {
  constructor(private fb: FormBuilder, private http: HttpClient,) { }
  readonly BaseURI = 'http://localhost:54277/api';

  
  
  
   

  formModelInstrumexts = this.fb.group({
    Name: [''],
    Comment: [''],
  });


  AddReport() {
    var body = {
      Name: this.formModelInstrumexts.value.Name,
      Comment: this.formModelInstrumexts.value.Comment,
    };
    return this.http.post(this.BaseURI + '/Instrumexts', body);
  }

delete(id){
  return this.http.delete(this.BaseURI + '/Instrumexts/' + id);
}

  getReport() {
    return this.http.get(this.BaseURI + '/Instrumexts');
  }

  getReportDeitls(id){
    return this.http.get(this.BaseURI + '/Instrumexts/' + id)
  }

  put(id){
    var body = {
      Id: id,
      Name: this.formModelInstrumexts.value.Name,
      Comment: this.formModelInstrumexts.value.Comment,
    };
    return this.http.put(this.BaseURI + '/Instrumexts/' + id, body);
  }
  
}

