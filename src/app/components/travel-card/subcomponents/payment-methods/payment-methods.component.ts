import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaymentMethod, TravelCard } from 'src/app/models/models';
import { TravelCardService } from 'src/app/services/travel-card.service';

@Component({
  selector: 'paymentMethods',
  templateUrl: '../payment-methods/payment-methods.component.html',
  styleUrls: ['../payment-methods/payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit, OnDestroy {
  @Input()
  public index: number = 0;

  private subscription: Subscription | undefined;

  public paymentMethods: PaymentMethod[] = [];

  constructor(private travelCardService: TravelCardService) { }

  ngOnInit(): void {
    this.subscription = this.travelCardService.travelCards.subscribe((travelCards: TravelCard[]) => {
      this.paymentMethods = travelCards[this.index].paymentMethods;
    });
  }

  activePayment (index: number) {
    console.error(this.index);
    this.cleanActivePayments();
    this.paymentMethods[index].isActive = true;
  }

  private cleanActivePayments() {
      this.paymentMethods.forEach( (paymentMethod) => {
        paymentMethod.isActive = false;
      });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
