import { Component, OnInit } from '@angular/core';
import { TopService } from './services/top.service';
import { RecientesService } from './services/recientes.service';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GenPag';

  constructor ( public topService: TopService ) {}
  public ngOnInit() {}
}
