import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url: string = "https://tasty.p.rapidapi.com/recipes/list";
  private apikey: string = "494d77e66dmshe0d812fa8e9a7a7p167803jsnb4950bbef3ee";

  getRecipes(): Observable<Result> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apikey,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    })

    const params = new HttpParams()
      .set('from', '0')
      .set('size', '20')
      .set('tags', 'under_30_minutes');

      return this.http.get<Result>(this.url, {headers, params});
  }

  constructor(private http: HttpClient) { }
}
