import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "about", component: AboutComponent },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
