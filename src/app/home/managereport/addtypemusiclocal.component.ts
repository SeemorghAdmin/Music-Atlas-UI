import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TypeMusicService } from './../../shared/typemusiclocal.service';

@Component({
    selector: 'addtypemusiclocal',
    templateUrl: './addtypemusiclocal.component.html',
    styles: []
})

export class AddTypeMusicLocal implements OnInit{

    constructor(public service: TypeMusicService, private toastr: ToastrService){ }
  
    
  

   

    
    ngOnInit() {
      this.service.formModelTypeMusicLocal.reset();
      
    }
  
    onSubmit() {
    //  this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res == true) { 
            this.service.formModelTypeMusicLocal.reset();
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
  