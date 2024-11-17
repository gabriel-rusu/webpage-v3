import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Resume} from "./types/resume";
import {ThemeSelectorComponent} from "./components/theme-selector/theme-selector.component";
import {SectionComponent} from "./components/section/section.component";
import {JobPositionComponent} from "./components/job-position/job-position.component";
import {EducationDegreeComponent} from "./components/education-degree/education-degree.component";
import {DynamicTypingComponent} from "./components/dynamic-typing/dynamic-typing.component";
import {LoadingScreenComponent} from "./components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ThemeSelectorComponent,
    SectionComponent,
    JobPositionComponent,
    EducationDegreeComponent,
    DynamicTypingComponent,
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webpage-v3';
  resumeData!: Resume;

  constructor(private httpClient: HttpClient) {

  }


  ngOnInit(): void {
    this.httpClient.get('/resume-data.json').subscribe(((res: any) => {
      this.resumeData = res
      console.log('Here ?');
      console.log(res)
    }));
  }
}
