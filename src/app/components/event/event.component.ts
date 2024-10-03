import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() eventName: string = '';
  @Input() start: string = '';
  @Input() end: string = '';

}
