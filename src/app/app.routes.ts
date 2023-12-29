import { Routes } from '@angular/router';
import {
  GistsComponent,
  RepositoriesComponent,
  UserComponent,
} from './features';

export const routes: Routes = [
  {
    path: 'gists',
    component: GistsComponent,
  },
  {
    path: 'repos',
    component: RepositoriesComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
