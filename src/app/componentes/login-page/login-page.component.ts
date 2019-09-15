import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  email: any;
  clave: any;

  constructor(private UsuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.UsuarioService.loginUsuario(this.email, this.clave)
    .then( (resultado) => {
      this.router.navigate(['/privado']);  
    }).catch((error) => {
      console.log('por error' + error);
      this.router.navigate(['/login']); 
    }); 
  }

  loginGoogle() {
    this.UsuarioService.loginGoogle().then(resultado => {
      this.router.navigate(['/privado']); 
    }).catch(error => {
      console.log(error);
    })
  } 
  loginFacebook() {
    this.UsuarioService.loginFacebook().then(resultado => {
      this.router.navigate(['/privado']); 
    }).catch(error => {
      console.log(error);
    })
  }

}
