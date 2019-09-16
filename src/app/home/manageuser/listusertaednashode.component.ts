import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'listusertaednashode',
    templateUrl: './listusertaednashode.component.html',
})
export class ListUserTaedNashodeComponent implements OnInit {
    users;
    constructor(private http: HttpClient) { }

    test(id){
        this.http.put('http://178.22.123.86/maapi/api/account/' + id, id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }

    ngOnInit() {
        this.http.get('http://178.22.123.86/maapi/api/account').subscribe(
            res => {
                this.users = res;
            }
        );
     }
}
