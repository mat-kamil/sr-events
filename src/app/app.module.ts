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
import {EventsService} from './services/events.service';
import {HttpClientModule} from '@angular/common/http';
import {EventPage} from './pages/event/event.page';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';
import {FromNowPipe} from './pipes/fromNow.pipe';

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
  },
  {
    path: 'events/:id',
    component: EventPage,
    data: {
      name: 'Event',
      id: 'event',
      title: 'Event'
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
    EventPage,
    UserComponent,
    CommentComponent,
    FromNowPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sr-events' }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [EventsService],
  bootstrap: [AppLayout]
})
export class AppModule { }
