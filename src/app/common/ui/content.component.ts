import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rmt-content',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <article>
        <router-outlet></router-outlet>
      </article>
    </main>
  `,
  styles: [
    `
      main {
        margin: 0 10%;

        article {
          display: grid;
          justify-items: center;
          background-color: #fff;
          padding: 1rem;
          border-radius: 0.9rem;
        }
      }
    `,
  ],
})
export class ContentComponent {}
