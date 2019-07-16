import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './../../shared/message.service';
import { ToastrService } from 'ngx-toastr';
import { UploadComponent } from './../upload/upload.component'

@Component({
    selector: 'sendmessage',
    templateUrl: './message.component.html',
    styles: []
})

export class SendMessage implements OnInit{

    constructor(public service: MessageService, private toastr: ToastrService){ }
    userDetails;
    
  
    public response: {dbPath: ''};
    public uploadFinished = (event) => {
      this.response = event;
    };


   

    
    ngOnInit() {
      this.service.formModelMessage.reset();
      
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
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res == true) {
            this.service.formModelMessage.reset();
            this.toastr.success( 'پیام ارسال شد');
            
          } else {
            res.errors.forEach(element => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('خطای رخ داده است','پیام ارسال نشد');
                  break;
  
                default:
                this.toastr.error(element.description,'پیام ارسال نشد');
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
  