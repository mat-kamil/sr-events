import {Component, Input} from '@angular/core';
import {User} from '../../models/events';

@Component({
  selector: 'component-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  constructor() { }
}
