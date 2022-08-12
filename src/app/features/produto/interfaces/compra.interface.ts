import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface CompraInterface{
  id: string,
  nome: string;
  categoria: string
  preco: number;
  DateTimeCompra: Timestamp
}
