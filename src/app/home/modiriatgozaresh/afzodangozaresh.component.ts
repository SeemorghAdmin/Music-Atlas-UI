import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from './../../shared/report.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'afzodangozaresh',
    templateUrl: './afzodangozaresh.component.html',
    styles: []
})

export class AfzodanGozaresh implements OnInit{

    constructor(public service: ReportService, private toastr: ToastrService){ }
  
    ngOnInit() {
      this.service.formModelReport.reset();
    }
  
    onSubmit() {
      this.service.AddReport().subscribe(
        (res: any) => {
          if (res.succeeded == true) {
           
            this.service.formModelReport.reset();
            this.toastr.success('ثبت نام شد');
          } 
        },
        err => {
          console.log(err);
        }
      );
    }
  
   }
  