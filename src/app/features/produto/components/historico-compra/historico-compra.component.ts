import { Component, OnInit } from '@angular/core';
import {LojaFirestoreService} from "../../../../core/loja-firestore.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-historico-compra',
  templateUrl: './historico-compra.component.html',
  styleUrls: ['./historico-compra.component.scss']
})
export class HistoricoCompraComponent implements OnInit {

  constructor(
    private service: LojaFirestoreService
  ) { }
  ngOnInit(): void {
  }

}
