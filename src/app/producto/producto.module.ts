import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductoListaComponent,
    ProductoFormComponent
  ],
  exports: [
    ProductoListaComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductoModule { }
