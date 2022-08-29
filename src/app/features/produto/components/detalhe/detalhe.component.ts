import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";
import {CompraInterface} from "../../interfaces/compra.interface";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
import {LojaFirestoreService} from "../../../../core/loja-firestore.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  animations: [
    // fundo escuro que fica atrás do modal
    trigger('overlay', [
      transition(':enter', [
        // Inicia com o opacity zerado
        style({ opacity: 0 }),

        // efetua a animação de 250ms para o
        // o opacity de 0 até 0.5
        animate('250ms', style({ opacity: .5 })),
      ]),
      transition(':leave', [
        // Quando for esconder o overlay,
        // anima do opacity atual, 0.5, até
        // o valor 0
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),

    // animação na parte branca do modal
    trigger('mod', [
      transition(':enter', [
        // inicia com o modal "lá em cima"
        style({ top: -999 }),

        // e finaliza com o modal no meio da tela
        animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [

        // para esconder o modal, basta
        // "jogar ele lá para cima da tela"
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]

})
export class DetalheComponent implements OnInit{
  @Input() produto: Produto
  @Output() updateProduto = new EventEmitter<void>();
  @Output() deleteProduto = new EventEmitter<void>();
  mostrar: boolean = false

  constructor(

) {
  }

  ngOnInit(): void {

  }

  update(){
    this.updateProduto.emit()
  }

  delete(){
    this.deleteProduto.emit()

  }


  toggle() {
    this.mostrar = !this.mostrar;
  }
}
