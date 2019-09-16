import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'manageuser',
    templateUrl: './manageuser.component.html',
})
export class ManageUserComponent implements OnInit {
    users;
    constructor(private http: HttpClient) { }


   

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/ManageUser').subscribe(
            res => {
                console.log(res);
                this.users = res;
            }
        )
    }
}
