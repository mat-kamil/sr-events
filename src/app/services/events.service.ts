import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EventSearchQuery, Event} from '../models/events';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable()
export class EventsService {
  public allEvents = new BehaviorSubject<Event[]>([]);
  public searchTerm = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {
    /**
     * Search string is monitored for changes and then a query is made.
     * search is throttled to prevent bombarding the server
     */
    this.searchTerm.pipe(debounceTime(250)).subscribe(term => {
      this.searchEvents(term);
    });
  }
  
  /**
   * searchEvents gets all events based on search
   * @param search string The term to search for
   */
  public searchEvents(search: string) {
    this.getEvents({ search: search }).subscribe(data => {
      this.allEvents.next(data);
    });
    
  }
  
  /**
   * GET a list of events based on certain query params
   * @param query.page number The page number to go to
   * @param query.pageSize number The number of results to return
   * @param query.search string A search string to limit results
   */
  public getEvents(query: EventSearchQuery) {
    const page = query.page ? query.page + '' : '0';
    const pageSize = query.pageSize ? query.pageSize + '' : '500';
    const search = query.search ? query.search : '';

    return this.http.get<Event[]>(`${environment.api}/events?page=${page}&pageSize=${pageSize}&search=${search}`);
  }
  
  /**
   * TODO: this is not working due to CORS
   * TODO: this is not working due to CORS
   * TODO: this is not working due to CORS
   * TODO: this is not working due to CORS
   * TODO: this is not working due to CORS
   * @param id string the Event ID
   */
  public getEvent(id: string) {
    return this.http.get(`${environment.api}/event/${id}`);
  }
}
