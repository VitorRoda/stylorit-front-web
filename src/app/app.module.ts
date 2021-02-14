import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//directives
import { HeaderComponent } from '../app/components/header/header.component'
import { FooterComponent } from '../app/components/footer/footer.component'

//pages
import { HomeComponent } from './pages/home/home.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SwiperModule } from 'swiper/angular';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  dropSpecialCharacters: true
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
