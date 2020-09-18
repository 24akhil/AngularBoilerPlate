import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { CartComponent } from '../../shared/cart/cart.component';


@NgModule({
  declarations: [NavComponent,CartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule 
  ],
  exports:[NavComponent]
})
export class NavigationModule { }
