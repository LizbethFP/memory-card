import { Component } from '@angular/core';

@Component ({
selector : 'gameinfo',
templateUrl : './gameinfo.component.html',
styleUrls: ['./gameinfo.component.css']
})

export class GameInfoComponent {
  public turns : string;
  public currency : string;
  public time : string;
  
  constructor() {
    this.turns = 'turns';
    this.currency = '$';
    this.time = 'time';
  }
}