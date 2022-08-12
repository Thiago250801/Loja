import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Produto} from "../../interfaces/produto.interface";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly produto: Produto,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
  }


  ngOnInit(): void {
  }


  aceppt() {

  }
}
