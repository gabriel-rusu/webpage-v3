import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {animateEntryForElement} from "../../commons/animation.functions";

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements AfterViewInit {
  @Input({required: false}) sectionName?: string;
  // @HostBinding('class') classes: any = {'hidden': true}
  @ViewChild('sectionContent') section: any;
  myHidden: boolean = true;
  show: boolean = false
  animate = animateEntryForElement.bind(this)


  ngAfterViewInit(): void {
    this.animate(this.section.nativeElement)
  }

}
