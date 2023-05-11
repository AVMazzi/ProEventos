import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

<<<<<<< HEAD
  public eventos: any = [];
  public eventosFiltrados : any =[];

  larguraImagem:number=150;
  margemImagem:number=2;
  exibirImagem:boolean=true;
  private _filtroLista : string = '';

  filtrarEventos(filtrarPor : string) : any{
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      (      evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  public get filtroLista() : string{
    return this._filtroLista;
  }

  public set filtroLista (value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

=======
  public eventos: any;
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

<<<<<<< HEAD
  alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }
=======
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3


  public getEventos():void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
<<<<<<< HEAD
      response => {
        this.eventos =response;
        this.eventosFiltrados = this.eventos;
      },
=======
      response => this.eventos =response,
>>>>>>> f95937d16223ce584ff9f7fa8cc95cde9d55b7d3
      error => console.log(error)
    );
  }
}
