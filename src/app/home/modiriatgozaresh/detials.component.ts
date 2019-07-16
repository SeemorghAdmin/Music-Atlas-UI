import { ReportService } from '../../shared/report.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GozareshComponent } from './listgozaresh.component'
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'detialsgozaresh',
  templateUrl: './detials.component.html',
  styles: []
})
export class DetialsComponent implements OnInit {
  reportDetails; 
  private sub: any;
  id;

  constructor(private router: Router, private service: ReportService, private _Activatedroute:ActivatedRoute) { 
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   }


  

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
        console.log(params);
         this.id = params.get('id'); 
         this.service.getReportDeitls(this.id).subscribe(
            res => {
              this.reportDetails = res;
              
            }
          )
     });
  }

  /*Detials(id){
    this.service.getReportDeitls(id).subscribe(
      res => {
        this.reportDetails = res;
        console.log(res);
      }
    )
  }*/
}