import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista: string;
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista ? this.filtrarEventos(this.filtroLista, "Tema") : this.eventos;
  }

  _filtroLocal: string;
  get filtroLocal(): string {
    return this._filtroLocal;
  }
  set filtroLocal(value: string){
    this._filtroLocal = value;
    this.eventosFiltrados = this._filtroLocal ? this.filtrarEventos(this.filtroLocal, "Local") : this.eventos;
  }

  _filtroData: string;
  get filtroData(): string {
    return this._filtroData;
  }
  set filtroData(value: string){
    this._filtroData = value;
    this.eventosFiltrados = this._filtroData ? this.filtrarEventos(this.filtroData, "Data") : this.eventos;
  }

  _filtroQtdPessoas: string;
  get filtroQtdPessoas(): string {
    return this._filtroQtdPessoas;
  }
  set filtroQtdPessoas(value: string){
    this._filtroQtdPessoas = value;
    this.eventosFiltrados = this._filtroQtdPessoas ? this.filtrarEventos(this.filtroQtdPessoas, "QtdPessoas") : this.eventos;
  }

  _filtroLote: string;
  get filtroLote(): string {
    return this._filtroLote;
  }
  set filtroLote(value: string){
    this._filtroLote = value;
    this.eventosFiltrados = this._filtroLote ? this.filtrarEventos(this.filtroLote, "Lote") : this.eventos;
  }

  eventosFiltrados: any [];  
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem  = 2;
  mostrarImagem = false;
    
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtrarPor: string, Tipo: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    if (Tipo == "Tema")  {   
      return this.eventos.filter(
        evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );
    }

    if (Tipo == "Local")  {   
      return this.eventos.filter(
        evento => evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );
    }

    if (Tipo == "Data")  {   
      return this.eventos.filter(
        evento => evento.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );
    }

    if (Tipo == "QtdPessoas")  {   
      return this.eventos.filter(
        evento => evento.qtdPessoas.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );
    }

    if (Tipo == "Lote")  {   
      return this.eventos.filter(
        evento => evento.lote.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );
    }
  }
  
  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }
  
  getEventos(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => { 
      this.eventos = response; 
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
