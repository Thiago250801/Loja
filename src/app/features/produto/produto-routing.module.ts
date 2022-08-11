import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import {ComprarComponent} from "./components/comprar/comprar.component";

const routes: Routes = [{ path: '', component: ProdutoComponent },
  {path: 'comprar', component: ComprarComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
