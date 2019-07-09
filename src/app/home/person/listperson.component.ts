import { PersonService } from '../../shared/person.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'listperson',
  templateUrl: './lisetperson.component.html',
  styles: []
})
export class PersonComponent implements OnInit {
  personDetails;



  constructor(private router: Router, private service: PersonService) { }

  ngOnInit() {
    this.service.getPerson().subscribe(
      res => {
        this.personDetails = res;
        console.log(res)
      },
      err => {
        console.log(err);
      },
    );
  }
}