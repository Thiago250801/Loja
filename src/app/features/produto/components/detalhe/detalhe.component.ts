import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";
import {CompraInterface} from "../../interfaces/compra.interface";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
import {LojaFirestoreService} from "../../../../core/loja-firestore.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit{
  @Input() produto: Produto
  @Output() updateProduto = new EventEmitter<void>();
  @Output() deleteProduto = new EventEmitter<void>();

  constructor(


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
