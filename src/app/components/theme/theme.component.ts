import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
    selector: 'app-theme',
    imports: [CommonModule, MatIconModule],
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.css'],
})
export class ThemeComponent  implements OnInit{
    isDarkMode = false;
  isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const theme = localStorage.getItem('theme');
      this.isDarkMode = theme === 'dark';
      this.updateThemeClass();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.updateThemeClass();
    }
  }

  updateThemeClass(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
  
}