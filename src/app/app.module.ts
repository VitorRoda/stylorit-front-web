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

//imports
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { SwiperModule } from 'ngx-swiper-wrapper'
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper'
import { SwiperConfigInterface } from 'ngx-swiper-wrapper'

const maskConfig: Partial<IConfig> = {
  dropSpecialCharacters: true
}

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
  providers: [
    { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
