import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './components/contatti/contatti.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'chiSiamo', component: ChiSiamoComponent,
  },
  {
    path: 'contatti', component: ContattiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
