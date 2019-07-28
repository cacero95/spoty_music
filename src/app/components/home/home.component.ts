import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from '../../models/music';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Item[] = [];
  load = false;
  constructor(private spoty:SpotifyService) { }

  async ngOnInit() {
    await this.spoty.getToken();
    this.spoty.getNewReleases().subscribe((music:any)=>{
      this.items = music;
      this.load = true;
      console.log(this.items);
    })
  }

}
