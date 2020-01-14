import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPage } from './event.page';

describe('EventsComponent', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
