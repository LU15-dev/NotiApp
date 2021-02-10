import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Noticia } from "src/app/components/noticia/modelo/noticia";

  const URL = "http://newsapi.org/v2/top-headlines?country=mx&apiKey=3b881a93d3c94cfd95dd13c97f64a5ff"; // URL to web api


@Injectable({
  providedIn: "root"
})
export class ApiService {
  
  constructor(private http: HttpClient) {}
  
   getNews() {
    return this.http.get<Noticia>(URL);
  }
}

