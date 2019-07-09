import { ReportService } from '../../shared/report.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'listgozaresh',
  templateUrl: './listgozaresh.component.html',
  styles: []
})
export class GozareshComponent implements OnInit {
  reportDetails;



  constructor(private router: Router, private service: ReportService) { }

  ngOnInit() {
    this.service.getReport().subscribe(
      res => {
        this.reportDetails = res;
        console.log(res)
      },
      err => {
        console.log(err);
      },
    );
  }
}