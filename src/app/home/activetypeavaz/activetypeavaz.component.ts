import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'activetypeavaz',
    templateUrl: './activetypeavaz.component.html',

})
export class ActiveTypeAvazComponent implements OnInit {
    constructor(private http: HttpClient, private tosrt: ToastrService) { }

    type;

    test(id) {
        this.http.put('http://178.22.123.86/maapi/api/ActiveTypeAvaz/' + id, id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                } else {
                    this.tosrt.error('تایید نشد')
                }
            }
        );
    }

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/ActiveTypeAvaz').subscribe(
            res => {
                this.type = res;
            }
        )
    }
}
