import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { ApiService } from 'src/app/shared/services/api.service';
import { Noticia } from '../noticia/modelo/noticia';
//import { ApiService } from "../../shared/services/api.service";
//import { Noticia } from '../noticia/modelo/noticia';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  
export class DashboardComponent implements OnInit {
   noticia: Noticia;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private apiservice: ApiService

  ) { }

  ngOnInit() {
    this.getNews();
   }

    async getNews() {
    await this.apiservice.getNews().toPromise()
      .then(result => {
        this.noticia = result;
      console.log(this.noticia)
      })
      .catch(error => {
        console.log(error);
    }) 
      
  }

}

