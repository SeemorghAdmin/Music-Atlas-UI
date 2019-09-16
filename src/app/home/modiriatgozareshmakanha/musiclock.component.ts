import { ReportService } from '../../shared/report.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
    selector: 'musiclock',
    templateUrl: './musiclock.component.html',
    styles: []
})
export class MusicLockComponent implements OnInit {

    readonly BaseURI = 'http://178.22.123.86/maapi/api';


    constructor(private router: Router, private service: ReportService, private http: HttpClient) { }
    selectedArray = [];


    selectMember(data) {
       
        if (data.checked == true) {
            this.selectedArray.push(data);
        } else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id != data.id;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    }

    test = {};
    userac;
    t;
    post(test) {

        if (this.selectedArray[0] != null) {
            test.saz1 = this.selectedArray[0].id;
        } else {
            test.saz1 = 0;
        }
        if (this.selectedArray[1] != null) {
            test.saz2 = this.selectedArray[1].id;
        } else {
            test.saz2 = 0;
        }
        if (this.selectedArray[2] != null) {
            test.saz3 = this.selectedArray[2].id;
        } else {
            test.saz3 = 0;
        }
        if (this.selectedArray[3] != null) {
            test.saz4 = this.selectedArray[3].id;
        } else {
            test.saz4 = 0;
        }
        if (this.selectedArray[4] != null) {
            test.saz5 = this.selectedArray[4].id;
        } else {
            test.saz5 = 0;
        }
        if (this.selectedArray[5] != null) {
            test.saz6 = this.selectedArray[5].id;
        } else {
            test.saz6 = 0;
        }
        if (this.selectedArray[6] != null) {
            test.saz7 = this.selectedArray[6].id;
        } else {
            test.saz7 = 0;
        }



        console.log(test);
        if (this.selectedArray.length > 0) {

            if (test.telefon > 0) {


                return this.http.post(this.BaseURI + '/MusicLocks', test).subscribe(res => {
                    if (res == true) {
                        window.location.reload();
                    }
                });
            }
            else {
                this.t = 1
            }
        }
        else {
            this.t = 2;
        }



    }


    ngOnInit() {
        this.service.formModelReport.reset();
        return this.http.get(this.BaseURI + '/Instrumexts').subscribe(res => {

            this.userac = res;


        });


    }

}
