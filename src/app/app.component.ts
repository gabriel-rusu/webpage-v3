import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {EventComponent} from "./components/event/event.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, EventComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webpage-v3';

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
