import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './features/item/product/product.component';
import { NavigationModule } from './features/navigation/navigation.module';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'product/:id/:name', component: ProductComponent, pathMatch: 'full' },
  { path: '*', component: ProductComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  NavigationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
