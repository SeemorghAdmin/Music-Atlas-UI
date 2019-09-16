import { Component, OnInit } from '@angular/core';
import { StateService } from './../../shared/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'liststate',
    templateUrl: './liststate.component.html',
})
export class ListStateComponent implements OnInit {
    state;

    constructor(private service: StateService, private toster: ToastrService) { }

    ngOnInit(): void {
        this.service.Get().subscribe(
            res =>{
                this.state = res;
            }
        )
     } 
}
