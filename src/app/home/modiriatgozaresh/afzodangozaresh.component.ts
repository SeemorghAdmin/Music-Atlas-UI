import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from './../../shared/report.service';
import { ToastrService } from 'ngx-toastr';
import { UploadComponent } from './../upload/upload.component'

@Component({
    selector: 'afzodangozaresh',
    templateUrl: './afzodangozaresh.component.html',
    styles: []
})

export class AfzodanGozaresh implements OnInit{

    constructor(public service: ReportService, private toastr: ToastrService){ }
  
    
  
    public response: {dbPath: ''};
    public uploadFinished = (event) => {
      this.response = event;
    };


   

    
    ngOnInit() {
      this.service.formModelReport.reset();
      
    }
  
   /* onSubmit() {
      this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res.succeeded) { 
            this.service.formModelReport.reset();
            this.toastr.success('ثبت نام شد');
          } 
        },
        err => {
          console.log(err);
        }
      );
    }*/

    onSubmit() {
      this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res) {
            this.service.formModelReport.reset();
            this.toastr.success( 'ثبت گزارش انجام شد');
          } else {
            res.errors.forEach(element => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('خطای رخ داده است','ثبت گزارش نشد');
                  break;
  
                default:
                this.toastr.error(element.description,'ثبت نام انجام نشد');
                  break;
              }
            });
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  
  
   }
  