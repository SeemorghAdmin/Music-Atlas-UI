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
    delete(id) {
        this.service.delete(id).subscribe(
            res => {
                if(res == true ){
                    window.location.reload();
                }
            }
        );
    }
    taed(id){
        this.http.put('http://178.22.123.86/maapi/api/ActiveInstrument/put?id=' + id, id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }
    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/ActiveInstrument/taed').subscribe(
            res => {
                this.ins = res;
            }
        );
    }
}
