import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface CompraInterface{
  DateTimeCompra: Timestamp
  idCompra: string
}
