import { Component, Input } from '@angular/core';
import { User } from '../../common/types/user';

@Component({
  selector: 'rmt-user',
  standalone: true,
  template: `
    @if (data) {
      <section>
        <b>User Info</b>
        <br />
        https://api.github.com/users/{{ data.username }}
      </section>
    } @else {
      No user data available.
    }
  `,
  styles: [],
})
export class UserComponent {
  @Input() data: User;
}
