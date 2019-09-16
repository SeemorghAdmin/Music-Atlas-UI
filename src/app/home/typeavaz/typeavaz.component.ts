import { Component, OnInit } from '@angular/core';
import { TypeAvazService } from './../../shared/typeavaz.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'typeavaz',
    templateUrl: './typeavaz.component.html',
})
export class TypeAvazComponent implements OnInit {
    constructor(private service : TypeAvazService, private toster: ToastrService) { }

    typeavaz;

    delete(id){
        this.service.Delete(id).subscribe(
            res => {
                if (res == true) {
                    this.toster.success('با موفیق حذف شد');
                }
            }
        );
    }

    ngOnInit(): void {
        this.service.Get().subscribe(
            res => {
                this.typeavaz = res;
            }
        )
     }
}
