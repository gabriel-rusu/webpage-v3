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
import {GitHubClientService} from "./services/git-hub-client.service";
import {GitHubProject} from "./types/github-projects.type";
import {GhProjectComponent} from "./components/gh-project/gh-project.component";

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
    LoadingScreenComponent,
    GhProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webpage-v3';
  resumeData!: Resume;
  allProjects: GitHubProject[] = [];
  mostStarredProjects: GitHubProject[] = [];
  recentlyUpdatedProjects: GitHubProject[] = [];


  constructor(private httpClient: HttpClient, private githubClient: GitHubClientService) {

  }


  ngOnInit(): void {
    this.httpClient.get('/resume-data.json').subscribe(((res: any) => {
      this.resumeData = res
      console.log('Here ?');
      console.log(res)
    }));

    this.githubClient.getProjects('gabriel-rusu').subscribe((projects) => {
      console.log(projects);
      projects.forEach(project => project.updated_at = new Date(project.updated_at))
      projects = projects.filter(project => project.description &&  project.description?.length > 0 && !project.description.includes('work in progress'));
      this.allProjects =
      projects.sort((a, b) => b.stargazers_count - a.stargazers_count)
      this.mostStarredProjects = projects.filter((project, index) => index < 3);
      this.recentlyUpdatedProjects = projects.sort((a, b) =>
        b.updated_at.getTime() - a.updated_at.getTime()).filter((project, index) => index < 3);
    })
  }
}
