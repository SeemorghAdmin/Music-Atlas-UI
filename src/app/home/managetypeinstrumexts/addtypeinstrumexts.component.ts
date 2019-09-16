import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TypeInstrumextsService } from './../../shared/typeinstrumexts.service';

@Component({
    selector: 'addtypeinsttrumexts',
    templateUrl: './addtypeinstrumexts.component.html',
    styles: []
})

export class AddTypeInstrumexts implements OnInit{

    constructor(public service: TypeInstrumextsService, private toastr: ToastrService){ }
  
    
  

    public response: {dbPath: ''};
    public uploadFinished = (event) => {
      this.response = event;
    };

   

    
    ngOnInit() {
      this.service.formModelTypeInstrumexts.reset();
    }
  
    onSubmit() {
    //  this.service.formModelReport.value.FileUrl = this.response.dbPath
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res == true) { 
            this.service.formModelTypeInstrumexts.reset();
            this.toastr.success('ثبت نام شد');
          } else   {
            this.toastr.error('نام نوع ساز تکراری است','ثبت انجام نشد');
          }
           
        }
        
      );
    }
  
   }
  