import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import { AltaPersonal } from "../personal/alta-personal/alta-personal";
import { CONSTANTS } from "../constants";

@Injectable()
export class EmpleadoService {

    constructor(private http: HttpClient, private http2: Http) { }

    gestionPersonal() {
        return this.http2.get('http://localhost:8080/empleado/gestionPersonal').pipe(map(res => res.json())).subscribe(result => {
            console.log(result)});
    }

    altaPersonal(altaPersonal: AltaPersonal) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const json = JSON.stringify(altaPersonal);
        console.log('\nJSON: ' + json);
	console.log('\nURL servicio: ' + "localhost:8085/clients-reservations/clients-register")
        return this.http.post('http://localhost:8085/clients-reservations/clients-register', json, {headers: headers});
    }

    buscarEmpleado(busqueda: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const params = 'busqueda=' + busqueda;
        return this.http.post('http://localhost:8080/empleado/datosModificaEmpleado', params, {headers: headers});
    }

    modificaPersonal(modificaPersonal: AltaPersonal) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const json = JSON.stringify(modificaPersonal);
        console.log('\n\n\nJSON: ' + json);
        return this.http.post('http://localhost:8080/empleado/modificaEmpleado', json, {headers: headers});
    }

    bajaPersonal(busqueda: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const params = 'busqueda=' + busqueda;
        return this.http.post('http://localhost:8080/empleado/bajaEmpleado', params, {headers: headers});
    }

    empleadosDeLiser(){
        return this.http2.get(CONSTANTS.endpoints.empleadosDeLider).pipe(map(res => res.json())).subscribe(result => {
            console.log(result)});
    }
}
