import { Injectable } from '@angular/core';
import { MasvistosInterface } from './../interfaces/masvistos.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MasvistosService {
  cargando = true;
  masvistos: MasvistosInterface[] = [];
  constructor( private http: HttpClient) {
    this.cargarMasvistos();
  }
  private cargarMasvistos() {
    this.http.get('https://paggen-f2921.firebaseio.com/AKJ/MasVistos.json')
    .subscribe( (resp: MasvistosInterface[] ) => {
      this.masvistos = resp;
      this.cargando = false;
    });
  }
  getItem (id: string) {
    return this.http.get(`https://paggen-f2921.firebaseio.com/AKJ/loadItem/${id}.json`);
  }
}
