import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.less']
})
export class RegistroPageComponent implements OnInit {
  email: any;
  clave: any;

  constructor(private UsuarioService: UsuarioService, 
    public router: Router, 
    public vcr: ViewContainerRef, 
    public toastsManager: ToastsManager) {
      toastsManager.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.UsuarioService.registrarUsuario(this.email, this.clave)
    .then( (resultado) => {
      this.toastsManager.success("Registro Exitoso", "Firebase");
      this.router.navigate(['/privado']);  
    });
      
  }

}
