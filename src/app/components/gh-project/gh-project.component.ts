import {Component, Input} from '@angular/core';
import {GitHubProject} from "../../types/github-projects.type";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gh-project',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage
  ],
  templateUrl: './gh-project.component.html',
  styleUrl: './gh-project.component.css'
})
export class GhProjectComponent {
  @Input({required: true}) project!: GitHubProject;

}
