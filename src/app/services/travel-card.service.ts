import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TravelCardModule } from '../components/travel-card/travel-card.module';
import { INITIAL_TRAVEL_CARDS } from '../constants/constants';
import { TravelCard } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TravelCardService {

  private _travelCards: BehaviorSubject<TravelCard[]> = new BehaviorSubject<TravelCard[]>(INITIAL_TRAVEL_CARDS);
  public travelCards: Observable<TravelCard[]> = this._travelCards.asObservable();

  private componentIndex: number = 0;

  constructor() { 
  }

  public setTravelCards(travelCards: TravelCard[]) {
    this._travelCards.next(travelCards);
  }

  public getIndex() {
    this.componentIndex ++;
    return this.componentIndex - 1;
  }
}
