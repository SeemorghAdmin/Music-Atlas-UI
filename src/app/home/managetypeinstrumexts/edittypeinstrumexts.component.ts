import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { TypeInstrumextsService } from './../../shared/typeinstrumexts.service';


@Component({
  selector: 'edittypeinstrumexts',
  templateUrl: './edittypeinstrumexts.component.html',
  styles: []
})
export class EditTypeInstrumexts implements OnInit {
  reportDetails; 
  private sub: any;
  id;

  constructor(private router: Router, private service: TypeInstrumextsService, private _Activatedroute:ActivatedRoute) { 
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   }


 onSubmit(id){
   if (this.service.formModelTypeInstrumexts.value.Comment == '') {
     this.service.formModelTypeInstrumexts.value.Comment = this.reportDetails.comment;
   }
   if (this.service.formModelTypeInstrumexts.value.Name == '') {
     this.service.formModelTypeInstrumexts.value.Name = this.reportDetails.name;
   } 
  
   this.service.put(id).subscribe(
    (res: any) => {
      if (res == true) { 
        this.service.formModelTypeInstrumexts.reset();
        this.router.navigate(['/home/typeinstrumexts']);
      } 
    },
    err => {
      console.log(err);
    }
   );
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