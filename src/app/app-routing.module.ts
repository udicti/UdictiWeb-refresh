import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicPageComponent} from './public-page/public-page.component';
import {PublicPageModule} from './public-page/public-page.module';



const routes: Routes = [
  {path: '', component: PublicPageComponent,
  loadChildren: () => PublicPageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
