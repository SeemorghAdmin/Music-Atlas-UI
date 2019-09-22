import { Component, OnInit } from '@angular/core';
import { MyPanelService } from './../../shared/mypanel.service';

@Component({
    selector: 'mypanel',
    templateUrl: './mypanel.component.html',
    styleUrls: ['./mypanel.component.css']
})
export class MyPanelComponent implements OnInit {
    constructor(private service: MyPanelService) { }
    mycount;
    danc;
    makt;
    kargah;
    musiclok;
    instru;
    typeins;
    typeaz;
    int;
    val;
    saz() {
        this.int = 1;
        this.service.getSaz().subscribe(
            res => {
                this.val = res;
            }
        )
    }
    typesaz(){
        this.int = 2;
        this.service.getTypeSaz().subscribe(
                res => {
                    this.val = res;
                }
        );
    }

    typeavaz(){
        this.int = 3;
        this.service.getTypeAvaz().subscribe(
            res => {
                this.val = res;
            }
        )
    }

    musicluc(){
        this.int = 4;
    }
    dancetable(){
        this.int = 5;
    }
    kargahsakht(){
        this.int = 6;
    }
    maktab(){
        this.int = 7;
    }

    
    ngOnInit(): void { 
        this.service.getCount().subscribe(
            res => {
                this.mycount = res;
                this.danc = this.mycount.danc;
                this.makt = this.mycount.makt;
                this.kargah = this.mycount.kargah;
                this.musiclok = this.mycount.musicLocks;
                this.instru = this.mycount.instru;
                this.typeins = this.mycount.typeIns;
                this.typeaz = this.mycount.typeAz;
            }
        )
    }
}
