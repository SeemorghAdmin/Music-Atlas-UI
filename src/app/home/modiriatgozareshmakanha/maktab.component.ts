import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'maktab',
    templateUrl: './maktab.component.html',
    styles: []
})

export class MaktabComponent implements OnInit {
    readonly BaseURI = 'http://178.22.123.86/maapi/api';
    constructor( private toastr: ToastrService, private http: HttpClient) { }
    selectedArray: any = [];
    selectedArrayy: any = [];
    userDetails;
    maktab;
    userac;
    makt = {};
    t;
    selectMember(data) {
        if (data.checked != true) {
            this.selectedArray.push(data);
        } else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id !== data.id;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    }
    selectMemberr(data) {
        if (data.checked != true) {
            this.selectedArrayy.push(data);
        } else {
            let newArray = this.selectedArrayy.filter(function (el) {
                return el.typeOfMusic_id !== data.typeOfMusic_id;
            });
            this.selectedArrayy = newArray;
        }
        console.log(this.selectedArrayy);
    }






    ngOnInit() {

        this.http.get(this.BaseURI + '/TypeOfMusics').subscribe(res => {
            this.maktab = res;
            console.log(this.maktab);

        });
        this.http.get(this.BaseURI + '/Instrumexts').subscribe(ress => {

            this.userac = ress;
            console.log(this.userac);

        });

    }
    test(makt) {
        if (this.selectedArray[0] != null) {
            makt.saz1 = this.selectedArray[0].id;
        } else {
            makt.saz1 = 0;
        }
        if (this.selectedArray[1] != null) {
            makt.saz2 = this.selectedArray[1].id;
        } else {
            makt.saz2 = 0;
        }
        if (this.selectedArray[2] != null) {
            makt.saz3 = this.selectedArray[2].id;
        } else {
            makt.saz3 = 0;
        }
        if (this.selectedArray[3] != null) {
            makt.saz4 = this.selectedArray[3].id;
        } else {
            makt.saz4 = 0;
        }
        if (this.selectedArray[4] != null) {
            makt.saz5 = this.selectedArray[4].id;
        } else {
            makt.saz5 = 0;
        }
        if (this.selectedArray[5] != null) {
            makt.saz6 = this.selectedArray[5].id;
        } else {
            makt.saz6 = 0;
        }
        if (this.selectedArray[6] != null) {
            makt.saz7 = this.selectedArray[6].id;
        } else {
            makt.saz7 = 0;
        }

        if (this.selectedArrayy[0] != null) {
            makt.typeOfMusic_id1 = this.selectedArrayy[0].typeOfMusic_id;
        } else {
            makt.TypeOfMusic_id1 = 0;
        }
        if (this.selectedArrayy[1] != null) {
            makt.typeOfMusic_id2 = this.selectedArrayy[1].typeOfMusic_id;
        } else {
            makt.TypeOfMusic_id2 = 0;
        }
        if (this.selectedArrayy[2] != null) {
            makt.typeOfMusic_id3 = this.selectedArrayy[2].typeOfMusic_id;
        } else {
            makt.TypeOfMusic_id3 = 0;
        }

        if (this.selectedArrayy.length > 0) {

            if (this.selectedArray.length > 0) {
                if (makt.tell > 0) {
                    return this.http.post(this.BaseURI + '/Maktabs', makt).subscribe(res => {
                        console.log(res)
                        if (res == true) {
                            window.location.reload();
                        }
                    });

                }
                else {
                    this.t = 1;
                }
            }
            else {
                this.t = 2;
            }
        }
        else {
            this.t = 3;
        }

        console.log(makt);
    }
}
