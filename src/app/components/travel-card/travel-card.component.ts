import { Component, OnInit } from '@angular/core';

import {
  TravelCard,
} from 'src/app/models/models';
import { TravelCardService } from 'src/app/services/travel-card.service';

@Component({
  selector: 'travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss'],
})
export class TravelCardComponent implements OnInit {
  
  public index: number = 0;

  constructor(private travelCardService: TravelCardService) {}

  ngOnInit(): void {
    this.index = this.travelCardService.getIndex();
  }

  changeCheckedValue(hidden: boolean) {
    let travelCards: TravelCard[] = [];
    const suscription = this.travelCardService.travelCards.subscribe((travelCardsFromService: TravelCard[]) => {
      travelCards = travelCardsFromService;
      travelCards[this.index].hiddenTravelInfo = hidden;
    });
    this.travelCardService.setTravelCards(travelCards);
    suscription.unsubscribe();   
  }
}
