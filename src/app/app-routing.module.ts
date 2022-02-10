import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BadRouteComponent } from './shared/components/bad-route/bad-route.component';

const routes: Routes = [
{path: 'about', component : AboutComponent},
  {path: 'home', component : HomeComponent},
{path:'demo', loadChildren : () => import('./demo/demo.module').then(m => m.DemoModule)},
{path:'exercice', loadChildren : () => import('./exercice/exercice.module').then(m => m.ExerciceModule)},
{path:'bad-route', component:BadRouteComponent},
{path:'**',redirectTo:'bad-route'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 