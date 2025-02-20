import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Municipio } from './interfaces/municipio'
import { Provincia } from './interfaces/provincia'
import { TiempoMunicipio } from './interfaces/tiempomunicipio';
import { TiempoProvincia } from './interfaces/tiempoprovincia';
import { ApiserviceService } from './services/apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  idMunicipio:string=''
  idProvincia:string=''

  municipio:Municipio = {
    codmuni:'',
    codprov: '',
    nombre: ''
  }

  provincia:Provincia = {
    codprov:'',
    nombre:'',
    codauton: '',
    comunidad: '',
    capital: ''
  }
  
  tiempo: TiempoProvincia = {
    codprov: '',
    hoy: '',
    manana: '',
    fecha: ''
  }
  tiempoM : TiempoMunicipio = {
    codmuni: '',
    fecha: '',
    maxima: '',
    minima: '',
    lluvia: ''
  }
  constructor(public apiservice: ApiserviceService){
    
  }

  ngOnInit(): void {
    /*
    this.apiservice.getMunicipiosbyid('01010').subscribe(resp=>{
      this.municipio = resp
    })
    this.apiservice.getProvinciasbyid('01').subscribe(resp=>{
      this.provincia = resp
    })
    this.apiservice.getTemperaturaProvincia('01').subscribe(resp=>{
      this.tiempo = resp
    })
    this.apiservice.getTemperaturaMunicipios('01010').subscribe(resp=>{
      this.tiempoM = resp
    })
    */
  }

  buscarMunicipio(): void{
    if(this.idMunicipio!=''){
      this.apiservice.getTemperaturaMunicipios(this.idMunicipio).subscribe(resp=>{
        this.tiempoM = resp
      })

      this.apiservice.getMunicipiosbyid(this.idMunicipio).subscribe(resp=>{
        this.municipio = resp
      })
    }

    if(this.idProvincia!=''){
      this.apiservice.getProvinciasbyid(this.idProvincia).subscribe(resp=>{
        this.provincia = resp
      })
      this.apiservice.getTemperaturaProvincia(this.idProvincia).subscribe(resp=>{
        this.tiempo = resp
      })
    }
    
  }

}