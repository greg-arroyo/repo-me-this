import { Component } from '@angular/core';

@Component({
  selector: 'rmt-gists',
  standalone: true,
  imports: [],
  template: `
    <section>
      <b>Gists Info</b>
      <br />
      https://api.github.com/users/[username]/gists
    </section>
  `,
  styles: [],
})
export class GistsComponent {}
