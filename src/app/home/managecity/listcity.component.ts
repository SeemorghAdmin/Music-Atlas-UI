import { Component, OnInit } from '@angular/core';
import { CityServices } from '../../shared/citys.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'listcity',
    templateUrl: './listcity.component.html',
})
export class ListCityComponent implements OnInit {
    city;

    constructor(private service: CityServices, private toster: ToastrService) { }

    ngOnInit(): void {
        this.service.Get().subscribe(
            res => {
                this.city = res;
            }
        )
    }
}