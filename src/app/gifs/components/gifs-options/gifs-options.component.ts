import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-options',
  templateUrl: './gifs-options.component.html',
})
export class GifsOptionsComponent {

 get gifsSearchHistory() : string[]{
  return this._gifsService.gifsSearchHistory;
 } 

  constructor(
    private _gifsService : GifsService
  ) {}


  searchGifs(gifsTerm : string){
    this._gifsService.searchGifs(gifsTerm)
  }

}
