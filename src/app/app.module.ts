import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Routing
import { AppRouterModule } from './app-router.module';

// Modulos del Shared
import { SharedModule } from './shared/shared.module';

import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la App
import localeES from "@angular/common/locales/es-CO";
import localeFR from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common"

registerLocaleData( localeES );
registerLocaleData( localeFR );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
