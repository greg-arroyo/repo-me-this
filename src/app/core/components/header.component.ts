import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rmt-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <svg
        width="98"
        height="96"
        xmlns="http://www.w3.org/2000/svg"
        aria-describedby="logo-title logo-descrip">
        <title id="logo-title">Octocat</title>
        <desc id="logo-descrip">
          GitHub's mascot with five octopus-like arms.
        </desc>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          fill="#fff" />
      </svg>
      <h1>
        Repo me this.
        <span>
          A user viewed some GitHub repositories. What was viewed first?
        </span>
      </h1>
      <nav>
        <a routerLink="/user">user</a>
        <a routerLink="/stats">stats</a>
        <a routerLink="/repos">repositories</a>
        <a routerLink="/gists">gists</a>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        display: grid;
        justify-items: center;
        margin: 0 10%;
        text-align: center;

        svg {
          margin: 3rem 0 2rem 0;
        }

        h1 {
          font-size: 2rem;
          color: #fff;
          text-align: center;

          span {
            font-size: 1rem;
            color: #fafafa;
            margin: 0.4rem 0;
            display: block;
          }
        }

        nav {
          display: grid;
          grid-auto-columns: auto;
          grid-auto-flow: column;

          a {
            padding: 3px 6px;
            text-decoration: none;
            color: #a19f9f;
          }
        }
      }
    `,
  ],
})
export class HeaderComponent {}
