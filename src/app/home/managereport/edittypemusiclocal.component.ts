import { TypeMusicService } from '../../shared/typemusiclocal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'edittypemusiclocal',
  templateUrl: './edittypemusiclocal.component.html',
  styles: []
})
export class EditTypeMusicLocal implements OnInit {
  reportDetails; 
  private sub: any;
  id;

  constructor(private router: Router, private service: TypeMusicService, private _Activatedroute:ActivatedRoute) { 
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   }


 onSubmit(id){
   this.service.put(id).subscribe(
    (res: any) => {
      if (res == true) { 
        this.service.formModelTypeMusicLocal.reset();
        window.location.reload();
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