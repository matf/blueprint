import { Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConceptRelationsComponent } from './concept-relations/concept-relations.component';


export const CONFIGURATION_ROUTES: Routes = [
  { path: '', component: ConfigurationComponent },
  { path: 'concept', component: ConceptRelationsComponent },
  { path: 'category', loadChildren: () => import('./category-configurator/routes').then((m) => m.CATEGORY_CONFIGURATION_ROUTES) },
  { path: 'topology', loadChildren: () => import('./topology/routes').then((m) => m.TOPOLOGY_CONFIGURATION_ROUTES) },
  { path: 'details', loadChildren: () => import('./detail-configurator/routes').then((m) => m.DETAIL_CONFIGURATION_ROUTES) },
];
