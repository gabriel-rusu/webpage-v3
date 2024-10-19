import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {EventComponent} from "./components/event/event.component";
import {HttpClient} from "@angular/common/http";
import {Resume} from "./models/resume";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, EventComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webpage-v3';
  resumeData!: Resume;

  constructor(private httpClient: HttpClient) {

  }


  ngOnInit(): void {
    this.httpClient.get('/resume-data.json').subscribe(((res: any) => {this.resumeData = res}));

  }


  changeTheme() {
    console.log('Here ?');
    console.log(document.getElementsByTagName('html'))
    const htmlTag = document.getElementsByTagName('html').item(0);
    if (htmlTag?.classList.contains('dark')) {
      htmlTag.classList.remove('dark')
    } else if (htmlTag) {
      htmlTag.classList.add('dark');
    }
  }
}
