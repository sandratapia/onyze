import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { PassengerInfo, PaymentMethod, TravelCard } from 'src/app/models/models';
import { TravelCardService } from 'src/app/services/travel-card.service';

@Component({
  selector: 'passengerInfo',
  templateUrl: '../passenger-info/passenger-info.component.html',
  styleUrls: ['../passenger-info/passenger-info.component.scss']
})
export class PassengerInfoComponent implements OnInit, OnDestroy {
  @Input()
  public index: number = 0;

  private subscription: Subscription | undefined;
  public passengerInfo: PassengerInfo | undefined;
  
  constructor(private travelCardService: TravelCardService) { }

  ngOnInit(): void {
    this.subscription = this.travelCardService.travelCards.subscribe((travelCards: TravelCard[]) => {
      this.passengerInfo = travelCards[this.index].passengerInfo
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
