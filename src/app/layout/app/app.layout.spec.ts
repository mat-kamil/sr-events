import { TestBed, async } from '@angular/core/testing';
import { AppLayout } from './app.layout';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppLayout
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppLayout);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sr-events'`, () => {
    const fixture = TestBed.createComponent(AppLayout);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sr-events');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppLayout);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('sr-events app is running!');
  });
});
