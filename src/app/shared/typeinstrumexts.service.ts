import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class TypeInstrumextsService {
  constructor(private fb: FormBuilder, private http: HttpClient,) { }
  readonly BaseURI = 'http://178.22.123.86/maapi/api';

  
  
  
   

  formModelTypeInstrumexts = this.fb.group({
    Name: [''],
    Comment: [''],
    
  });


  AddReport() {
    var body = {
      Name: this.formModelTypeInstrumexts.value.Name,
      Comment: this.formModelTypeInstrumexts.value.Comment,
     
    };
    
    return this.http.post(this.BaseURI + '/TypeInstrumexts', body);
  }

delete(id){
  return this.http.delete(this.BaseURI + '/TypeInstrumexts/' + id);
}

  getReport() {
    return this.http.get(this.BaseURI + '/TypeInstrumexts');
  }

  getReportDeitls(id){
    return this.http.get(this.BaseURI + '/TypeInstrumexts/' + id)
  }

  put(id){
    var body = {
      Id: id,
      Name: this.formModelTypeInstrumexts.value.Name,
      Comment: this.formModelTypeInstrumexts.value.Comment,
    };
    return this.http.put(this.BaseURI + '/TypeInstrumexts/' + id, body);
  }
  
}

