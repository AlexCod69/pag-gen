import { Injectable } from '@angular/core';
import { RecientesInterface } from './../interfaces/recientes.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecientesService {
cargando = true;
recientesV: RecientesInterface[] = [];
  constructor( private http: HttpClient) {
    this.cargarRecientes();
  }
  private cargarRecientes() {
    this.http.get('https://paggen-f2921.firebaseio.com/AKJ/Recientes.json')
     .subscribe( (resp: RecientesInterface[]) => {
      this.recientesV = resp;
      this.cargando = false;
     });
  }
  getItem (id: string) {
    return this.http.get(`https://paggen-f2921.firebaseio.com/AKJ/loadItem/${id}.json`);
  }
}
