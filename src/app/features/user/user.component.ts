import { Component } from '@angular/core';

@Component({
  selector: 'rmt-user',
  standalone: true,
  imports: [],
  template: `
    <section>
      <b>User Info</b>
      <br />
      https://api.github.com/users/[username]
    </section>
  `,
  styles: [],
})
export class UserComponent {}
