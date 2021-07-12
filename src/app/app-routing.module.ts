import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsParcoComponent } from './pages/details-parco/details-parco.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListParchiComponent } from './pages/list-parchi/list-parchi.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'parchi', component: ListParchiComponent },
  { path: 'parchi/:id', component: DetailsParcoComponent },
  { path: 'event', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
