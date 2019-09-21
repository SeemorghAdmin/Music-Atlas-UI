import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'userroletow',
    templateUrl: './userroletow.component.html'
})
export class UserRoleTowComponent implements OnInit {
    constructor(private http: HttpClient) { }
    userroletow;
    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/UserRoleTowTherry/roletwo').subscribe(
            res => {
                this.userroletow = res;
            }
        );
     }
}
