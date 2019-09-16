import { ReportService } from '../../shared/report.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'listgozaresh',
  templateUrl: './listgozaresh.component.html',
  styles: []
})
export class GozareshComponent implements OnInit {
  reportDetails;



  constructor(private router: Router, private service: ReportService) { }


 /* Detials(id): void {
    this.service.getReportDeitls(id).subscribe(
      res => {
        this.reportDetails = res;
        // this.router.navigate(['/home/detialsgozaresh'] );
        //this.router.navigate(['/routing/path'], { reportdetial : res});
        // this.router.navigate(['/b'],  {data: { this.reportDetails.id }});
        
        console.log(res);
      }
    )
  } */


  ngOnInit() {
    this.service.getReport().subscribe(
      res => {
        this.reportDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
}