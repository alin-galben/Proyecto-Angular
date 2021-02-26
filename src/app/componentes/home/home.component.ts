import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string= ""
  num1: number = null
  usuarios = [
    {nombre: "Alin", apellido: "Galben "},
    {nombre: "Fernando", apellido: "Alonso"},
    {nombre: "Javier", apellido: "Rodriguez"}
  ]
  usuarios2: Usuario[] =[
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "García"},
    {nombre: "Filomena", apellido: "Borrasca"}
  ]
  usuarioSel
  usuario3: Usuario = new Usuario("Alin", "Galben")
  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    console.log("Adios")
  }
}
