import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";

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
  private observer: IntersectionObserver | undefined;
  myHidden: boolean= true;
  show: boolean = false



  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) =>{
      entries.forEach(entry => {
        if(entry?.isIntersecting) {
          this.show = true;
          console.log(this.show);

        } else {
          this.show = false;
          console.log(this.show);
        }
      })
    })
    this.observer.observe(this.section.nativeElement)
  }

}
