import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit {


  @Input()
  public gif!: Gif;

  ngOnInit(){
    if(!this.gif) throw new Error("missing property gif")
  }
}
