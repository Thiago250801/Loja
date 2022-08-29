import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import {Produto} from "../../interfaces/produto.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DetalheComponent} from "../detalhe/detalhe.component";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  @Input() produto$: Observable<Produto[]>
  @Output() produtoEmmiter = new EventEmitter<Produto>()

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  selectProduto(produto : Produto){
    this.produtoEmmiter.emit(produto)

  }

}
