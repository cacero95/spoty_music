import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from 'src/app/models/artistas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas:Item[] = [];
  load = 0;
  constructor(private spoty:SpotifyService,
    private router:Router) { }

  async ngOnInit() {
    await this.spoty.getToken();
  }
  buscar(event){
    let busqueda_artista:string = event.target.value;
    this.load = 1; // se inicia el loading
    console.log(this.load);
    while(busqueda_artista.indexOf(" ") != -1){
      busqueda_artista = busqueda_artista.replace(" ","%20");
    }
    this.spoty.search_artist(busqueda_artista)
    .subscribe((musica:any)=>{
      this.artistas = musica;
      this.load = -1;
      console.log(this.artistas);
    })
  }
  getArtista(id){
    this.router.navigate(['/artista',id]);
  }
}
