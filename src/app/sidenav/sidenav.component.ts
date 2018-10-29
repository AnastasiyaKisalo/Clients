import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../services/clients.service';
import {Client} from '../models/clients';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  clientList: Client[] = [];
  constructor(private clientsService: ClientService) { }

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((data) => {this.clientList = data;});
  }
  onSelect(client: Client): void {
    this.clientsService.setSelectedClient(client);
  }
}
