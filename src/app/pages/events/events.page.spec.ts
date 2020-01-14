import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPage } from './events.page';

describe('EventsComponent', () => {
  let component: EventsPage;
  let fixture: ComponentFixture<EventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
