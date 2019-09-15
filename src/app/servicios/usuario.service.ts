import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public auth: AngularFireAuth) { }

  logout() {
    return this.auth.auth.signOut();
  }

  loginGoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    return this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  registrarUsuario(email: string, clave: string) {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, clave)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
  }

  getInfoCuenta() {
    return this.auth.authState.map(auth => auth);
  }

  loginUsuario(email: string, clave: string) {
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, clave)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
  }
}
