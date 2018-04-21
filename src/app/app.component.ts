import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    AppService
  ],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  data: any = {};
  public title: string;
  public cards: Array<string>;
 
  constructor(private appService: AppService) {
    this.title = 'la try';
    this.cards = ['http://deckofcardsapi.com/static/img/AS.png', 'http://deckofcardsapi.com/static/img/AH.png', 'http://deckofcardsapi.com/static/img/8H.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/7C.png', 'https://deckofcardsapi.com/static/img/7D.png', 'https://deckofcardsapi.com/static/img/QD.png', 'https://deckofcardsapi.com/static/img/QS.png'];
  }

  ngOnInit(): void {
    this.renderCards();
  }

  public renderCards(): void {
    this.appService.getCards().subscribe(data => {
      console.log('llamada', data);
      console.log(data.remaining);
      
      this.data = data     
    });
  }

}