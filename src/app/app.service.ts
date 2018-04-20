import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable() 
export class AppService {
  constructor(
    public http: HttpClient
  ) { }

  public getCards(): Observable<any> {
    const apiUrl = 'https://deckofcardsapi.com/api/deck/3tg42vyocnxj/shuffle/?cards=8C,8H,KD,KS,7C,7H,AD,AS';
    return this.http.get(apiUrl)
      .map((res) => {
        return res;
      });
  }

}

