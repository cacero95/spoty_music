import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'artista/:id',component:ArtistaComponent},
  {path:'search',component:SearchComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
