import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get('https://udem.herokuapp.com/heroes');
  }
}
