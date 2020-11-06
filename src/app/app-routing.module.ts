import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SillitasAboutComponent } from './sillitas-about/sillitas-about.component';
import { SillitasChairsComponent } from './sillitas-chairs/sillitas-chairs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chairs',
    pathMatch: 'full'
  },
  {
    path: 'chairs',
    component: SillitasChairsComponent
  },
  {
    path: 'about',
    component: SillitasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
