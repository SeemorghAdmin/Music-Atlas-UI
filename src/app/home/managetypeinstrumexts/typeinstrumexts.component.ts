import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TypeInstrumextsService } from './../../shared/typeinstrumexts.service';


@Component({
    selector: 'typeinstrumexts',
    templateUrl: './typeinstrumexts.component.html',
    styles: []
})
export class TypeInstrumextsType implements OnInit {
    instrumextsType;



    constructor(private router: Router, private service: TypeInstrumextsService) { }

    delete(id) {
        this.service.delete(id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        );
    }

    ngOnInit() {
        this.service.getReport().subscribe(
            res => {
                this.instrumextsType = res;
            },
            err => {
                console.log(err);
            },
        );
    }
}
