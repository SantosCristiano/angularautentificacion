import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'autentificacion';
  constructor(private toastsManager:ToastsManager, vcr:ViewContainerRef) {
    this.toastsManager.setRootViewContainerRef(vcr);

   // this.toastsManager.success('puebra exitosa', 'aplicacion autentificacion');
  }
}
