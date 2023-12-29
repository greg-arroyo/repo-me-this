import { Component } from '@angular/core';

@Component({
  selector: 'rmt-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>footer</footer>
  `,
  styles: [
    `
      footer {
        display: grid;
        justify-items: center;
        margin: 1rem 0 3rem 0;
        color: #939393;
      }
    `,
  ],
})
export class FooterComponent {}
