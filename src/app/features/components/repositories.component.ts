import { Component } from '@angular/core';

@Component({
  selector: 'rmt-repositories',
  standalone: true,
  imports: [],
  template: `
    <section>
      <b>Repository Info</b>
      <br />
      https://api.github.com/users/[username]/repos
    </section>
  `,
  styles: [],
})
export class RepositoriesComponent {}
