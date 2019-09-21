import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'activeinstrument',
    templateUrl: './activeinstrument.component.html',
})
export class ActiveInstrumentComponent implements OnInit {
    constructor(private http: HttpClient) { }
    ins;
    ngOnInit(): void {
        this.http.get('http://localhost:54277/api/ActiveInstrument/taed').subscribe(
            res => {
                 this.ins = res;
            }
        );
     }
}
