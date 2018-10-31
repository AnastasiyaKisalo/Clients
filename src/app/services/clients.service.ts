import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {Client} from '../models/clients';
import { map } from 'rxjs/operators';
import {catchError, tap} from "rxjs/internal/operators";

@Injectable()
export class ClientService {
  selectedClient: Client;
  clientList: Client[] = [];
  isLoad = false;

  constructor(private http: HttpClient) {}

  clientsUrl = '../assets/clients.json';

  public getClients(): Observable<Client[]> {
    this.selectedClient = this.clientList[0];
    return this.http.get<Client[]>(this.clientsUrl);
  }
  isClientsLoaded(): boolean {
    return this.isLoad;
  }
  setSelectedClient(client: Client) {
    this.isLoad = true;
    this.selectedClient = client;
  }
  getSelectedClient(): Client {
    return this.selectedClient;
  }
  searchClients(term: string): Observable<Client[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Client[]>(`${this.clientsUrl}/?name=${term}`).pipe(

    );
  }
}
