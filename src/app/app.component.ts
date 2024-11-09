import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {EventComponent} from "./components/event/event.component";
import {HttpClient} from "@angular/common/http";
import {Resume} from "./types/resume";
import {ThemeSelectorComponent} from "./components/theme-selector/theme-selector.component";
import {SectionComponent} from "./components/section/section.component";
import {JobPositionComponent} from "./components/job-position/job-position.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, EventComponent, NgForOf, ThemeSelectorComponent, SectionComponent, JobPositionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webpage-v3';
  resumeData!: Resume;
  age: any = new Date().getFullYear() - new Date(1998, 0).getFullYear();

  constructor(private httpClient: HttpClient) {

  }


  ngOnInit(): void {
    this.httpClient.get('/resume-data.json').subscribe(((res: any) => {
      this.resumeData = res
    }));
  }
}
