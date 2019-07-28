import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.css']
})
export class TargetasComponent implements OnInit {
  @Input() items:any[] = [];
  @Input() artistas:any[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.artistas);
  }

}
