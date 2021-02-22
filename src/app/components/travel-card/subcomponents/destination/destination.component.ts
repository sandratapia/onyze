import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Destination, TravelCard } from 'src/app/models/models';
import { TravelCardService } from 'src/app/services/travel-card.service';

@Component({
  selector: 'destination',
  templateUrl: '../destination/destination.component.html',
  styleUrls: ['../destination/destination.component.scss']
})
export class DestinationComponent implements OnInit, OnDestroy {
  @Input()
  public index: number = 0;

  private subscription: Subscription | undefined;
  public destination: Destination | undefined;

  constructor(private travelCardService: TravelCardService) { }

  ngOnInit(): void {
    this.subscription = this.travelCardService.travelCards.subscribe((travelCards: TravelCard[]) => {
      this.destination = travelCards[this.index].destination;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
