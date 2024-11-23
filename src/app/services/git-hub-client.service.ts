import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GitHubProject} from "../types/github-projects.type";

@Injectable({
  providedIn: 'root'
})
export class GitHubClientService {

  constructor(private httpClient: HttpClient) { }

  getProjects(username: string): Observable<GitHubProject[]> {
    return this.httpClient.get<GitHubProject[]>(`https://api.github.com/users/${username}/repos`);
  }
}
