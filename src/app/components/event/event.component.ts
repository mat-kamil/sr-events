import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../models/events';

@Component({
  selector: 'component-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() event: Event;
  constructor() { }
  
  getLocation(){
    let marker = "";
    if (this.event && this.event.location){
      const label = this.event.type.charAt(0);
      const lat = this.event.location.latitude;
      const long = this.event.location.longitude;
      marker += `&markers=label:${label}%7C${lat},${long}`;
    }
    return marker;
  }
}
