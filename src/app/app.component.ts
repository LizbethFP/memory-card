import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

const unShuffledCards = ['http://deckofcardsapi.com/static/img/AS.png', 'http://deckofcardsapi.com/static/img/AH.png', 'http://deckofcardsapi.com/static/img/8H.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/7C.png', 'https://deckofcardsapi.com/static/img/7D.png', 'https://deckofcardsapi.com/static/img/QD.png', 'https://deckofcardsapi.com/static/img/QS.png'];

// const shuffledCards = () => {
//   let temp = [];
//   // temp.push(unShuffledCards[Math.floor(Math.random() * unShuffledCards.length)]);
//   for (var i = 0; i < unShuffledCards.length; i++) {
//     temp.push(Math.floor(Math.random() * unShuffledCards.length));
//   }
//   console.log(temp);
//   return temp;
// };

const shuffledCards = (arra1) => {
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  console.log(arra1);
  return arra1;
}


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
  // public unShuffledCards: Array<string>;
  // public shuffledCards: any;
  public cards: Array<string>;
  showCard: boolean;
  hideCard: boolean;
 
  constructor(private appService: AppService) {
    this.title = 'Cards Memory';
    this.cards = shuffledCards(unShuffledCards);
    this.showCard = false;
    this.hideCard = true;
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

  toggleCards() {
    // this.showCard = true;
    // this.hideCard = false;
    this.showCard = !this.showCard;
    this.hideCard = !this.hideCard;
    console.log('toggleCards Works');    
  }

  toggleCardsBack() {
    // this.showCard = true;
    // this.hideCard = false;
    this.showCard = !this.showCard;
    this.hideCard = !this.hideCard;
    console.log('toggleCardsBack Works');    
  }

}