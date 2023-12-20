import { Component } from '@angular/core';

@Component({
  selector: 'rmt-stats',
  standalone: true,
  imports: [],
  template: `
    <section>
      <b>Stats Info</b>
      <br />
      various counts (followers, following, repos, date created/updated)
    </section>
  `,
  styles: [],
})
export class StatsComponent {}
