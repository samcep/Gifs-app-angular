import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { GifsNavbarComponent } from './components/gifs-navbar/gifs-navbar.component';
import { GifsOptionsComponent } from './components/gifs-options/gifs-options.component';
import { GifsSearchComponent } from './components/gifs-search/gifs-search.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsNavbarComponent,
    GifsOptionsComponent,
    GifsSearchComponent,
    GifsCardComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
