import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppLayout } from './layout/app/app.layout';
import { HeaderLayout } from './layout/header/header.layout';
import { FooterLayout } from './layout/footer/footer.layout';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import {RouterModule, Routes} from '@angular/router';
import {EventsPage} from './pages/events/events.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events'
  },
  {
    path: 'events',
    component: EventsPage,
    data: {
      name: 'Events',
      id: 'events',
      title: 'Events List'
    }
  }
];

@NgModule({
  declarations: [
    AppLayout,
    HeaderLayout,
    FooterLayout,
    EventsComponent,
    EventComponent,
    EventsPage,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sr-events' }),
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppLayout]
})
export class AppModule { }
