import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationModule } from './features/navigation/navigation.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesComponent } from './features/categories/categories.component';
import { ItemModule } from './features/item/item.module';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';
import { CartComponent } from './shared/cart/cart.component';
import { EditCartComponent } from './shared/edit-cart/edit-cart.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpServiceInterceptor } from './core/services/http-service.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PagenotfoundComponent,
    LoadingComponent
    //EditCartComponent
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
    // MatProgressSpinnerModule,
    AlertModule.forRoot(),
    
    
    
  ],
  providers: [
    HttpServiceInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true,
    }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
