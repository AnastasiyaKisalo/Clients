import {Component, OnInit} from '@angular/core';
import {ClientService} from './services/clients.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClientService]
})
export class AppComponent implements OnInit {


  constructor(private clientsService: ClientService) {

  }

  ngOnInit() {}

}
