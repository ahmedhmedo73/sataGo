import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CustomHttpInterceptorInterceptor } from './core/interceptors/custom-http-interceptor.interceptor';
import { LoginComponent } from './view/pages/auth/login/login.component';
import { RegisterAgentComponent } from './view/pages/auth/register-agent/register-agent.component';
import { RegisterDriverComponent } from './view/pages/auth/register-driver/register-driver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/pages/auth/login/login.module';




@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterAgentComponent, RegisterDriverComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ReactiveFormsModule,
    LoginModule,

    // Vex
    VexModule,
    CustomLayoutModule


  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomHttpInterceptorInterceptor,
      multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
