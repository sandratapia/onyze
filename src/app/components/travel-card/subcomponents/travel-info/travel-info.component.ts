import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TravelCard, TravelInfo } from 'src/app/models/models';
import { TravelCardService } from 'src/app/services/travel-card.service';

@Component({
  selector: 'travelInfo',
  templateUrl: '../travel-info/travel-info.component.html',
  styleUrls: ['../travel-info/travel-info.component.scss'],
})
export class TravelInfoComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public index: number = 0;
  private subscription: Subscription | undefined;

  public travelInfo: TravelInfo | undefined;
  public hiddenTravelInfo: boolean | undefined;

  constructor(private travelCardService: TravelCardService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.subscription) {
      this.subscription = this.travelCardService.travelCards.subscribe(
        (travelCards: TravelCard[]) => {
          this.travelInfo = travelCards[this.index].travelInfo;
          this.hiddenTravelInfo = travelCards[this.index].hiddenTravelInfo;
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
