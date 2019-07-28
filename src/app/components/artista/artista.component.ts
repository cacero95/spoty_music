import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Cantante } from '../../models/artistas';
import { Track } from '../../models/tracks';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  singer:Cantante;
  loading:boolean = true;
  tracks:Track[] = [];
  constructor(private params:ActivatedRoute,
    private spoty:SpotifyService) { }

  async ngOnInit() {
    await this.spoty.getToken();
    this.params.params.subscribe((parametros:any)=>{
      console.log(parametros);
      this.getTop_tracks(parametros.id);
      this.spoty.getArtist(parametros.id)
      .subscribe((cantante:any)=>{
        this.singer = cantante;
        this.loading = false;
      })
    });
  }
  getTop_tracks(id){
    this.spoty.getTopTracks_artist(id)
    .subscribe((musica)=>{
      this.tracks = musica;
      console.log(this.tracks);
    })
  }
}
