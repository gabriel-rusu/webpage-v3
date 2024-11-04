import {Component, HostBinding, Input} from '@angular/core';
import {EventComponent} from "../event/event.component";
import {Job} from "../../types/job";

@Component({
  selector: 'app-job-position',
  standalone: true,
  imports: [
    EventComponent
  ],
  templateUrl: './job-position.component.html',
  styleUrl: './job-position.component.css'
})
export class JobPositionComponent {
  @Input({required: true}) job!: Job;
  @Input({required: true}) isNonLast!: boolean;

}
