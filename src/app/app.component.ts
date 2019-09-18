import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular7';
  constructor(private auth: AuthGuard) { }
  login;
 
  Login(){
    setInterval(() => {
      if (localStorage.getItem('token') != null) {
        this.login = true; 
       
      }
      else{
        this.login = false;
       
      }
    }, 100);
  }


  ngOnInit() {
    
    setInterval(() => { this.Login(); }, 100);
 
  }
}
 