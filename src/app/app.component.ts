import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from './core';
import { ContentComponent } from './features';

@Component({
  selector: 'rmt-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  template: `
    <rmt-header></rmt-header>
    <rmt-content></rmt-content>
    <rmt-footer></rmt-footer>
  `,
  styles: [],
})
export class AppComponent {}
