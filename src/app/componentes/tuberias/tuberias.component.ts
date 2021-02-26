import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="usuario"
  mes: string = "ENERO"
  texto: string = ""
  fecha: Date = new Date()
  dinero: number =2.3
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'en', 'entre']
  usuarios =[
    {nombre: "usuario 1", apellido: "1", edad: 565},
    {nombre: "usuario 2", apellido: "2", edad: 45},
    {nombre: "usuario 3", apellido: "3", edad: 74}
  ]
  dni: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
