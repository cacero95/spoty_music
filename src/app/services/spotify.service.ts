import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string;
  headers;
  raiz:string;
  constructor(private http:HttpClient) {
    this.raiz = 'https://api.spotify.com/v1/';
  }
  getNewReleases(){
    let headers = this.headers;
    return this.http.get(`${this.raiz}browse/new-releases?limit=20`,{headers})
    .pipe(map(elements=>{
      return elements['albums'].items;
    }))
  }
  search_artist(artista){
    let headers = this.headers;
    return this.http.get(`${this.raiz}search?q=${artista}&type=artist&limit=15`,{headers})
    .pipe(map(element=>{
      return element['artists'].items;
    }))
  }
  getArtist(id_artista){
    let headers = this.headers;
    return this.http.get(`${this.raiz}artists/${id_artista}`,{headers});
  }
  getTopTracks_artist(id){
    console.log(id);
    let headers = this.headers;
    return this.http.get(`${this.raiz}artists/${id}/top-tracks?country=es`,{headers})
    .pipe(map(elements=>{
      return elements['tracks'];
    }))
  }
  getToken(){
    return new Promise(resolve=>{
      this.http.get('https://vetcompany.herokuapp.com/spotyapp')
        .subscribe((token:any)=>{
          this.token = token.token.access_token;
          this.headers = new HttpHeaders({
            'Authorization':`Bearer ${this.token}`
          });
          resolve(this.token);
        })
    })
  }
}
