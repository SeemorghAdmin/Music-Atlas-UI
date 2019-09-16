import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
    selector: 'detialsinstrumexts',
    templateUrl: './detialsinstrumexts.component.html',
    
})
export class DetialsInstrumextsComponent implements OnInit {
    id;
    instrumexts;
    constructor( private _Activatedroute:ActivatedRoute, private http: HttpClient) { this.id = this._Activatedroute.snapshot.paramMap.get("id"); }

    ngOnInit() {
        this.http.get('http://178.22.123.86/maapi/api/Instrumexts/' + this.id).subscribe(
            res => {
                this.instrumexts = res;
            }
        );
     }
}
