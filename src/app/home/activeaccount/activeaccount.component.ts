import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'activeaccount',
    templateUrl: './activeaccount.component.html',
})
export class ActiveAccountComponent implements OnInit {
    constructor(private http : HttpClient) { }
    userac;
    test(id){
        this.http.put('http://178.22.123.86/maapi/api/ActiveAccount/' + id, id).subscribe(res => {
            if (res == true) {
                window.location.reload();
            }
        });
      
    }

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/ActiveAccount').subscribe(res =>{ 
            this.userac = res;
    });
        
     }
}
