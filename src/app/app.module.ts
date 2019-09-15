import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { NavBarPageComponent } from './componentes/nav-bar-page/nav-bar-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import { UsuarioService } from './servicios/usuario.service';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule} from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AuthGuard } from './seguridad/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registro', component: RegistroPageComponent },
  { path: 'privado', component: PrivadoPageComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistroPageComponent,
    NavBarPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, ToastModule.forRoot(),
    RouterModule.forRoot(routes), FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [ToastsManager, UsuarioService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
