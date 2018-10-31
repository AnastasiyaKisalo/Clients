import { Component, OnInit } from '@angular/core';
import {Client} from '../models/clients';
import {ClientService} from '../services/clients.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }
  getSelectedClient(): Client {
    return this.clientService.getSelectedClient();
  }

  isLoaded(): boolean {
    return this.clientService.isClientsLoaded();
  }
}
