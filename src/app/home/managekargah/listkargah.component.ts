import { Component, OnInit } from '@angular/core';
import { KargahService } from './../../shared/kargahsakhtsaz.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'listkrga',
    templateUrl: './listkargah.component.html',
})
export class ListKargahComponent implements OnInit {
    constructor(private service: KargahService,  private toster: ToastrService) { }
    ins;
    ngOnInit(): void {
       this.service.Get().subscribe(
           res => {
              this.ins = res;
           }
       );
     }
}
