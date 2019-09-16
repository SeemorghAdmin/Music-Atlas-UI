import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'modiriryatgozaresh',
    templateUrl: './modiriryatgozaresh.component.html',
})
export class ModiryatGozareshComponent implements OnInit {
    constructor(private http: HttpClient) { }


    gozaresh;


    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/FormGozaresh').subscribe(
            res => {
                this.gozaresh = res;
                console.log(res);
            }
        )
    }
}