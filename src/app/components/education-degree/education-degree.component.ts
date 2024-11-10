import {Component, Input} from '@angular/core';
import {EventComponent} from "../event/event.component";
import {EducationType} from "../../types/education.type";

@Component({
  selector: 'app-education-degree',
  standalone: true,
  imports: [
    EventComponent
  ],
  templateUrl: './education-degree.component.html',
  styleUrl: './education-degree.component.css'
})
export class EducationDegreeComponent {
  @Input({required: true}) education!: EducationType;
  @Input({required: true}) isNotLast!: boolean;

  get placeOfEducation() {
    return this.education.faculty + ', ' + this.education.university;
  }

}
