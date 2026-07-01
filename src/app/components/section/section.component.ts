import {AfterViewInit, Component, computed, inject, Input, signal, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {animateEntryForElement} from "../../commons/animation.functions";
import {LoadingScreenService} from "../../services/loading-screen.service";



@Component({
  selector: 'app-section',
  imports: [NgClass],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements AfterViewInit {
  @Input({required: false}) sectionName?: string;
  @ViewChild('sectionContent') section: any;
  show = signal(false);
  protected loadingScreen = inject(LoadingScreenService);

  ngAfterViewInit(): void {
    animateEntryForElement(this.section.nativeElement, this.show);
  }
}
