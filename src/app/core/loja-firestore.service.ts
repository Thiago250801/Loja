import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  collectionData, docData
} from "@angular/fire/firestore";
import { Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import { Produto } from "../features/produto/interfaces/produto.interface";

@Injectable({
  providedIn: 'root'
})
export class LojaFirestoreService {
  private  produtoCollection : CollectionReference<DocumentData>

  constructor(
    private readonly firestore: Firestore
  ) {
    this.produtoCollection = collection(this.firestore, 'produto')
  }

  getAll(){
    return collectionData(this.produtoCollection, {
      idField: 'id',
    })as Observable<Produto[]>
  }

  get(id: string){
    const produtoDocumentReference = doc(this.firestore,  `produto/${id}`)
    return docData(produtoDocumentReference,{idField: 'id'})
  }

  create(produto: Produto){
    return addDoc(this.produtoCollection, produto)
  }

  update(produto: Produto){
    const produtoDocumentReference = doc(
      this.firestore,
      `produto/${produto.id}`
    )
    return updateDoc(produtoDocumentReference, {...produto})
  }

  delete(id: string){
    const produtoDocumentReference = doc(this.firestore, `produto/${id}`)
    return deleteDoc(produtoDocumentReference)
  }

}
