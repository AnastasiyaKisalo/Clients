import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Client} from '../models/clients';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {}
  clientsUrl = '../assets/clients.json';
  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }
}
