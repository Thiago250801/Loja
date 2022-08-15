import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "./components/form/form.component";
import {filter, Observable, pipe, Subject, takeUntil, tap} from "rxjs";
import {Produto} from "./interfaces/produto.interface";
import {LojaFirestoreService} from "../../core/loja-firestore.service";
import {ComprarComponent} from "./components/comprar/comprar.component";
import {Router} from "@angular/router";
import {CompraInterface} from "./interfaces/compra.interface";
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  selectedProduto?: Produto
  allProduto$: Observable<Produto[]>;
  destroyed$ = new Subject<void>();

  constructor(
    private readonly dialog : MatDialog,
    private readonly service: LojaFirestoreService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.allProduto$ = this.service.getAll()
  }

  open() {
    const dialogRef = this.dialog.open(FormComponent,{
      data: {...this.selectedProduto},
      width: '540px',
    })
    dialogRef.afterClosed().pipe(
      filter(Boolean),
      tap((produto) => this.service.create(produto)),
      takeUntil(this.destroyed$)
    )
      .subscribe()
  }
  updateProduto(){
    const dialogRef = this.dialog.open(FormComponent, {
      data:{...this.selectedProduto},
      width: '540px',
    })
    dialogRef.afterClosed().pipe(
      filter(Boolean),
      tap((produto) => this.service.update(produto)),
      tap((produto) => this.selectProduto(produto)),
      takeUntil(this.destroyed$)
    )
      .subscribe()
  }
  selectProduto(produto : Produto){
    this.selectedProduto = produto
  }

  comprarProduto(){
    const dialogRef = this.dialog.open(ComprarComponent, {
      data:{...this.selectedProduto},
      width: '540px',
    })
    dialogRef.afterClosed().pipe(
      filter(Boolean),
      tap((produto) => this.service.get(produto)),
      takeUntil(this.destroyed$)
    )
      .subscribe()

  }

  acceptProduto(){


  }

  deleteProduto(){
    this.service.delete(this.selectedProduto!.id)
    this.selectedProduto = undefined
  }

  ngOnDestroy(){
    this.destroyed$.next()
  }
}

