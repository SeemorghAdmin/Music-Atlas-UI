import { InstrumextsService } from '../../shared/instrumexts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'instrumexts',
  templateUrl: './instrumexts.component.html',
  styles: []
})
export class InstrumextsType implements OnInit {
    instrumextsType;



  constructor(private router: Router, private service: InstrumextsService) { }


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
delete(id) {
    this.service.delete(id).subscribe(
        res => {
            if(res == true ){
                window.location.reload();
            }
        }
    );
}

  ngOnInit() {
    this.service.getReport().subscribe(
      res => {
        this.instrumextsType = res;
      },
      err => {
        console.log(err);
      },
    );
  }
}