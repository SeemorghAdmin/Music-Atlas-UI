import { Component, OnInit } from '@angular/core';
import { TypeAvazService } from './../../shared/typeavaz.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'addtypeavaz',
    templateUrl: './addtypeavaz.component.html',
    
})
export class AddTypeAvazComponent implements OnInit {
    constructor(private service: TypeAvazService, private toastr: ToastrService) { }
 
    onSubmit() {
        //  this.service.formModelReport.value.FileUrl = this.response.dbPath
        this.service.Add().subscribe(
            (res: any) => {
                if (res == true) {
                    this.service.formTypeAvaz.reset();
                    this.toastr.success('ثبت نام شد');
                } else {
                    this.toastr.error( 'ثبت انجام نشد');
                }

            }

        );
    }

    ngOnInit(): void { this.service.formTypeAvaz.reset(); }
}
