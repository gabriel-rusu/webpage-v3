export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  updated_at: Date;
  forks: number;
}
