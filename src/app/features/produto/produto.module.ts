import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent} from "./components/produtos/produtos.component";
import {MaterialAngular} from "../../shared/material-angular.module";
import { DetalheComponent } from './components/detalhe/detalhe.component';


@NgModule({
  declarations: [
    ProdutoComponent,
    FormComponent,
    ProdutosComponent,
    DetalheComponent
  ],
    imports: [
        CommonModule,
        ProdutoRoutingModule, ReactiveFormsModule, MaterialAngular
    ]
})
export class ProdutoModule { }
