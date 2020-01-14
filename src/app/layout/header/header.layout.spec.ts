import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayout } from './header.layout';

describe('HeaderComponent', () => {
  let component: HeaderLayout;
  let fixture: ComponentFixture<HeaderLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
