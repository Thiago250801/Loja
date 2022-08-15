import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import {ComprarComponent} from "./components/comprar/comprar.component";
import {HistoricoCompraComponent} from "./components/historico-compra/historico-compra.component";

const routes: Routes = [{ path: '', component: ProdutoComponent },
  {path: 'comprar', component: ComprarComponent},
  {path: 'historico-compra', component: HistoricoCompraComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
