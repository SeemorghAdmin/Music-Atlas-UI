import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'taeduserostani',
    templateUrl: './taenuserostani.component.html',
})
export class TaenKarbaranComponent implements OnInit {
    users;
    constructor(private http: HttpClient) { }
    

    test(id) {
        this.http.put('http://178.22.123.86/maapi/api/TaedUserOstani/' + id, id).subscribe(
            res => {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }

    ngOnInit(): void { 
        this.http.get('http://178.22.123.86/maapi/api/account').subscribe(
            res => {
                this.users = res;
            }
        );

        
    }
}
