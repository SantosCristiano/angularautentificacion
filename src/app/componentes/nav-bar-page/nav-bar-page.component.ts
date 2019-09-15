import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-nav-bar-page',
  templateUrl: './nav-bar-page.component.html',
  styleUrls: ['./nav-bar-page.component.less']
})
export class NavBarPageComponent implements OnInit {
  isLogin: boolean;
  nombre: string;
  email: string;
  foto: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getInfoCuenta().subscribe(resultado => {
      if (resultado) {
        this.isLogin = true;
        this.nombre = resultado.displayName;
        this.email = resultado.email;
        this.foto = resultado.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  salir() {
    console.log("salir");
    this.usuarioService.logout();
  }

}
