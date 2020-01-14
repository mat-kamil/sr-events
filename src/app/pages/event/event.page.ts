import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Subject} from 'rxjs';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss']
})
export class EventPage implements OnDestroy {
  event = new Subject();
  subs = [];
  
  constructor(private eventsService: EventsService, public route: ActivatedRoute) {
    const sub = this.route.paramMap.subscribe( paramMap => {
      const sub2 = eventsService.getEvent(paramMap.get('id')).subscribe(data => {
        this.event.next(data);
      });
      this.subs.push(sub2);
    });
    this.subs.push(sub);
  }
  
  ngOnDestroy() {
    this.subs.map(e => e.unsubscribe());
  }
}
