import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ComprarComponent} from "../comprar/comprar.component";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit{
  @Input() produto: Produto
  @Output() updateProduto = new EventEmitter<void>();
  @Output() deleteProduto = new EventEmitter<void>();
  @Output() comprarProduto = new EventEmitter<void>()

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  update(){
    this.updateProduto.emit()
  }

  delete(){
    this.deleteProduto.emit()
  }

  comprar() {
    this.comprarProduto.emit()

  }
}
