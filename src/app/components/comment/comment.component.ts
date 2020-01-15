import {Component, Input} from '@angular/core';
import {EventComment} from '../../models/events';

@Component({
  selector: 'component-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: EventComment;
  constructor() { }
}
