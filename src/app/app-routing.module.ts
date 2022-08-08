import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent} from "./index/index.component";
import {ProdutosComponent} from "./produtos/produtos.component";
import {CadastrarProdutosComponent} from "./cadastrar-produtos/cadastrar-produtos.component";

const routes: Routes = [
  {
    path: 'cadastrar',component: CadastrarProdutosComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'produtos', component: ProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
