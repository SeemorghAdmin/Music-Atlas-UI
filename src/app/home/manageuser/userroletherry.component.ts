import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'userroletherry',
    templateUrl: './userroletherry.component.html'
})
export class UserRoleTherryComponent implements OnInit {
    constructor(private http: HttpClient) { }
    userroletherry;
    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/UserRoleTowTherry/roletherry').subscribe(
            res => {
                this.userroletherry = res;
            }
        );
     }
}
