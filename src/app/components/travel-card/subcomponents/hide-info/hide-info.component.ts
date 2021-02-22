import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hideInfo',
  templateUrl: '../hide-info/hide-info.component.html',
  styleUrls: ['../hide-info/hide-info.component.scss']
})
export class HideInfoComponent implements OnInit {
  @Output()
  public isChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  emitCheckedInfo (event:any) {
    this.isChecked.emit(event.target.checked);
  }
}
