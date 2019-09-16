import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
    instrumextsType;



  constructor(private router: Router, private htttp : HttpClient) { }


  ngOnInit() {
    this.htttp.get('http://178.22.123.86/maapi/api/Instrumexts').subscribe(
          res => {
              this.instrumextsType = res;
          }
      );
  }
}