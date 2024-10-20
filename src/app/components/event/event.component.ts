import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() eventName: string = '';
  @Input() start: string = '';
  @Input() end: string = '';
  @Input() isLast!: boolean;
  @Input() institution: string = '';
}
