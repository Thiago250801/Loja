import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit{
  @Input() produto: Produto
  @Output() updateProduto = new EventEmitter<void>();
  @Output() deleteProduto = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.updateProduto.emit()
  }

  delete(){
    this.deleteProduto.emit()
  }
}
