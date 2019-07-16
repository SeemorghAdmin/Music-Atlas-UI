import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfzodanGozaresh } from './../home/modiriatgozaresh/afzodangozaresh.component';
import { UploadComponent } from './../home/upload/upload.component';




@Injectable({
  providedIn: 'root'
})

export class TypeMusicService {
  constructor(private fb: FormBuilder, private http: HttpClient,) { }
  readonly BaseURI = 'http://localhost:54277/api';

  
  
  
   

  formModelTypeMusicLocal = this.fb.group({
    Name: [''],
    Comment: [''],
  });


  AddReport() {
    var body = {
      Name: this.formModelTypeMusicLocal.value.Name,
      Comment: this.formModelTypeMusicLocal.value.Comment,
    };
    return this.http.post(this.BaseURI + '/TypeMusicLocals', body);
  }

delete(id){
  return this.http.delete(this.BaseURI + '/TypeMusicLocals/' + id);
}

  getReport() {
    return this.http.get(this.BaseURI + '/TypeMusicLocals');
  }

  getReportDeitls(id){
    return this.http.get(this.BaseURI + '/TypeMusicLocals/' + id)
  }

  put(id){
    var body = {
      Id: id,
      Name: this.formModelTypeMusicLocal.value.Name,
      Comment: this.formModelTypeMusicLocal.value.Comment,
    };
    return this.http.put(this.BaseURI + '/TypeMusicLocals/' + id, body);
  }
  
}

