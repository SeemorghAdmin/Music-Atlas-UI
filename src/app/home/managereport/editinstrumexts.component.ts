import { InstrumextsService } from '../../shared/instrumexts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Component({
  selector: 'editinstrumexts',
  templateUrl: './editinstrumexts.component.html',
  styles: []
})
export class EditInstrumexts implements OnInit {
  reportDetails; 
  private sub: any;
  id;
  type;
 typeid;
  constructor(private router: Router, private service: InstrumextsService, private _Activatedroute:ActivatedRoute, private http : HttpClient) { 
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   }
test(id){ 
  this.typeid = id;
  console.log(this.typeid)
}
  public response: { dbPath: '' };
  public uploadFinished = (event) => {
    this.response = event;
  };
 onSubmit(id){
   
   if (this.service.formModelInstrumexts.value.Name == '') {
     this.service.formModelInstrumexts.value.Name = this.reportDetails.name;
   }

   if (this.service.formModelInstrumexts.value.Comment == '') {
     this.service.formModelInstrumexts.value.Comment = this.reportDetails.comment;

   }
   
   if (this.response.dbPath == '') {
     this.service.formModelInstrumexts.value.FileUrl = this.reportDetails.fileUrl;
   }else{
     this.service.formModelInstrumexts.value.FileUrl = this.response.dbPath;
   }

   if (this.typeid != null) {
     this.service.formModelInstrumexts.value.TypeInstrumexts_ID = this.typeid;
   } else {
     this.service.formModelInstrumexts.value.TypeInstrumexts_ID = this.reportDetails.typeInstrumexts_ID;
   }

   
   this.service.put(id).subscribe(
    (res: any) => {
      if (res == true) { 
        this.service.formModelInstrumexts.reset();
        this.router.navigate(['/home/instrumexts']);
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

    this.http.get('http://178.22.123.86/maapi/api/Fliter').subscribe(
      res => {
        this.type = res;

      }
    );
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