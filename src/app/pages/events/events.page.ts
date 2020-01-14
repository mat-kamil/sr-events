import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss']
})
export class EventsPage implements OnInit {
  searchTerm = new BehaviorSubject("");
  constructor() { }
  
  onSearchChange(searchVal: string) {
    this.searchTerm.next(searchVal);
  }

  ngOnInit() {
  }

}
