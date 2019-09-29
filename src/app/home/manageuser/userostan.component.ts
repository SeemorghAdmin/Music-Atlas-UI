import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'userostan',
    templateUrl: './userostan.component.html',
})
export class UserOstanComponent implements OnInit {
    constructor(private http: HttpClient) { }
    val;
    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/UserOstan').subscribe(
            res => {
                this.val = res;
            }
        );
    }
}
