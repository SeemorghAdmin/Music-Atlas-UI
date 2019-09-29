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
        this.service.getMusicLoc().subscribe(
            res => {
                this.val = res;
            }
        )
    }
    dancetable(){
        this.int = 5;
        this.service.getDancetable().subscribe(
            res => {
                this.val = res;
               
            }
        );
    }
    kargahsakht(){
        this.int = 6;
        this.service.getKargah().subscribe(
            res => {
                this.val = res;
                
            }
        )
    }
    maktab(){
        this.int = 7;
        this.service.getMaktab().subscribe(
            res => {
                this.val = res;
            }
        )
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
