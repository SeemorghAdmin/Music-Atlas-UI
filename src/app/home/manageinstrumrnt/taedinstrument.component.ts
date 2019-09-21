import { Component, OnInit } from '@angular/core';
import { InstrumextsService } from './../../shared/instrumexts.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'taedinstrument',
    templateUrl: './taedinstrument.component.html',
})
export class TaedInstrumentComponent implements OnInit {
    constructor(private service: InstrumextsService, private http: HttpClient) { }
    ins;
    taed(id){
        this.http.put('http://localhost:54277/api/ActiveInstrument/put', id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }
    ngOnInit(): void {
        this.http.get('http://localhost:54277/api/ActiveInstrument/taed').subscribe(
            res => {
                this.ins = res;
            }
        );
    }
}
