import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstrumextsService } from './../../shared/instrumexts.service';

@Component({
    selector: 'addinstrumexts',
    templateUrl: './addinstrumexts.component.html',
    styles: []
})

export class AddInstrumexts implements OnInit{

    constructor(public service: InstrumextsService, private toastr: ToastrService){ }
  
    
  

   

    
    ngOnInit() {
      this.service.formModelInstrumexts.reset();
      
    }
  
    onSubmit() {
    //  this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res == true) { 
            this.service.formModelInstrumexts.reset();
            this.toastr.success('ثبت نام شد');
            
          } 
        },
        err => {
          console.log(err);
        }
      );
    }

   /* onSubmit() {
      
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res) {
            this.service.formModelTypeMusicLocal.reset();
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
    }*/
  
  
   }
  