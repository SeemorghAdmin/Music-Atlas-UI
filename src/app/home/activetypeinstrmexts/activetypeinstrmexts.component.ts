import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'activetypeinstrmexts',
    templateUrl: './activetypeinstrmexts.component.html',

})
export class ActiveTypeInxComponent implements OnInit {
    constructor(private http: HttpClient, private tosrt: ToastrService) { }

    typeins;

    test(id){
        this.http.put('http://178.22.123.86/maapi/api/ActiveTypeIns/' + id, id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }else {
                    this.tosrt.error('تایید نشد')
                }
            }
        );
    }

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/ActiveTypeIns').subscribe(
            res => {
                this.typeins = res;
            }
        )
     }
}
