import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { BodyMobileComponent } from './body-mobile/body-mobile.component';
import { MaterialModule} from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HeaderMobileComponent,
    BodyMobileComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
