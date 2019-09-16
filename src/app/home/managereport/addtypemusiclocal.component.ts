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
  
    
  

    public response: {dbPath: ''};
    public uploadFinished = (event) => {
      this.response = event;
    };

   

    
    ngOnInit() {
      this.service.formModelTypeMusicLocal.reset();
    }
  
    onSubmit() {
    //  this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res == true) { 
            this.service.formModelTypeMusicLocal.reset();
            
            this.toastr.success('ثبت با موفقیت انجام شد');
          } 
        },
        err => {
          console.log(err);
        }
      );
    }
  
   }
  