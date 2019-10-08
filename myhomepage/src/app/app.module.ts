import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SlideCarousselComponent } from './slide-caroussel/slide-caroussel.component';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent,
    SlideCarousselComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
