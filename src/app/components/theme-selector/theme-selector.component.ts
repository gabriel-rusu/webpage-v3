import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.css'
})
export class ThemeSelectorComponent {
   isDarkTheme: boolean = true;


  changeTheme() {
    console.log('Here ?');
    console.log(document.getElementsByTagName('html'))
    const htmlTag = document.getElementsByTagName('html').item(0);
    if (htmlTag?.classList.contains('dark')) {
      htmlTag.classList.remove('dark')
      this.isDarkTheme = false;
    } else if (htmlTag) {
      htmlTag.classList.add('dark');
      this.isDarkTheme = true;
    }
  }

}
