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

  constructor(private appService: AppService) {
    this.title = 'la try';
  }

  ngOnInit(): void {
    this.renderCards();
  }

  public renderCards(): void {
    this.appService.getCards().subscribe(data => {
      console.log('llamada', data);
      this.data = data     
    });
  }

}