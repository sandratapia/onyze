import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerInfoComponent } from './subcomponents/passenger-info/passenger-info.component';
import { PaymentMethodsComponent } from './subcomponents/payment-methods/payment-methods.component';
import { HideInfoComponent } from './subcomponents/hide-info/hide-info.component';
import { DestinationComponent } from './subcomponents/destination/destination.component';
import { TravelInfoComponent } from './subcomponents/travel-info/travel-info.component';
import { TravelCardComponent } from './travel-card.component';
import { TravelCardService } from 'src/app/services/travel-card.service';



@NgModule({
  declarations: [
    PassengerInfoComponent,
    PaymentMethodsComponent,
    HideInfoComponent,
    DestinationComponent,
    TravelInfoComponent,
    TravelCardComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports : [
    PassengerInfoComponent,
    PaymentMethodsComponent,
    HideInfoComponent,
    DestinationComponent,
    TravelInfoComponent,
    TravelCardComponent,
  ],
  providers: [TravelCardService]
})
export class TravelCardModule { }
