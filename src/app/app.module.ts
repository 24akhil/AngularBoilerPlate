import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationModule } from './features/navigation/navigation.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './features/categories/categories.component';
import { ItemModule } from './features/item/item.module';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';
import { CartComponent } from './shared/cart/cart.component';
import { EditCartComponent } from './shared/edit-cart/edit-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PagenotfoundComponent,
    EditCartComponent,
    //CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NavigationModule,
    HttpClientModule,
    ItemModule,
    AlertModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
