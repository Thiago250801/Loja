import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";
import {CompraInterface} from "../../interfaces/compra.interface";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
import {LojaFirestoreService} from "../../../../core/loja-firestore.service";

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
  compra: CompraInterface;

  constructor(
    private servive : LojaFirestoreService
  ) { }

  ngOnInit(): void {
  }

  update(){
    this.updateProduto.emit()
  }

  delete(){
    this.deleteProduto.emit()
  }


}
