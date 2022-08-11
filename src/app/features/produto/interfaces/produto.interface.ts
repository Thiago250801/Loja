import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;


export interface Produto{
  id: string,
  nome: string;
  categoria: string
  descricao: string;
  preco: number;
  DataCompra:Timestamp
}
