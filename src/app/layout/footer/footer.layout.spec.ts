import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLayout } from './footer.layout';

describe('FooterComponent', () => {
  let component: FooterLayout;
  let fixture: ComponentFixture<FooterLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
