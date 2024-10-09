import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() eventName: string = '';
  @Input() start: string = '';
  @Input() end: string = '';

}
