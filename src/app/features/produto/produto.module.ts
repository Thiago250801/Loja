import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent} from "./components/produtos/produtos.component";
import {MaterialAngular} from "../../shared/material-angular.module";
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import {registerLocaleData} from "@angular/common";
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from "@angular/core";
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt, 'pt')
@NgModule({
  declarations: [
    ProdutoComponent,
    FormComponent,
    ProdutosComponent,
    DetalheComponent,
    ComprarComponent
  ],
    imports: [
        CommonModule,
        ProdutoRoutingModule, ReactiveFormsModule, MaterialAngular
    ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ]
})
export class ProdutoModule { }
