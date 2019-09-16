import { TypeMusicService } from '../../shared/typemusiclocal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'listtypemusiclocal',
  templateUrl: './listtypemusiclocal.component.html',
  styles: []
})
export class ListTypeMusicLocal implements OnInit {
  listTypeMusicLocal;



  constructor(private router: Router, private service: TypeMusicService) { }


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
        this.listTypeMusicLocal = res;
      },
      err => {
        console.log(err);
      },
    );
  }
}