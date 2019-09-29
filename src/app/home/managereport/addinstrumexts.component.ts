import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstrumextsService } from './../../shared/instrumexts.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'addinstrumexts',
  templateUrl: './addinstrumexts.component.html',
  styles: []
})

export class AddInstrumexts implements OnInit {
 
  constructor(public service: InstrumextsService, private toastr: ToastrService, private http: HttpClient) { }

  typeid;
  type;
  

  public response: { dbPath: '' };
  public uploadFinished = (event) => {
    this.response = event;
  };

  test(id) {
    this.typeid = id;
    console.log(this.typeid);
  }

  
  


  ngOnInit() {
    this.service.formModelInstrumexts.reset();
    this.http.get('http://178.22.123.86/maapi/api/Fliter').subscribe(
      res => {
        this.type = res;
     
      }
    );
  }

  onSubmit() {
    this.service.formModelInstrumexts.value.FileUrl = this.response.dbPath;
    this.service.formModelInstrumexts.value.TypeInstrumexts_ID = this.typeid;
    this.service.AddReport().subscribe(
      (res: any) => {
        if (res == true) {
          this.service.formModelInstrumexts.reset();
          this.response.dbPath = '';
          this.toastr.success('ثبت ساز انجام شد');

        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
