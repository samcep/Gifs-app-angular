import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  template: `
    <label class="input">
      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
      <input (keyup.enter)="searchGifs()" type="search" required placeholder="Search" #gifsSearch/>
    </label>`
    ,
})
export class GifsSearchComponent {

  private _gifsService  : GifsService;

  constructor(gifsService : GifsService) {
    this._gifsService = gifsService;
  }
  @ViewChild("gifsSearch")
  public gifsSearchInput! : ElementRef<HTMLInputElement>;

  searchGifs() { 
    const gifsTerm = this.gifsSearchInput.nativeElement.value; 
    this._gifsService.searchGifs(gifsTerm)
    this.gifsSearchInput.nativeElement.value = "";
  }
}
