import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado-service';
import { AltaPersonal } from './alta-personal';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-personal',
  templateUrl: './alta-personal.component.html',
  styleUrls: ['./alta-personal.component.css']
})
export class AltaPersonalComponent implements OnInit {

  public datosBusqueda;
  public altaPersonal: AltaPersonal;

  constructor(private _empleadoService: EmpleadoService,
              private _toastrService: ToastrService) { this.altaPersonal = new AltaPersonal(); }

  ngOnInit() {
  }

  enviarPeticion() {
    const tituloMen = 'DATOS INCOMPLETOS';
    if (this.altaPersonal.firstName === undefined || this.altaPersonal.firstName === '') {
      this._toastrService.warning('Ingrese el nombre del empleado', tituloMen);
    } else if (this.altaPersonal.lastName === undefined || this.altaPersonal.lastName === '') {
      this._toastrService.warning('Ingrese el apellido paterno', tituloMen);
    } else if (this.altaPersonal.motherLastName === undefined || this.altaPersonal.motherLastName === '') {
      this._toastrService.warning('Ingrese el apellido materno', tituloMen);
    } else if (this.altaPersonal.age === undefined || this.altaPersonal.age === '') {
      this._toastrService.warning('Ingrese la edad', tituloMen);
    } else if (this.altaPersonal.idProduct === undefined || this.altaPersonal.idProduct === '0') {
      this._toastrService.warning('Seleccione un producto', tituloMen);
    } else {
      let texto = '';
      let boton = '';
      texto = '¿Seguro que desea REGISTRAR el cliente?';
      boton = 'Aceptar';
      swal.fire({
        title: 'Confirmaci&oacute;n',
        text: texto,
        type: 'info',
        showCancelButton: true,
        cancelButtonColor: '#DD6B55',
        cancelButtonText: 'Cancelar',
        confirmButtonText: boton,
      }
      ).then((result) => {
        if (result.value) {
	  if(this.altaPersonal.idProduct !== "0"){
		console.log('Entro al IF con product valor: ' + this.altaPersonal.idProduct);
		console.log('VAlor 1 de accpting: '+ this.altaPersonal.acceptingToJoin);
		this.altaPersonal.acceptingToJoin = true;
		console.log('VAlor 2 de accpting: '+ this.altaPersonal.acceptingToJoin);
	  }
          this.alta(this.altaPersonal);
        }
      });
    }
  }

  alta(altaPersonal: AltaPersonal) {
    console.log('Datos a enviar al servicio: ' + JSON.stringify(altaPersonal));
    this._empleadoService.altaPersonal(altaPersonal).subscribe(
      result => {
        this.datosBusqueda = result;
	console.log('Respuesta: ' + JSON.stringify(this.datosBusqueda));
        if (this.datosBusqueda.status === 0) {
          this._toastrService.success('El empleado ha sido registrado con éxito', 'PETICION EXITOSA');
          this.altaPersonal = new AltaPersonal();
        } else {
          this._toastrService.error(this.datosBusqueda.descripcion, 'ERROR EN LA PETICION');
        }
      }
    );
  }
}
