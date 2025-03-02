import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private _httpClient : HttpClient
  ) { 
    this.loadLocalStorage()
  }

  private gifsApiUrl : string = 'https://api.giphy.com/v1/gifs'
  private _gifsSearchHistory: string[] = [];
  private api_key : string = 'YOUR_API_KEY'

  public gifLists: Gif[] = [];

  private  MAX_HISTORIES : number=  10;
  get gifsSearchHistory(){
    return [...this._gifsSearchHistory];
  }

  private loadLocalStorage(){
    const temporal = localStorage.getItem('history')
    if(temporal)  {
      this._gifsSearchHistory = JSON.parse(temporal)
      this.searchGifs(this._gifsSearchHistory[0]);
    }
  }
  private saveLocalStorage() { 
    localStorage.setItem('history' , JSON.stringify(this._gifsSearchHistory))
  }
  private organizeHistory(gifsTerm: string ) { 
    gifsTerm = gifsTerm.toLowerCase();
    if(this._gifsSearchHistory.includes(gifsTerm) ) { 
      this._gifsSearchHistory = this._gifsSearchHistory.filter(oldGif => oldGif != gifsTerm)
    }
    this._gifsSearchHistory.unshift(gifsTerm);
    this._gifsSearchHistory = this._gifsSearchHistory.splice(0 ,this.MAX_HISTORIES);
    this.saveLocalStorage()
  }
  searchGifs(gifsTerm : string){
    if(gifsTerm.length == 0 ) return;
    this.organizeHistory(gifsTerm)
    const params = new HttpParams()
      .set('api_key' , this.api_key)
      .set('limit' , 10)
      .set('q' , gifsTerm)
    this._httpClient.get<SearchResponse>(`${this.gifsApiUrl}/search` , {
      params: params
    })
      .subscribe(response => {
         this.gifLists = response.data
         console.log(this.gifLists)
      })
  }
}
