import { Routes } from '@angular/router';
import {
  GistsComponent,
  RepositoriesComponent,
  StatsComponent,
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
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
