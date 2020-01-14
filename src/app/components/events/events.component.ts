import {Component, Input, OnDestroy} from '@angular/core';
import { Event } from '../../models/events';
import {EventsService} from '../../services/events.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'component-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnDestroy {
  markers = new BehaviorSubject<string>(void 0);
  events = new BehaviorSubject<Event[]>([]);
  searchTerm = new BehaviorSubject<string>("");
  @Input() set searchTermInput(term: string) { this.searchTerm.next(term); }
  subs = [];
  
  constructor(private eventsService: EventsService) {
    const sub = eventsService.allEvents.subscribe(async data => {
      this.events.next(data);
  
      /**
       * Add markers to map
       */
      let markers = "";
      await data.map(e => {
        if (e.location) {
          const label = e.type.charAt(0);
          const lat = e.location.latitude;
          const long = e.location.longitude;
          markers += `&markers=label:${label}%7C${lat},${long}`;
        }
      });
      this.markers.next(markers);
    });
    const sub2 = this.searchTerm.subscribe(term => {
      this.eventsService.searchTerm.next(term);
    });
    this.subs.push(sub, sub2);
  }
  
  onSearchChange(searchVal: string) {
  }
  
  ngOnDestroy() {
    this.subs.map(e => e.unsubscribe());
  }

}
