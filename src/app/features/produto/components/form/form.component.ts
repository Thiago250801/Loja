import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validator, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produto} from "../../interfaces/produto.interface";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form : UntypedFormGroup;


  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly produto: Produto
  ) { }

  ngOnInit() {
    this.setForm()

  }

  setForm(){
    this.form = this.fb.group({
      nome: [this.produto.nome, [Validators.required]],
      descricao: [this.produto.descricao, [Validators.required]],
      categoria: [this.produto.categoria, [Validators.required]],
      preco: [this.produto.preco, [Validators.required]]
    })
  }
  submit(){
    this.dialogRef.close({...this.produto, ...this.form.value})
  }
}
