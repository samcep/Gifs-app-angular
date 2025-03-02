import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {


  constructor(private _gifsService : GifsService) {}


  get gifs() : Gif[] {
    return this._gifsService.gifLists
  }
}
