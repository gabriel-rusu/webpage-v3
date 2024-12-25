import {Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.css',
  host :{
    'class': 'absolute right-4 top-4'
  }
})
export class ThemeSelectorComponent implements OnInit {
  isDarkTheme: boolean = true;
  isDarkMode: boolean = false;
  @ViewChild('toggle') toggle: any;

  ngOnInit(): void {
    const userSelectedTheme = localStorage.getItem('theme')
    if (userSelectedTheme != null && userSelectedTheme == 'light') {
      setTimeout(() => {
        this.changeMode();
      }, 10);
    }
  }


  changeTheme() {
    const htmlTag = document.getElementsByTagName('html').item(0);
    if (htmlTag?.classList.contains('dark')) {
      htmlTag.classList.remove('dark')
      this.isDarkTheme = false;
      localStorage.setItem('theme', 'light');
    } else if (htmlTag) {
      htmlTag.classList.add('dark');
      this.isDarkTheme = true;
      localStorage.setItem('theme', 'dark');
    }
  }

  mode() {
    return "" + this.isDarkMode;
  }

  changeMode() {
    const isChecked = this.toggle.nativeElement.getAttribute('aria-checked') === 'true';
    // Toggle the state
    this.toggle?.nativeElement.setAttribute('aria-checked', !isChecked);
    this.changeTheme()
  }
}
