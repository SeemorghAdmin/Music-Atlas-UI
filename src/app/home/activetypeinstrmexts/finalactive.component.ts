import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'finalactive',
    templateUrl: './finalactive.component.html',

})
export class FinalActiveComponent implements OnInit {
    constructor(private http: HttpClient) { }

    type;

    test(id){
        this.http.put('http://178.22.123.86/maapi/api/AvtiveTypeInstrumexts/' + id , id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/AvtiveTypeInstrumexts').subscribe(
            res => {
                this.type = res;
            }
        )
     }
}
