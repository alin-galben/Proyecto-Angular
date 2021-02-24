import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/clases/user';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  usuarios: any
  usuarioSel: User
  formMensaje = this.fb.group({
    idDestinatario: [''],
    mensaje: ['', Validators.required]
  })
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private servicioMensaje:MensajesService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }
obtenerUsuarios(): void{
  this.servicioUsuario.listarUsuarios().subscribe(
    respuesta =>{
      console.log(respuesta)
      this.usuarios=respuesta
    },
    error => {console.log(error)}
  )
}
escribirMensaje(): void{
  this.servicioMensaje.crearMensaje(this.formMensaje.value).subscribe(
    respuesta =>{
      console.log(respuesta)
    },
    error => {console.log(error)}
  )
}
}
