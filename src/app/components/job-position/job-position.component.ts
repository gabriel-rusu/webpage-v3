import {Component, Input, OnInit} from '@angular/core';
import {EventComponent} from "../event/event.component";
import {Job} from "../../types/job";
import {isMobileDevice} from "../../commons/check.functions";

@Component({
  selector: 'app-job-position',
  standalone: true,
  imports: [
    EventComponent
  ],
  templateUrl: './job-position.component.html',
  styleUrl: './job-position.component.css'
})
export class JobPositionComponent implements OnInit {
  @Input({required: true}) job!: Job;
  @Input({required: true}) isNonLast!: boolean;
  moreInfo: boolean = true;
  isMobileDevice: boolean = false;

  ngOnInit() {
    this.isMobileDevice = isMobileDevice();
    this.moreInfo = !this.isMobileDevice;
  }
}
