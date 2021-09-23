import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationWindowComponent } from './components/registration-window/registration-window.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
    LoginWindowComponent,
    RegistrationWindowComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
