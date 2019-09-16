import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReportService } from './../../shared/report.service';
import { ToastrService } from 'ngx-toastr';
import { UploadComponent } from './../upload/upload.component'
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Component({
    selector: 'dance',
    templateUrl: './dance.component.html',
    styles: []
})

export class DanceComponent implements OnInit {
    readonly BaseURI = 'http://178.22.123.86/maapi/api';
    constructor(public service: ReportService, private toastr: ToastrService, private http: HttpClient) { }
    selectedArray: any = [];


    selectMember(data) {
        if (data.checked == true) {
            this.selectedArray.push(data);
        } else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id !== data.id;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    }
    userac;


    test;
    t;

    rule = {};
    public response: { dbPath: '' };
    public uploadFinished = (event) => {
        this.response = event;
    };


    post(rule) {

        if (this.selectedArray[0] != null) {
            rule.saz1 = this.selectedArray[0].id;
        } else {
            rule.saz1 = 0;
        }
        if (this.selectedArray[1] != null) {
            rule.saz2 = this.selectedArray[1].id;
        } else {
            rule.saz2 = 0;
        }
        if (this.selectedArray[2] != null) {
            rule.saz3 = this.selectedArray[2].id;
        } else {
            rule.saz3 = 0;
        }
        if (this.selectedArray[3] != null) {
            rule.saz4 = this.selectedArray[3].id;
        } else {
            rule.saz4 = 0;
        }
        if (this.selectedArray[4] != null) {
            rule.saz5 = this.selectedArray[4].id;
        } else {
            rule.saz5 = 0;
        }
        if (this.selectedArray[5] != null) {
            rule.saz6 = this.selectedArray[5].id;
        } else {
            rule.saz6 = 0;
        }
        if (this.selectedArray[6] != null) {
            rule.saz7 = this.selectedArray[6].id;
        } else {
            rule.saz7 = 0;
        }
        if (this.selectedArray[7] != null) {
            rule.saz8 = this.selectedArray[7].id;
        } else {
            rule.saz8 = 0;
        }
        if (this.selectedArray[8] != null) {
            rule.saz9 = this.selectedArray[8].id;
        } else {
            rule.saz9 = 0;
        }
        if (this.selectedArray[9] != null) {
            rule.saz10 = this.selectedArray[9].id;
        } else {
            rule.saz10 = 0;
        }

        console.log(rule);
        if (this.selectedArray.length > 0) {

            if (rule.tell > 0) {

                return this.http.post(this.BaseURI + '/DanceTables', rule).subscribe(res => {
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


    ngOnInit() {
        this.service.formModelReport.reset();
        return this.http.get(this.BaseURI + '/Instrumexts').subscribe(res => {

            this.userac = res;
            console.log(this.userac.active);

        });
    }

    onSubmit() {
        this.service.formModelReport.value.FileUrl = this.response.dbPath
        this.service.AddReport().subscribe(
            (res: any) => {
                if (res) {
                    this.service.formModelReport.reset();
                    this.toastr.success('ثبت گزارش انجام شد');
                } else {
                    res.errors.forEach(element => {
                        switch (element.code) {
                            case 'DuplicateUserName':
                                this.toastr.error('خطای رخ داده است', 'ثبت گزارش نشد');
                                break;

                            default:
                                this.toastr.error(element.description, 'ثبت نام انجام نشد');
                                break;
                        }
                    });
                }
            },
            err => {
                console.log(err);
            }
        );
    }


}
