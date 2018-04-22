import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';

@Component ({
  selector: 'deck',
  templateUrl : './deck.component.html',
  providers: [
    AppService
  ],
  styleUrls: ['./deck.component.css']
})

export class DeckComponent {
  data: any = {};
  public cards: Array<string>;
  showCard: boolean;
  hideCard: boolean;
  
  constructor(private appService: AppService) {
    this.showCard = false;
    this.hideCard = true;
    this.cards = ['http://deckofcardsapi.com/static/img/AS.png', 'http://deckofcardsapi.com/static/img/AH.png', 'http://deckofcardsapi.com/static/img/8H.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/7C.png', 'https://deckofcardsapi.com/static/img/7D.png', 'https://deckofcardsapi.com/static/img/QD.png', 'https://deckofcardsapi.com/static/img/QS.png'];
  }

  ngOnInit(): void {
    this.renderCards();
    this.toggleCards();
    this.toggleCardsBack();
  }

  public renderCards(): void {
    this.appService.getCards().subscribe(data => {
      console.log('llamada', data);
      console.log(data.remaining);
      this.data = data
    });
  }

  toggleCards(): void {
    // this.showCard = true;
    // this.hideCard = false;
    this.showCard = !this.showCard;
    this.hideCard = !this.hideCard;
    console.log('toggleCards Works');
  }

  toggleCardsBack(): void {
    // this.showCard = true;
    // this.hideCard = false;
    this.showCard = !this.showCard;
    this.hideCard = !this.hideCard;
    console.log('toggleCardsBack Works');
  }
}